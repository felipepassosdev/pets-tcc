import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box mt={2}>
            <Typography variant="h5">Bem-vindo de volta</Typography>
          </Box>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert(`Login DEBUG: email: "${email}", senha: "${password}"`);
            }}
          >
            <TextField
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              id="Email"
              label="Digite seu email"
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />

            <TextField
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              id="Password"
              label="Digite sua senha"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Fazer Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={2}>
            <Typography variant="h5">Primeira vez aqui?</Typography>
            <Typography variant="subtitle1">
              Precisamos de algumas informações suas para começarmos
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push("/register");
              }}
            >
              Criar Conta
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
