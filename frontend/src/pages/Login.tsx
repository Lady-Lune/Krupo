import { Form } from "@/components/Form";
import Header from "@/components/Header";
import { Container, Image, Avatar } from "@mantine/core";

export default function Login() {
    return(
        <>
        {/* HEADER without Avatar and MainTabs */}
        <Container 
                style={{ 
                    height:150,
                    alignContent:"space-around"
                    }}>
                    <Image 
                    src="src\assets\ComboLogo_-_Color_-_B-removebg-preview.svg"
                    fit="scale-down"
                    height={100}
                    />
        </Container>
        <Form />
        </>
    )
};
