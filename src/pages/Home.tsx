import { Button, Card, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import PetCard from "../components/PetCard/PetCard";
import api from "../services/api";

// import { Container } from './styles';

const Home = () => {
  let history = useHistory();
  const [pets, setPets] = useState<Array<any>>();
  async function getPets() {
    api.get("pets").then((res) => {
      setPets(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    getPets();
  }, []);
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              history.push("/login");
            }}
          >
            Form Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              history.push("/login");
            }}
          >
            Form Cadastro
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              history.push("/pet/register");
            }}
          >
            Pet Register
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          {pets &&
            pets.map((pet) => {
              return <PetCard petInfo={pet} />;
            })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
