import { Modal, Text, Button, Space, Stack } from '@mantine/core';

interface AlertProps{
    modal:{
        alertopened:boolean;
        closealert:() => void;
    },
    alertinfo:{
        title?:string;
        description:string;
    },
    button:{
        show:boolean;
        onClick?:() => void;
    }
}

const Alert = ({modal:{alertopened, closealert}, alertinfo:{title, description,}, button:{show, onClick} }:AlertProps) => {
    

    return(
        <Modal opened={alertopened} onClose={closealert} radius={'md'} withCloseButton={false}>
            <Text ff={"Averia Gruesa Libre"} fz={20}>{title}</Text>
            <Text>{description}</Text>
            <Space h={10} />
            <Space h={40} ta={'center'}>
            { show && <Button color="red" onClick={onClick}>Confirm Delete</Button>}
            </Space>
        </Modal>
    )
}
export default Alert;