import { Button, Card, Container } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

// import { Container } from './styles';

const Home: React.FC = () => {
  let history = useHistory();
  return (
      <Container>
          <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/login')
              }}
            >
              Form Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/login')
              }}
            >
              Form Cadastro
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/pet/register')
              }}
            >
              Pet Register
            </Button>
      </Container>
  );
}

export default Home;