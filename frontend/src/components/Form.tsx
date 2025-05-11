import {colors} from '@/theme'
import {
    Anchor,
    Button,
    // Checkbox,
    Container,
    // Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
  
  export function Form() {
    return (
      <Container size={420} my={40} >
        <Title ta="center"> 
          Welcome back!
        </Title>
  
        <Text ta="center" mt={5}>
          Do not have an account yet? <Anchor>Create account</Anchor>
        </Text>
  
        <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required radius="md" />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" />
          {/* <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group> */}
          <Button fullWidth mt="xl" radius="md" bg={colors["Moss Green"]}  ff="Averia Gruesa Libre"  lts={1} p={3} fw={1}>
            SIGN IN
          </Button>
        </Paper>
      </Container>
    );
  }