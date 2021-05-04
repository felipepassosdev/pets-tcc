import { Button, Card, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import PetCard from "../components/PetCard/PetCard";
import api from "../services/api";
import { getUserToken } from "../services/token";

// import { Container } from './styles';

const Home = () => {
  let history = useHistory();
  const [pets, setPets] = useState<Array<any>>();
  const [token, setToken] = useState(Boolean);
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

  const registerPetButton = <Button
  variant="outlined"
  color="primary"
  onClick={() => {
    history.push("/pet/register");
  }}
>
  Pet Register
</Button>
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {token && registerPetButton}

        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={3}>
            {pets &&
              pets.map((pet) => {
                return <PetCard petInfo={pet} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
