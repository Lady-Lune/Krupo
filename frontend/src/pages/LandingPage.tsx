import CreateButton from "@/components/CreateButton";
import Header from "@/components/Header";

// export function fixImageURL(baseUrl:String, testUrl:String, folder:String) {
//     const escapedBase = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     const extensions = 'jpe?g|png|gif|bmp|svg|webp|tiff?';
//     const pattern = `^${escapedBase}(?:.*[/])?([^/?#]+\\.(?:${extensions}))`;
//     const regex = new RegExp(pattern, 'i');
//     const match = testUrl.match(regex);
//     if (match) {
//         console.log(match[1]); // Outputs: "cat.jpg"
//         const new_url = baseUrl + "/media/" + folder + "/" + match[1]
//         console.log(new_url)
//         return new_url
//     }
// }

export default function LandingPage(){
    return <>
    <Header />
    </>
}