import { Button, TextField, Container, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';
import { getUserID, getUserToken } from '../../services/token';
import { useParams } from "react-router";
import {cachorro,gato} from '../../services/racas';
import Protectedpage from '../../services/protectedpage';
import Errorwarning from '../../components/Error/Errorwarning';
// import { Container } from './styles';

function Edit() {
  let { petId } = useParams<Record<string, string>>();
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [raca, setRaca] = useState("");
  const [cor, setCor] = useState("");
  const [image, setImage] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const [petuser, setPetuser] = useState("");
  const [error, setError] = useState("");
  const [finishedrequest, setFinishedrequest] = useState(false);
  let history = useHistory();
  const [racaSelect,setRacaSelect]=useState(cachorro) as any;

  async function getPets() {
    api.get(`pets/${petId}`).then((res) => {
      const pets = res.data;
      //console.log(pets);
      setNome(pets.name);
      setEspecie(pets.species);
      setSexo(pets.sex);
      setRaca(pets.breed);
      setCor(pets.color);
      setImage(pets.image);
      setImage(pets.image);
      setDetalhes(pets.details);
      setEstado(pets.state);
      setCidade(pets.city);
      setStatus(pets.status);
      setPetuser(pets.user_id);
      setFinishedrequest(true);
    });

  }
  useEffect(() => {
    getPets();
    let userValid = Protectedpage();
    if(userValid == false){history.push("/login");}
  }, []);
  useEffect(() => {
    //Validação se o pet foi criado por você mesmo
    let userid;
    userid = getUserID();
    console.log(userid,parseInt(petuser))
    if(userid != parseInt(petuser) && isNaN(parseInt(petuser)) == false ){
      history.push("/");
    }
  }, [petuser]);
  const HandleEdit = () => {
    api.patch(`pets/${petId}`,{
      name : nome,
      species : especie,
      sex : sexo,
      breed: raca,
      color : cor,
      image: image,
      details: detalhes,
      city: cidade,
      state: estado,
      status: status,
      active: true,
      token : token,

    }).then((res)=>{
      //console.log(res.data); // Token
      alert(`Pet ${nome} Editado com sucesso`);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      // alert("ops! ocorreu um erro" + err)
      setError("ops! ocorreu um erro" + err);
    });
  }

  useEffect(() => {
    let tokenResponse = getUserToken();
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
          HandleEdit();
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
            <InputLabel>Raça</InputLabel>
              <Select
              label="Raça"
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
              <MenuItem value={"Amapá"}> Amapá </MenuItem>
              <MenuItem value={"Amazonas"}> Amazonas </MenuItem>
              <MenuItem value={"Bahia"}> Bahia </MenuItem>
              <MenuItem value={"Ceará"}> Ceará </MenuItem>
              <MenuItem value={"Distrito Federal"}> Distrito Federal </MenuItem>
              <MenuItem value={"Espírito Santo"}> Espírito Santo </MenuItem>
              <MenuItem value={"Goiás"}> Goiás </MenuItem>
              <MenuItem value={"Maranhão"}> Maranhão </MenuItem>
              <MenuItem value={"Mato Grosso"}> Mato Grosso </MenuItem>
              <MenuItem value={"Mato Grosso do Sul"}> Mato Grosso do Sul </MenuItem>
              <MenuItem value={"Minas Gerais"}> Minas Gerais </MenuItem>
              <MenuItem value={"Pará"}> Pará </MenuItem>
              <MenuItem value={"Paraíba"}> Paraíba </MenuItem>
              <MenuItem value={"Paraná"}> Paraná </MenuItem>
              <MenuItem value={"Pernambuco"}> Pernambuco </MenuItem>
              <MenuItem value={"Piauí"}> Piauí </MenuItem>
              <MenuItem value={"Rio de Janeiro"}> Rio de Janeiro </MenuItem>
              <MenuItem value={"Rio Grande do Norte"}> Rio Grande do Norte </MenuItem>
              <MenuItem value={"Rio Grande do Sul"}> Rio Grande do Sul </MenuItem>
              <MenuItem value={"Rondônia"}> Rondônia </MenuItem>
              <MenuItem value={"Roraima"}> Roraima </MenuItem>
              <MenuItem value={"Santa Catarina"}> Santa Catarina </MenuItem>
              <MenuItem value={"São Paulo"}> São Paulo </MenuItem>
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
            value={status}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setStatus(event.target.value as string);
            }}
            >
            <MenuItem value={"found"}>Perdido</MenuItem>
            <MenuItem value={"lost"}>Encontrado</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary"
          fullWidth>
              Salvar alterações
          </Button>
      </form>
    </Container>
)
}

export default Edit;
