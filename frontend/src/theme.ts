import { createTheme } from '@mantine/core';
import { ThemeColors } from '../types/model_types';

// Font family constants
export const fontFamilies = {
  body: "Average, serif",
  bigTitles: "Berkshire Swash, cursive", // For h1, h2
  lowLevelHeadings: "Averia Gruesa Libre, cursive", // For h3, h4, h5, h6
} as const;

// CSS classes for different heading levels
export const headingClasses = {
  h1: { fontFamily: fontFamilies.bigTitles },
  h2: { fontFamily: fontFamilies.bigTitles },
  h3: { fontFamily: fontFamilies.lowLevelHeadings },
  h4: { fontFamily: fontFamilies.lowLevelHeadings },
  h5: { fontFamily: fontFamilies.lowLevelHeadings },
  h6: { fontFamily: fontFamilies.lowLevelHeadings },
} as const;

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
  fontFamily: fontFamilies.body,
  headings: {
    fontFamily: fontFamilies.bigTitles,
    sizes: {
      h1: { 
        fontSize: "2.5rem",
        fontWeight: "400"
      },
      h2: { 
        fontSize: "2rem",
        fontWeight: "400"
      },
      h3: { 
        fontSize: "1.75rem",
        fontWeight: "400"
      },
      h4: { 
        fontSize: "1.5rem",
        fontWeight: "400"
      },
      h5: { 
        fontSize: "1.25rem",
        fontWeight: "400"
      },
      h6: { 
        fontSize: "1rem",
        fontWeight: "400"
      }
    }
  },
  colors: {
    'pale-yellow': [
      'hsl(25, 58%, 95%)',    // 0 - lightest
      'hsl(25, 58%, 89%)',    // 1
      'hsl(25, 58%, 84%)',    // 2
      'hsl(25, 58%, 79%)',    // 3 - base color (79%)
      'hsl(25, 58%, 70%)',    // 4
      'hsl(25, 57%, 60%)',    // 5
      'hsl(25, 57%, 50%)',    // 6 - (50%)
      'hsl(25, 57%, 35%)',    // 7
      'hsl(25, 57%, 20%)',    // 8 - (20%)
      'hsl(25, 57%, 11%)'     // 9 - darkest (11%)
    ],
    'kakhi': [
      'hsl(40, 90%, 95%)',    // 0 - lightest
      'hsl(40, 90%, 89%)',    // 1
      'hsl(40, 90%, 84%)',    // 2
      'hsl(40, 90%, 75%)',    // 3 - base color (75%)
      'hsl(40, 90%, 65%)',    // 4
      'hsl(40, 90%, 58%)',    // 5
      'hsl(40, 90%, 50%)',    // 6 - (50%)
      'hsl(40, 90%, 35%)',    // 7
      'hsl(40, 90%, 20%)',    // 8 - (20%)
      'hsl(40, 88%, 10%)'     // 9 - darkest (10%)
    ],
    'light-skintone': [
      'hsl(39, 62%, 90%)',    // 0 - lightest
      'hsl(39, 62%, 85%)',    // 1
      'hsl(39, 62%, 80%)',    // 2
      'hsl(39, 62%, 75%)',    // 3 - (75%)
      'hsl(39, 62%, 68%)',    // 4
      'hsl(39, 62%, 60%)',    // 5 - base color (60%)
      'hsl(39, 62%, 45%)',    // 6
      'hsl(39, 61%, 32%)',    // 7
      'hsl(39, 61%, 20%)',    // 8 - (20%)
      'hsl(39, 61%, 10%)'     // 9 - darkest (10%)
    ],
    'dark-skintone': [
      'hsl(21, 33%, 90%)',    // 0 - lightest
      'hsl(21, 33%, 82%)',    // 1
      'hsl(21, 33%, 75%)',    // 2
      'hsl(21, 33%, 70%)',    // 3
      'hsl(21, 33%, 64%)',    // 4 - base color (64%)
      'hsl(21, 33%, 57%)',    // 5
      'hsl(21, 33%, 50%)',    // 6 - (50%)
      'hsl(21, 33%, 35%)',    // 7
      'hsl(21, 33%, 20%)',    // 8 - (20%)
      'hsl(21, 33%, 10%)'     // 9 - darkest (10%)
    ],
    'orange': [
      'hsl(16, 80%, 95%)',    // 0 - lightest
      'hsl(16, 80%, 89%)',    // 1
      'hsl(16, 80%, 82%)',    // 2
      'hsl(16, 80%, 75%)',    // 3 - (75%)
      'hsl(15, 80%, 70%)',    // 4
      'hsl(15, 80%, 65%)',    // 5 - base color (65%)
      'hsl(15, 80%, 55%)',    // 6
      'hsl(16, 80%, 40%)',    // 7 - (40%)
      'hsl(16, 80%, 25%)',    // 8
      'hsl(16, 80%, 10%)'     // 9 - darkest (10%)
    ],
    'red': [
      'hsl(360, 61%, 95%)',   // 0 - lightest
      'hsl(360, 61%, 89%)',   // 1
      'hsl(360, 61%, 82%)',   // 2
      'hsl(360, 61%, 75%)',   // 3 - (75%)
      'hsl(360, 60%, 65%)',   // 4
      'hsl(360, 60%, 55%)',   // 5 - base color (55%)
      'hsl(360, 60%, 45%)',   // 6
      'hsl(360, 60%, 32%)',   // 7
      'hsl(360, 60%, 20%)',   // 8 - (20%)
      'hsl(360, 60%, 10%)'    // 9 - darkest (10%)
    ],
    'light-green': [
      'hsl(45, 22%, 95%)',    // 0 - lightest
      'hsl(45, 22%, 89%)',    // 1
      'hsl(45, 22%, 82%)',    // 2
      'hsl(45, 22%, 75%)',    // 3 - (75%)
      'hsl(45, 22%, 70%)',    // 4
      'hsl(45, 22%, 65%)',    // 5 - base color (65%)
      'hsl(45, 22%, 55%)',    // 6
      'hsl(45, 22%, 45%)',    // 7 - (45%)
      'hsl(45, 22%, 25%)',    // 8
      'hsl(45, 22%, 10%)'     // 9 - darkest (10%)
    ],
    'moss-green': [
      'hsl(105, 7%, 95%)',    // 0 - lightest
      'hsl(105, 7%, 89%)',    // 1
      'hsl(105, 7%, 82%)',    // 2
      'hsl(105, 7%, 75%)',    // 3 - (75%)
      'hsl(105, 7%, 60%)',    // 4
      'hsl(105, 7%, 52%)',    // 5
      'hsl(105, 7%, 45%)',    // 6 - base color (45%)
      'hsl(105, 7%, 32%)',    // 7
      'hsl(105, 7%, 20%)',    // 8 - (20%)
      'hsl(105, 7%, 10%)'     // 9 - darkest (10%)
    ],
    'teal': [
      'hsl(185, 21%, 95%)',   // 0 - lightest
      'hsl(185, 21%, 89%)',   // 1
      'hsl(185, 21%, 82%)',   // 2
      'hsl(185, 21%, 75%)',   // 3 - (75%)
      'hsl(185, 21%, 60%)',   // 4
      'hsl(185, 21%, 52%)',   // 5
      'hsl(185, 21%, 45%)',   // 6 - base color (45%)
      'hsl(185, 21%, 32%)',   // 7
      'hsl(185, 21%, 20%)',   // 8 - (20%)
      'hsl(185, 21%, 10%)'    // 9 - darkest (10%)
    ],
    'dark-blue': [
      'hsl(210, 32%, 95%)',   // 0 - lightest
      'hsl(210, 32%, 89%)',   // 1
      'hsl(210, 32%, 82%)',   // 2
      'hsl(210, 32%, 75%)',   // 3 - (75%)
      'hsl(210, 32%, 60%)',   // 4
      'hsl(210, 32%, 45%)',   // 5 - (45%)
      'hsl(210, 32%, 32%)',   // 6
      'hsl(210, 32%, 25%)',   // 7
      'hsl(210, 32%, 20%)',   // 8 - (20%)
      'hsl(210, 32%, 9%)'     // 9 - darkest (9%)
    ]
  },
  primaryColor: 'moss-green',
  primaryShade: { light: 5, dark: 6 },
  other: {
    success: 'teal',
    error: 'orange',
    successColors: {
      light: 'hsl(45, 22%, 75%)',
      main: 'hsl(45, 22%, 65%)',
      dark: 'hsl(45, 22%, 45%)',
    },
    errorColors: {
      light: 'hsl(16, 80%, 75%)',
      main: 'hsl(15, 80%, 65%)',
      dark: 'hsl(16, 80%, 40%)',
    }
  },
  components: {
    Title: {
      styles: () => ({
        root: {
          '&[dataOrder="1"]': {
            fontFamily: fontFamilies.bigTitles,
          },
          '&[dataOrder="2"]': {
            fontFamily: fontFamilies.bigTitles,
          },
          '&[dataOrder="3"]': {
            fontFamily: fontFamilies.lowLevelHeadings,
          },
          '&[dataOrder="4"]': {
            fontFamily: fontFamilies.lowLevelHeadings,
          },
          '&[dataOrder="5"]': {
            fontFamily: fontFamilies.lowLevelHeadings,
          },
          '&[dataOrder="6"]': {
            fontFamily: fontFamilies.lowLevelHeadings,
          },
        },
      }),
    },    Button: {
      styles: () => ({
        root: {
          fontFamily: fontFamilies.lowLevelHeadings,
          fontWeight: '500',
          transition: 'all 0.2s ease',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          
          // Primary button styling (moss-green)
          '&[dataVariant="filled"]': {
            backgroundColor: 'var(--mantine-color-moss-green-6)',
            color: 'white',
            border: 'none',
            
            '&:hover': {
              backgroundColor: 'var(--mantine-color-moss-green-7)',
              transform: 'translateY(-1px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          },
          
          // Outline button styling
          '&[dataVariant="outline"]': {
            backgroundColor: 'transparent',
            color: 'var(--mantine-color-moss-green-6)',
            border: '2px solid var(--mantine-color-moss-green-6)',
            '&:hover': {
              backgroundColor: 'var(--mantine-color-moss-green-0)',
              borderColor: 'var(--mantine-color-moss-green-7)',
              color: 'var(--mantine-color-moss-green-7)',
            },
          },
          
          // Light/subtle button styling
          '&[dataVariant="light"]': {
            backgroundColor: 'var(--mantine-color-moss-green-0)',
            color: 'var(--mantine-color-moss-green-7)',
            border: 'none',
            '&:hover': {
              backgroundColor: 'var(--mantine-color-moss-green-1)',
            },
          },
          
          // Subtle/ghost button styling
          '&[dataVariant="subtle"]': {
            backgroundColor: 'transparent',
            color: 'var(--mantine-color-moss-green-6)',
            border: 'none',
            '&:hover': {
              backgroundColor: 'var(--mantine-color-moss-green-0)',
            },
          },
          
          // Danger/error button styling
          '&[dataVariant="filled"][dataColor="red"]': {
            backgroundColor: 'var(--mantine-color-orange-5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'var(--mantine-color-orange-6)',
            },
          },
          
          // Success button styling
          '&[dataVariant="filled"][dataColor="light-green"]': {
            backgroundColor: 'var(--mantine-color-light-green-5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'var(--mantine-color-light-green-6)',
            },
          },
        },
        
        // Inner text styling
        inner: {
          fontFamily: fontFamilies.lowLevelHeadings,
          
        },
        
        // Loading overlay styling
        loader: {
          color: 'inherit',
        },
      }),
    },
  },
});
