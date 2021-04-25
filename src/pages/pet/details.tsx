import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import { PetDetails } from "./details.style";
export default function Details() {
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
  let { petId } = useParams<Record<string, string>>();
  const { ImagePet, Tag } = PetDetails();
  async function getPets() {
    api.get(`pets/${petId}`).then((res) => {
      const pets = res.data;
      console.log(pets);
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
    });
  }
  useEffect(() => {
    getPets();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img
            src={image != "" ? image : "https://via.placeholder.com/720c"}
            className={ImagePet}
            alt={nome}
          />
        </Grid>
        <Grid item xs={6}>
          <Box mt={2}>
            <Typography variant="h5">{nome}</Typography>
            <Typography className={Tag} variant="subtitle1">
              {especie}
            </Typography>
            <Typography className={Tag} variant="subtitle1">
              {sexo}
            </Typography>
            <Typography className={Tag} variant="subtitle1">
              {raca}
            </Typography>
            <Typography className={Tag} variant="subtitle1">
              {cor}
            </Typography>
            <Typography variant="h6">{detalhes}</Typography>
            <Typography variant="subtitle1">{estado}</Typography>
            <Typography variant="subtitle1">{cidade}</Typography>
            <Typography variant="subtitle1">{status}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
