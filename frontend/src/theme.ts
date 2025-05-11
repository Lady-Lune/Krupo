import { createTheme } from '@mantine/core';
import { ThemeColors } from '../types/types';

export const colors:ThemeColors = {
  "Pale-Yellow"        :'hsl(25, 58%, 79%)',
  "Pale-Yellow-d1"     :'hsl(25, 57%, 50%)',
  "Pale-Yellow-d2"     :'hsl(25, 57%, 20%)',
  "Pale-Yellow-d3"     :'hsl(25, 57%, 11%)',

  "Kakhi"              :'hsl(40, 90%, 75%)',
  "Kakhi-d1"           :'hsl(40, 90%, 50%)',
  "Kakhi-d2"           :'hsl(40, 90%, 20%)',
  "Kakhi-d3"           :'hsl(40, 88%, 10%)',
  
  "Light Skintone-l1"  :'hsl(39, 62%, 75%)',
  "Light Skintone"     :'hsl(39, 62%, 60%)',
  "Light Skintone-d1"  :'hsl(39, 61%, 20%)',
  "Light Skintone-d2"  :'hsl(39, 61%, 10%)',

  "Dark Skintone"      :'hsl(21, 33%, 64%)',
  "Dark Skintone-d1"   :'hsl(21, 33%, 50%)',
  "Dark Skintone-d2"   :'hsl(21, 33%, 20%)',
  "Dark Skintone-d3"   :'hsl(21, 33%, 10%)',

  "Orange-l1"          :'hsl(16, 80%, 75%)',
  "Orange"             :'hsl(15, 80%, 65%)',
  "Orange-d1"          :'hsl(16, 80%, 40%)',
  "Orange-d2"          :'hsl(16, 80%, 10%)',

  "Red-l1"             :'hsl(360, 61%, 75%)',
  "Red"                :'hsl(360, 60%, 55%)',
  "Red-d1"             :'hsl(360, 60%, 20%)',
  "Red-d2"             :'hsl(360, 60%, 10%)',

  "Light Green-l1"     :'hsl(45, 22%, 75%)',
  "Light Green"        :'hsl(45, 22%, 65%)',
  "Light Green-d1"     :'hsl(45, 22%, 45%)',
  "Light Green-d2"     :'hsl(45, 22%, 10%)',

  "Moss Green-l1"      :'hsl(105, 7%, 75%)',
  "Moss Green"         :'hsl(105, 7%, 45%)',
  "Moss Green-d1"      :'hsl(105, 7%, 20%)',
  "Moss Green-d2"      :'hsl(105, 7%, 10%)',

  "Teal-l1"            :'hsl(185, 21%, 75%)',
  "Teal"               :'hsl(185, 21%, 45%)',
  "Teal-d1"            :'hsl(185, 21%, 20%)',
  "Teal-d2"            :'hsl(185, 21%, 10%)',

  "Dark Blue-l3"       :'hsl(210, 32%, 75%)',
  "Dark Blue-l2"       :'hsl(210, 32%, 45%)',
  "Dark Blue-l1"       :'hsl(210, 32%, 20%)',
  "Dark Blue"          :'hsl(210, 32%, 9%)',
}

export const theme = createTheme({
  fontFamily:"Average,Serif",
  headings: {
    fontFamily: "Berkshire Swash, Sans-Serif"
  //   fontWeight: string;
  //   textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
  //   sizes: {
  //     h1: HeadingStyle;
  //     h2: HeadingStyle;
  //     h3: HeadingStyle;
  //     h4: HeadingStyle;
  //     h5: HeadingStyle;
  //     h6: HeadingStyle;
  //   };
  }
});
