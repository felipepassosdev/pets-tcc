import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Checkbox,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  formFlex: {
    display: "flex",
    flexDirection: "column",
  },
  Checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  FormSpacing: {
    marginBottom: "1rem",
  },
});

const Register: React.FC = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <form className={classes.formFlex}>
            <TextField required id="pet_name" label="name" variant="outlined" />
            <Box>
              <InputLabel id="pet_species_Label">species</InputLabel>
              <Select labelId="pet_species_Label" id="pet_species">
                <MenuItem value="cat">cat</MenuItem>
                <MenuItem value="dog">dog</MenuItem>
              </Select>
            </Box>
            <Box>
              <InputLabel id="pet_sex_Label">sex</InputLabel>
              <Select labelId="pet_sex_Label" id="pet_sex">
                <MenuItem value={10}>female</MenuItem>
                <MenuItem value={20}>male</MenuItem>
              </Select>
            </Box>
            <TextField
              required
              id="pet_breed"
              label="breed"
              variant="outlined"
            />
            <TextField
              required
              id="pet_color"
              label="color"
              variant="outlined"
            />
            <TextField
              required
              id="pet_image"
              label="image"
              variant="outlined"
            />
            <TextField
              required
              id="pet_details"
              label="details"
              variant="outlined"
            />
            <TextField required id="pet_city" label="city" variant="outlined" />
            <TextField
              required
              id="pet_state"
              label="state"
              variant="outlined"
            />
            <Box>
              <InputLabel id="pet_status_Label">status</InputLabel>
              <Select labelId="pet_status_Label" id="pet_status">
                <MenuItem value={10}>found</MenuItem>
                <MenuItem value={20}>lost</MenuItem>
              </Select>
            </Box>
            <Box className={classes.Checkbox}>
              <Checkbox
                value="login_rememberme"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <InputLabel htmlFor="pet_active">active?</InputLabel>
            </Box>
            <TextField
              required
              id="pet_token"
              label="token"
              variant="outlined"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                alert("clicado");
              }}
            >
              Criar Pet
            </Button>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/')
              }}
            >
              Retornar Home
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
