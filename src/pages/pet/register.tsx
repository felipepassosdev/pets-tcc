import { Button, TextField, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';
import { getUserToken } from '../../services/token';

// import { Container } from './styles';

function Register() {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [raca, setRaca] = useState("");
  const [cor, setCor] = useState("");
  const [image, setImage] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [status2, setStatus2] = useState("");
  const [token, setToken] = useState("");
  let history = useHistory();
  const HandleRegister = () => {
    api.post('/pets',{
      name : nome,
      species : especie,
      sex : sexo,
      breed: raca,
      color : cor,
      image: image,
      details: detalhes,
      city: cidade,
      state: estado,
      status: status2,
      active: true,
      token : token,

    }).then((res)=>{
      //console.log(res.data); // Token
      alert(`Pet ${nome} criado com sucesso`);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  useEffect(() => {
    let tokenResponse = getUserToken();
    setToken(tokenResponse);
  }, [])
  return (
    <Container>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          HandleRegister();
      }}>
          <TextField value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }} id="Nomedopet" label="Nome do pet" type="text"
            variant="outlined" margin="normal" />
          <TextField value={especie}
          onChange={(event) => {
            setEspecie(event.target.value);
          }} id="especie" label="especie (cat/dog)" type="text" 
            variant="outlined" margin="normal" fullWidth/>
          <TextField value={sexo}
          onChange={(event) => {
            setSexo(event.target.value);
          }} id="sexo" label="sexo (female/male)" type="text" 
            variant="outlined" margin="normal" />
          <TextField value={raca}
          onChange={(event) => {
            setRaca(event.target.value);
          }} id="raca" label="raca" type="text"
            variant="outlined" margin="normal"/>
          <TextField value={cor}
          onChange={(event) => {
            setCor(event.target.value);
          }} id="cor" label="cor" type="text" 
            variant="outlined" margin="normal"/>
          <TextField value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }} id="image" label="image" type="text" 
            variant="outlined" margin="normal"/>
          <TextField value={detalhes}
          onChange={(event) => {
            setDetalhes(event.target.value);
          }} id="detalhes" label="detalhes" type="text" 
            variant="outlined" margin="normal" fullWidth/>
          <TextField value={estado}
          onChange={(event) => {
            setEstado(event.target.value);
          }} id="estado" label="estado" type="text" 
            variant="outlined" margin="normal"/>
          <TextField value={cidade}
          onChange={(event) => {
            setCidade(event.target.value);
          }} id="Cidade" label="Cidade" type="text" 
            variant="outlined" margin="normal" fullWidth/>
          <TextField value={status2}
          onChange={(event) => {
            setStatus2(event.target.value);
          }} id="status2" label="status2 (found/lost)" type="text" 
            variant="outlined" margin="normal"/>
          <TextField value={token}
          onChange={(event) => {
            setToken(event.target.value);
          }} id="Token" label="Token" type="text" 
            variant="outlined" margin="normal"/>
          <Button type="submit" variant="contained" color="primary"
          fullWidth>
              Finalizar Cadastro
          </Button>
      </form>
    </Container>
)
}

export default Register;
