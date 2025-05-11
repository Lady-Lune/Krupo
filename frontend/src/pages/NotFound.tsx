import { colors } from "@/theme";
import { Grid, Title } from "@mantine/core";

const cols = Object.keys(colors).map((key:string) => {
    return <Grid.Col 
                span={3} 
                key={key}
                style={{
                        backgroundColor: colors[key],
                        fontSize:10
                    }}
            >
                {key}
            </Grid.Col>
})

export default function NotFound() {
    return (
        <>
        <Title order={1}>Theme Colors</Title>
        <Grid 
            columns={12}
            styles={{
                root: {backgroundColor: "black", padding: '20px'},
                col: {border: '1px solid white', backgroundColor: colors["Teal"], color:"white", textAlign:"center"}
              }}
        >
            {cols}

        </Grid>
        </>
    );
}