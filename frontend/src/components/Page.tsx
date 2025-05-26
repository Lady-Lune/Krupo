import { Text } from "@mantine/core";
import CreateButton, { CreateButtonProps } from "./CreateButton";


const Page = ({formtype}:CreateButtonProps) => {
    return(
        <>
        <Text>page: {formtype}</Text>
        {/* <CreateButton formtype={formtype}/> */}
        </>
    )
}

export default Page;