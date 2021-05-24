import { makeStyles, Theme } from '@material-ui/core/styles';
export const ErrorStyle = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      "border-radius": "6px",
      "padding": "12px",
      "background-color":"#FFCCBA",
      "color":"#D63301",
      "text-align":"center"
    },
}));