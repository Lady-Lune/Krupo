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

interface EditProfileProps {
    opened: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    user_id: string; // Added user_id prop
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
}

interface PasswordChangeData {
    old_password: string;
    new_password: string;
}

const EditProfile = ({ opened, onClose, onSuccess, user_id, initialData }: EditProfileProps) => {
    // State for managing form submission feedback
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const updateUserProfile = async (userId: string, data: UserProfileData) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined) {
                if (key === 'profile_pic' && value instanceof File) {
                    formData.append(key, value);
                } else {
                    formData.append(key, String(value));
                }
            }
        });

        const response = await api.put(`/api/user/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        return response.data;
    };

    const updatePassword = async (data: PasswordChangeData) => {
        const response = await api.post('/api/password/change', data);
        return response.data;
    };
    const handleSubmit = async (values: typeof form.values) => {
        setError(null);
        setSuccess(null);
        setIsSubmitting(true);

        try {
            //to /api/user/{user_id}
            await updateUserProfile(user_id, {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                facebook_account: values.fbAccount,
                instagram_account: values.igAccount,
                profile_pic: values.profilePic || undefined,
            });

            //to /api/password/change
            if (values.currentPassword && values.newPassword) {
                await updatePassword({
                    old_password: values.currentPassword,
                    new_password: values.newPassword,
                });
            }

            setSuccess('Profile updated');
            onSuccess?.(); //TODO:remove?

        } catch (error) {
            console.log(error);
            setError('Failed to update profile');
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

                        {/* Form Actions */}
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