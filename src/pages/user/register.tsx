import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Checkbox,
  Container,
  TextField,
  Box,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termos, setTermos] = useState(false);
  let history = useHistory();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box mt={2}>
            <Typography variant="h5">Já esteve aqui?</Typography>
            <Typography variant="subtitle1">Sentimos sua falta!</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push("/login");
              }}
            >
              Fazer Login
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={2}>
            <Typography variant="h5">Criando uma conta nova</Typography>
          </Box>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                `Cadastro DEBUG: email: "${email}", senha: "${password}", Nome: "${nome}",Temos Aceite "${termos}"`
              );
            }}
          >
            <TextField
              required
              id="Name"
              label="Qual o seu Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              value={nome}
              onChange={(event) => {
                setNome(event.target.value);
              }}
            />
            <TextField
              required
              id="Email"
              label="Digite sua email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              required
              id="Password"
              label="Digite sua senha"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={termos}
                  onChange={(event) => {
                    setTermos(event.target.checked);
                  }}
                />
              }
              label="Aceito os termos de uso"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Finalizar Cadastro
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
