import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { PetCardStyle } from './PetCard.style';

export default function PetCard({ ...props }) {
  const pet = props.petInfo;
  let petImage: string = pet.image;
  if (petImage === "") {
    petImage = "https://via.placeholder.com/720c";
  }

  const { PetCard, PetCardA, ImagePet } = PetCardStyle();
  return (
    <Box className={PetCard} boxShadow={5} borderRadius={5} my={2}>
      <Link to={"/pet-details/"+pet.species+"&"+pet.name+"&"+pet.id} title={pet.species} className={PetCardA}>
        <img className={ImagePet} src={petImage} alt={pet.species} />
        <Box mx={1} pb={1}>
            <Typography variant="h6" >{pet.name}</Typography>
            <Typography variant="subtitle1">{pet.details}</Typography>
        </Box>

      </Link>
    </Box >
  );
}