import {alpha} from '@mui/material/styles';
const violetBase = '#7F00FF';



const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {       
              main: alpha(violetBase, 0.9),             
          },
        }
      : {
          // palette values for dark mode
        }),
  },
});
export default getDesignTokens;
