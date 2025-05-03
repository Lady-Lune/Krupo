import { Grid2, Typography} from "@mui/material"
import { colors, website_colors } from '../themes/main_theme';

function NotFound() {
    const colist: string[] = Object.keys(website_colors)

    const elem = colist.map((col:string) =>
        <Grid2 
            key={col} 
            bgcolor={website_colors[col]} //it works don't think about it
            color={col=="Dark Blue" ? "white":"black"}
            size={4}
            textAlign="center"
        >
            {col}
        </Grid2>
    )

    const pallist: string[] = Object.keys(colors)
    const pallet = pallist.map((palcol:string) =>
        <Grid2 
            key={palcol} 
            bgcolor={colors[palcol]} //it works don't think about it
            color={palcol=="Dark Blue" ? "white":"black"}
            size={3}
            textAlign="center"
        >
            {
                (palcol=="Pale-Yellow"?"Pale-Yellow":"") ||
                (palcol=="Kakhi"?"Khaki":"") ||
                (palcol=="Light Skintone"?"Light Skintone":"") ||
                (palcol=="Dark Skintone"?"Dark Skintone":"") ||
                (palcol=="Orange"?"Orange":"") ||
                (palcol=="Red"?"Red":"") ||
                (palcol=="Light Green"?"Light Green":"") ||
                (palcol=="Moss Green"?"Moss Green":"") ||
                (palcol=="Teal"?"Teal":"") ||
                (palcol=="Dark Blue"?"Dark Blue":"")
            }
        </Grid2>
    )

    const variants = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2"]
    const textsample = variants.map(
            (type:string) => (
                <Typography key={type} variant={type} alignContent="space-around"> Sample </Typography> //it works sot he red line don't matter
            )
        )

    return(
        <Grid2 
            container 
            columns={12}
            columnSpacing={4}
            rowSpacing={2}
            paddingY={4}
        >        
            {elem}

        <Grid2 size={12}></Grid2>  

            {pallet}

        <Grid2 size={12}></Grid2>
            
            {textsample}

        </Grid2>
    )
}




export default NotFound

// const testarray:string[] = ["a", "b", "c"] 
// const elem = testarray.map((res) => {
//         return(<li>{res}</li>)
// });
// return(
//     <ol>
//         {elem}
//     </ol>
// )

{/* <Grid2 container columnGap={3} columnSpacing={3} rowSpacing={3} justifyContent="center" textAlign="center" padding={2} columns={12}>
    <Grid2 bgcolor={website_colors["Pale Yellow"]} border={1} size={4}>Pale Yellow</Grid2>
    <Grid2 bgcolor={website_colors["Kakhi"]} border={1} size={4}>Kakhi</Grid2>
    <Grid2 bgcolor={website_colors["Light Skintone"]} border={1} size={4}>Light Skintone</Grid2>
    <Grid2 bgcolor={website_colors["Dark Skintone"]} border={1} size={4}>Dark Skintone</Grid2>
    <Grid2 bgcolor={website_colors["Orange"]} border={1} size={4}>Orange</Grid2>
    <Grid2 bgcolor={website_colors["Red"]} border={1} size={4}>Red</Grid2>
    <Grid2 bgcolor={website_colors["Light Green"]} border={1} size={3}>Light Green</Grid2>
    <Grid2 bgcolor={website_colors["Moss Green"]} border={1} size={3}>Moss Green</Grid2>
    <Grid2 bgcolor={website_colors["Teal"]} border={1} size={3}>Teal</Grid2>
    <Grid2 bgcolor={website_colors["Dark Blue"]} border={1} size={3} color="white">Dark Blue</Grid2>
</Grid2> */}