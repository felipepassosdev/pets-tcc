import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Checkbox,
  Container,
  InputLabel,
  TextField,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  formFlex: {
    display: "flex",
    flexDirection: "column",
  },
  LembrarDeMim: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  FormSpacing: {
    marginBottom: "1rem",
  },
});

const Login: React.FC = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <h1>Bem-vindo de volta</h1>
          <form className={classes.formFlex}>
            <TextField
              required
              id="login_email"
              label="E-mail"
              variant="outlined"
              className={classes.FormSpacing}
            />
            <TextField
              required
              id="login_password"
              label="Password"
              type="password"
              variant="outlined"
              className={classes.formFlex}
            />
            <Box className={classes.LembrarDeMim}>
              <Checkbox
                value="login_rememberme"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <InputLabel htmlFor="login_rememberme">Lembrar Senha</InputLabel>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                alert("clicado");
              }}
            >
              Entrar
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box m="2rem">
            <h2>Novo por aqui?</h2>
            <p>Precisamos de algumas informações suas para começarmos</p>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/register')
              }}
            >
              Criar Conta
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
