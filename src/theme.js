import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00796B',
    },
    secondary: {
      main: '#8BC34A',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#dedede',
    },
  },
});

export default theme;
