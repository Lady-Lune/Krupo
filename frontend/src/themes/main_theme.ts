import { createTheme, alpha, } from '@mui/material/styles'; //PaletteMode, Shadows  also imported in the original

// Colors imported from AppTHeme in shared-theme
export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)',
};

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)',
};

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)',
};

//

const theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: "Berkshire Swash, Roboto",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontFamily: "Berkshire Swash, Roboto",
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },

    h2: {
      fontFamily: "Berkshire Swash, Roboto",
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },

    h3: {
      fontFamily: "Berkshire Swash, Roboto",
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },

    h4: {
      fontFamily: "Berkshire Swash, Roboto",
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },

    h5: {
      fontFamily: "Berkshire Swash, Roboto",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "Berkshire Swash, Roboto",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: "Averia Sans Libre, Roboto",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "Averia Sans Libre, Roboto",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "Average, Roboto",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Average, Roboto",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: "Average Sans, Roboto",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Average Sans, Roboto",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: "Bad Script, Roboto",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Averia Sans Libre, Roboto",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.75,
          letterSpacing: "0.00938em",
        },
      },
    },
  },

// color scheme

  colorSchemes : {
    light: {
      palette: {
        primary: {
          light: brand[200],
          main: brand[400],
          dark: brand[700],
          contrastText: brand[50],
        },
        info: {
          light: brand[100],
          main: brand[300],
          dark: brand[600],
          contrastText: gray[50],
        },
        warning: {
          light: orange[300],
          main: orange[400],
          dark: orange[800],
        },
        error: {
          light: red[300],
          main: red[400],
          dark: red[800],
        },
        success: {
          light: green[300],
          main: green[400],
          dark: green[800],
        },
        grey: {
          ...gray,
        },
        divider: alpha(gray[300], 0.4),
        background: {
          default: 'hsl(0, 0%, 99%)',
          paper: 'hsl(220, 35%, 97%)',
        },
        text: {
          primary: gray[800],
          secondary: gray[600],
          warning: orange[400],
        },
        action: {
          hover: alpha(gray[200], 0.2),
          selected: `${alpha(gray[200], 0.3)}`,
        },
        baseShadow:
          'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
      },
    },
    dark: {
      palette: {
        primary: {
          contrastText: brand[50],
          light: brand[300],
          main: brand[400],
          dark: brand[700],
        },
        info: {
          contrastText: brand[300],
          light: brand[500],
          main: brand[700],
          dark: brand[900],
        },
        warning: {
          light: orange[400],
          main: orange[500],
          dark: orange[700],
        },
        error: {
          light: red[400],
          main: red[500],
          dark: red[700],
        },
        success: {
          light: green[400],
          main: green[500],
          dark: green[700],
        },
        grey: {
          ...gray,
        },
        divider: alpha(gray[700], 0.6),
        background: {
          default: gray[900],
          paper: 'hsl(220, 30%, 7%)',
        },
        text: {
          primary: 'hsl(0, 0%, 100%)',
          secondary: gray[400],
        },
        action: {
          hover: alpha(gray[600], 0.2),
          selected: alpha(gray[600], 0.3),
        },
        baseShadow:
          'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
      },
    },
  },

});

export default theme;


