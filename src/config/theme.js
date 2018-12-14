import { createMuiTheme } from '@material-ui/core/styles';

// const defaultTheme = createMuiTheme({
//   typography: {
//     useNextVariants: true,
//   },
// });

export const createBaseline = theme =>
  createMuiTheme({
    // palette: {
    //   primary: {
    //     dark: '#861b16',
    //     light: '#fe3e35',
    //     main: '#c9302c',
    //   },
    //   secondary: {
    //     main: '#f0ad4e',
    //   },
    //   text: {
    //     primary: 'rgba(250,250,250,0.9)',
    //     secondary: 'rgba(250,250,250,0.7)',
    //   },
    //   background: {
    //     paper: '#861b16',
    //   },
    // },
    typography: {
      useNextVariants: true,
    },
    ...theme,
  });

export const addOverrides = theme => ({
  ...theme,
  // overrides: {
  //   MuiInput: {
  //     root: {
  //       color: theme.palette.text.secondary,
  //     },
  //     underline: {
  //       color: theme.palette.common.white,
  //       '&::before': {
  //         borderBottomColor: theme.palette.common.white,
  //       },
  //       '&::after': {
  //         borderBottomColor: theme.palette.common.white,
  //       },
  //     },
  //   },
  //   MuiFormLabel: {
  //     root: {
  //       color: theme.palette.text.secondary,
  //       '&$focused': {
  //         color: theme.palette.common.white,
  //       },
  //     },
  //   },
  //   MuiMenu: {
  //     paper: {
  //       backgroundColor: theme.palette.common.white,
  //     },
  //   },
  //   MuiMenuItem: {
  //     root: {
  //       backgroundColor: theme.palette.common.white,
  //       color: 'rgba(0, 0, 0, 0.87)',
  //       '&:hover': {
  //         backgroundColor: '#EBEBEB',
  //       },
  //     },
  //   },
  //   MuiMobileStepper: {
  //     dotActive: {
  //       backgroundColor: theme.palette.common.white,
  //     },
  //   },
  //   MuiTypography: {
  //     h5: {
  //       color: theme.palette.text.primary,
  //     },
  //     subtitle1: {
  //       color: theme.palette.text.secondary,
  //     },
  //   },
  // },
});
