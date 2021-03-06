import { Button, TextField, Container, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';
import { getUserToken } from '../../services/token';
import {cachorro,gato} from '../../services/racas';
import Protectedpage from '../../services/protectedpage';
import Errorwarning from "../../components/Error/Errorwarning";

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
  const [error, setError] = useState("");
  const [racaSelect,setRacaSelect]=useState([]) as any;
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
      setError("ops! ocorreu um erro" + err);
    });
  }

  useEffect(() => {
    let tokenResponse = getUserToken();
    let userValid = Protectedpage();
    if(userValid == false){history.push("/login");}
    setToken(tokenResponse);
  }, [])

  useEffect(() => {
    if (especie == "dog") {
      setRacaSelect(cachorro);
    }else{
      setRacaSelect(gato);
    }
  }, [especie])


  return (
    <Container>
       {error != "" && <Errorwarning message={error}></Errorwarning>}
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
          <FormControl margin="dense" fullWidth variant="outlined">
            <InputLabel>Especie</InputLabel>
            <Select
            label="Especie"
            value={especie}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setEspecie(event.target.value as string);
            }}
            >
              <MenuItem value={"dog"}>Cachorro</MenuItem>
              <MenuItem value={"cat"}>Gato</MenuItem>
            </Select>
          </FormControl>

          <FormControl margin="dense" fullWidth variant="outlined">
            <InputLabel>Sexo</InputLabel>
            <Select
            label="Sexo"
            value={sexo}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setSexo(event.target.value as string);
            }}
            >
              <MenuItem value={"female"}>Femea</MenuItem>
              <MenuItem value={"male"}>Macho</MenuItem>
            </Select>
          </FormControl>

          <FormControl margin="dense" fullWidth variant="outlined">
            <InputLabel>Ra??a</InputLabel>
              <Select
              label="Ra??a"
              value={raca}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setRaca(event.target.value as string);
              }}
              >
               
                {racaSelect &&
                   racaSelect.map((racadopet:any)=>{
                    return <MenuItem value={racadopet}> {racadopet} </MenuItem>
                   })
                }
              </Select>
          </FormControl>

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

          <FormControl margin="dense" fullWidth variant="outlined">
            <InputLabel>Estado</InputLabel>
            <Select
            label="Estado"
            value={estado}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setEstado(event.target.value as string);
            }}
            >
              <MenuItem value={"Acre"}> Acre </MenuItem>
              <MenuItem value={"Alagoas"}> Alagoas </MenuItem>
              <MenuItem value={"Amap??"}> Amap?? </MenuItem>
              <MenuItem value={"Amazonas"}> Amazonas </MenuItem>
              <MenuItem value={"Bahia"}> Bahia </MenuItem>
              <MenuItem value={"Cear??"}> Cear?? </MenuItem>
              <MenuItem value={"Distrito Federal"}> Distrito Federal </MenuItem>
              <MenuItem value={"Esp??rito Santo"}> Esp??rito Santo </MenuItem>
              <MenuItem value={"Goi??s"}> Goi??s </MenuItem>
              <MenuItem value={"Maranh??o"}> Maranh??o </MenuItem>
              <MenuItem value={"Mato Grosso"}> Mato Grosso </MenuItem>
              <MenuItem value={"Mato Grosso do Sul"}> Mato Grosso do Sul </MenuItem>
              <MenuItem value={"Minas Gerais"}> Minas Gerais </MenuItem>
              <MenuItem value={"Par??"}> Par?? </MenuItem>
              <MenuItem value={"Para??ba"}> Para??ba </MenuItem>
              <MenuItem value={"Paran??"}> Paran?? </MenuItem>
              <MenuItem value={"Pernambuco"}> Pernambuco </MenuItem>
              <MenuItem value={"Piau??"}> Piau?? </MenuItem>
              <MenuItem value={"Rio de Janeiro"}> Rio de Janeiro </MenuItem>
              <MenuItem value={"Rio Grande do Norte"}> Rio Grande do Norte </MenuItem>
              <MenuItem value={"Rio Grande do Sul"}> Rio Grande do Sul </MenuItem>
              <MenuItem value={"Rond??nia"}> Rond??nia </MenuItem>
              <MenuItem value={"Roraima"}> Roraima </MenuItem>
              <MenuItem value={"Santa Catarina"}> Santa Catarina </MenuItem>
              <MenuItem value={"S??o Paulo"}> S??o Paulo </MenuItem>
              <MenuItem value={"Sergipe"}> Sergipe </MenuItem>
              <MenuItem value={"Tocantins"}> Tocantins </MenuItem>
            </Select>
          </FormControl>



          <TextField value={cidade}
          onChange={(event) => {
            setCidade(event.target.value);
          }} id="Cidade" label="Cidade" type="text" 
            variant="outlined" margin="normal" fullWidth/>

          <FormControl margin="dense" fullWidth variant="outlined">
            <InputLabel>Status</InputLabel>
            <Select
            label="Status"
            value={status2}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setStatus2(event.target.value as string);
            }}
            >
            <MenuItem value={"found"}>Perdido</MenuItem>
            <MenuItem value={"lost"}>Encontrado</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary"
          fullWidth>
              Finalizar Cadastro
          </Button>
         
      </form>
    </Container>
)
}

export default Register;
