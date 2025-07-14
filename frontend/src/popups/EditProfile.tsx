import { 
    Card,
    Text,
    Group,
    Modal,
    TextInput,
    Button,
    PasswordInput,
    FileInput,
    Stack,
    Notification,
    rem
} from "@mantine/core"
import { useForm } from "@mantine/form";
import { useState } from "react";
import api from "@/api";
import classes from './styles/EditProfile.module.css'
import { useUser } from "@/components/UserInfoContext";

interface EditProfileProps {
    opened: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    initialData?: {
        firstName: string;
        lastName: string;
        email: string;
        fbAccount: string;
        igAccount: string;
        profilePic?: File | null;
    };
}

interface UserProfileData {
    first_name?: string;
    last_name?: string;
    email?: string;
    facebook_account?: string;
    instagram_account?: string;
    profile_pic?: File;
    old_password?: string;
    new_password?: string;
}



const EditProfile = ({ opened, onClose, onSuccess, initialData }: EditProfileProps) => {
    // State for managing form submission feedback
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { currentUser, refreshUser } = useUser();

    // Initialize form with validation rules
    const form = useForm({
        initialValues: {
            firstName: initialData?.firstName || '',
            lastName: initialData?.lastName || '',
            email: initialData?.email || '',
            fbAccount: initialData?.fbAccount || '',
            igAccount: initialData?.igAccount || '',
            profilePic: initialData?.profilePic || null,
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            fbAccount: (value) => value ? /^https?:\/\/(?:www\.)?facebook\.com/.test(value) ? null : 'Invalid Facebook URL' : null,
            igAccount: (value) => value ? /^https?:\/\/(?:www\.)?instagram\.com/.test(value) ? null : 'Invalid Instagram URL' : null,
            newPassword: (value, values) => 
                value && !values.currentPassword ? 'Current password is required' : 
                value && value.length < 8 ? 'Password must be at least 8 characters' : null,
            confirmPassword: (value, values) => 
                value && value !== values.newPassword ? 'Passwords do not match' : null,
        }
    });

    const updateUserProfile = async (data: UserProfileData) => {
        const formData = new FormData();
        
        // Handle file upload
        if (data.profile_pic && data.profile_pic instanceof File) {
            formData.append('profile_pic', data.profile_pic);
        }

        // Handle text fields - only append if they have actual values
        if (data.email && data.email.trim()) formData.append('email', data.email.trim());
        if (data.facebook_account && data.facebook_account.trim()) formData.append('fb_account', data.facebook_account.trim());
        if (data.instagram_account && data.instagram_account.trim()) formData.append('ig_account', data.instagram_account.trim());
        if (data.first_name && data.first_name.trim()) formData.append('first_name', data.first_name.trim());
        if (data.last_name && data.last_name.trim()) formData.append('last_name', data.last_name.trim());

        // Handle password - only send new password if it exists
        if (data.new_password && data.new_password.trim()) {
            formData.append('password', data.new_password.trim());
        }

        try {
            console.log('Sending update request to: /api/profile/update/');
            console.log('FormData contents:');
            // for (let [key, value] of formData.entries()) {
            //     console.log(key, value);
            // }

            const response = await api.patch('/api/profile/update/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // console.log('Update successful:', response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error updating profile:', error);
            console.error('Error response:', error.response?.data);
            console.error('Error status:', error.response?.status);
            throw error;
        }
    };

    // const updatePassword = async (data: PasswordChangeData) => {
    //     const response = await api.post('/api/password/change', data);
    //     return response.data;
    // };

    const handleSubmit = async (values: typeof form.values) => {
        setError(null);
        setSuccess(null);
        setIsSubmitting(true);

        // Validate that if new password is provided, current password is also provided
        if (values.newPassword && !values.currentPassword) {
            setError('Current password is required to set a new password');
            setIsSubmitting(false);
            return;
        }

        // Validate password confirmation
        if (values.newPassword && values.newPassword !== values.confirmPassword) {
            setError('New password and confirmation do not match');
            setIsSubmitting(false);
            return;
        }

        try {
            console.log('Form values:', values);

            const result = await updateUserProfile({
                first_name: values.firstName || undefined,
                last_name: values.lastName || undefined,
                email: values.email || undefined,
                facebook_account: values.fbAccount || undefined,
                instagram_account: values.igAccount || undefined,
                profile_pic: values.profilePic || undefined,
                old_password: values.currentPassword || undefined,
                new_password: values.newPassword || undefined,
            });

            setSuccess('Profile updated successfully');
            form.reset(); // Reset form after successful update
            
            // Refresh user data to show updated information
            await refreshUser();
            
            onSuccess?.();
            
            // Don't close immediately, let user see success message
            setTimeout(() => {
                onClose();
            }, 1500);

        } catch (error: any) {
            console.error('Submit error:', error);
            
            // Handle specific error cases
            if (error.response?.status === 404) {
                setError('Profile update endpoint not found.');
            } else if (error.response?.status === 403) {
                setError('You do not have permission to update this profile.');
            } else if (error.response?.status === 401) {
                setError('Authentication required. Please log in again.');
            } else {
                setError(error.response?.data?.detail || error.response?.data?.message || 'Failed to update profile');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal 
            opened={opened} 
            onClose={onClose} 
            title="Edit Profile"
            size="lg"
        >
            <Card className={classes.editForm}>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        {/* Notifications */}
                        {error && (
                            <Notification icon="✕" color="red" onClose={() => setError(null)}>
                                {error}
                            </Notification>
                        )}
                        {success && (
                            <Notification icon="✓" color="green" onClose={() => setSuccess(null)}>
                                {success}
                            </Notification>
                        )}

                        {/* Profile Picture Upload Section */}
                        <div className={classes.section}>
                            <Text className={classes.sectionTitle}>Profile Picture</Text>
                            <FileInput
                                accept="image/*"
                                placeholder="Upload new profile picture"
                                {...form.getInputProps('profilePic')}
                            />
                        </div>

                        {/* Basic Information Section */}
                        <div className={classes.section}>
                            <Text className={classes.sectionTitle}>Basic Information</Text>
                            <Group className={classes.inputGroup}>
                                <TextInput
                                    label="First Name"
                                    placeholder="Your first name"
                                    {...form.getInputProps('firstName')}
                                />
                                <TextInput
                                    label="Last Name"
                                    placeholder="Your last name"
                                    {...form.getInputProps('lastName')}
                                />
                            </Group>
                            <TextInput
                                label="Email"
                                placeholder="Your email"
                                {...form.getInputProps('email')}
                            />
                        </div>

                        {/* Social Media Links Section */}
                        <div className={classes.section}>
                            <Text className={classes.sectionTitle}>Social Media</Text>
                            <TextInput
                                label="Facebook Profile URL"
                                placeholder="https://facebook.com/your.profile"
                                {...form.getInputProps('fbAccount')}
                            />
                            <TextInput
                                label="Instagram Profile URL"
                                placeholder="https://instagram.com/your.profile"
                                {...form.getInputProps('igAccount')}
                            />
                        </div>

                        {/* Password Change Section */}
                        <div className={classes.section}>
                            <Text className={classes.sectionTitle}>Change Password (Optional)</Text>
                            <PasswordInput
                                label="Current Password"
                                placeholder="Enter your current password"
                                {...form.getInputProps('currentPassword')}
                            />
                            <PasswordInput
                                label="New Password"
                                placeholder="Enter new password"
                                {...form.getInputProps('newPassword')}
                            />
                            <PasswordInput
                                label="Confirm New Password"
                                placeholder="Confirm new password"
                                {...form.getInputProps('confirmPassword')}
                            />
                        </div>

                        <Group justify="flex-end" mt="xl">
                            <Button variant="subtle" onClick={onClose}>Cancel</Button>
                            <Button type="submit" loading={isSubmitting}>Save Changes</Button>
                        </Group>
                    </Stack>
                </form>
            </Card>
        </Modal>
    );
};

export default EditProfile;