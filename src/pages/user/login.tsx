import React, { useState } from "react";
import {setUserInfo, setUserToken} from '../../services/token'
import {
  Button,
  Container,
  TextField,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import api from "../../services/api";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleLogin= () => {

    api.post('/users/login',{
      email : email,
      password: password,
    }).then((res)=>{
      setUserToken(res.data.token);
      setUserInfo(res.data.user);
      history.push("/");
      window.location.reload(false);
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }
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
              HandleLogin();
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
