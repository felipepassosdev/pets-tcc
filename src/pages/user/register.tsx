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

const Register: React.FC = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
          <Box m="2rem">
            <h2>Já esteve aqui?</h2>
            <p>Sentimos sua falta</p>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/login')
              }}
            >
              Fazer Login
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h1>Criando uma nova conta</h1>
          <form className={classes.formFlex}>
          <TextField
              required
              id="Register_Name"
              label="Seu Nome"
              variant="outlined"
              className={classes.FormSpacing}
            />
            <TextField
              required
              id="Register_email"
              label="E-mail"
              variant="outlined"
              className={classes.FormSpacing}
            />
            <TextField
              required
              id="Register_password"
              label="Password"
              type="password"
              variant="outlined"
              className={classes.formFlex}
            />
            <Box className={classes.LembrarDeMim}>
              <Checkbox
                value="Register_Terms"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <InputLabel htmlFor="Register_Terms">Li e aceito os termos e condições</InputLabel>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                alert("clicado");
              }}
            >
              Criar conta
            </Button>
          </form>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Register;
