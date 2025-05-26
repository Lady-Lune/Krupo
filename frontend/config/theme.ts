import { createTheme, MantineColorsTuple, MantineTheme } from '@mantine/core';

const navy: MantineColorsTuple = [
  '#E9EEFF',
  '#C5CFEF',
  '#9EAFDF',
  '#768FD0',
  '#5775C4',
  '#4466BD',
  '#3359B5',
  '#254AA0',
  '#1A4091',
  '#083582',
];
// add primary, secondary colors or like navy, gold, amber, etc.
//Here i used navy color as primary 

// Success Color
const emarald: MantineColorsTuple = [
  '#E6F7F0',
  '#C3EFE1',
  '#9FE7D2',
  '#7BDFC3',
  '#57D7B4',
  '#33CFA5',
  '#2FB894',
  '#2BA183',
  '#278A72',
  '#237361',
];

export const theme = createTheme({
  colors: {
    navy,
    emarald,
  },
  primaryColor: 'navy',
  fontFamily: 'Poppins, sans-serif',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.5rem',
  },
  defaultRadius: 'md',
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, 0.2)',
    lg: '1px 1px 3px rgba(0, 0, 0, 0.3)',
  },
  components: {
    // Here you can add more components and themeing for them.
    //Themeing for mantine Button
    Button: {
      defaultProps: {
        variant: 'light',
        color: 'navy',
        size: 'md',
        radius: 'md',
        uppercase: true,
        // compact: true,
        // loading: false,
        // disabled: false,
        // leftSection: null,
        // rightSection: null,
        // leftSectionWidth: undefined,
        // rightSectionWidth: undefined,
      },
      styles: {
        root: {
          fontWeight: 500,
          border: '1px solid transparent',
          transition: 'all 150ms ease',
        },
      },
    },

    //Thmeing for Mantine Input Box
    Input: {
      defaultProps: {
        variant: 'light',
        color: 'navy',
        size: 'md',
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
          border: '1px solid transparent',
          transition: 'all 150ms ease',
        },
      },
    },

    //Themeing for mantine Card
    Card: {
      defaultProps: {
        variant: 'light',
        color: 'navy',
        radius: 'md',
        padding: 'lg',
        withBorder: true,
      },
      styles: {
        root: {
          fontWeight: 500,
          border: '1px solid var(--mantine-color-navy-3)',
          transition: 'all 150ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'var(--mantine-shadow-md)',
          },
        },
      },
    },

    Text: {
      defaultProps: {
        size: 'md',
        color: 'navy',
      },
      styles: {
        root: {
          fontWeight: 700,
          fontSize: '20px',
        },
      },
    },
  },
});

export default theme