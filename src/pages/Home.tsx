import { Box, Button, Card, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import PetCard from "../components/PetCard/PetCard";
import api from "../services/api";
import { getUserToken } from "../services/token";
import { HomeDetails } from "./home.style";
// import { Container } from './styles';
const Home = () => {
  let history = useHistory();
  const [pets, setPets] = useState<Array<any>>();
  const [token, setToken] = useState(Boolean);
  const {ButtonHome} = HomeDetails();
  async function getPets() {
    api.get("pets").then((res) => {
      setPets(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    getPets();
    let tokenResponse = getUserToken();
    if (tokenResponse != "") {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  const registerPetButton = 
  <Box display="flex" justifyContent="center">
      <Button
      variant="contained"
      color="primary"
      className={ButtonHome}
      onClick={() => {
        if(token){
          history.push("/pet/register");
        }else{
          history.push("/login");
        }
      }}
      
      >
        Estou procurando meu pet!
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={ButtonHome}
        onClick={() => {
          if(token){
            history.push("/pet/register");
          }else{
            history.push("/login");
          }
        }}
      >
        Encontrei um pet perdido!
      </Button>
  </Box>;
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h1" align="center">PetFinder</Typography>  
          <Typography variant="h2" align="center">Feito para ajudar pets e donos a se encontrarem!</Typography>  
          {registerPetButton}
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={3}>
            {pets &&
              pets.slice(0, pets.length).map((pet) => {
                return <PetCard petInfo={pet} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;