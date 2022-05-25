import './App.scss';
import NavBar from './components/NavBar/NavBar';
import CardItem from './components/Card/Card';
import { Container, Grid } from '@mui/material';


function App() {
  return (
  <div>
    <NavBar/>
    <Container>
      <Grid container>
        <Grid item md={4}>
        <CardItem/>
        </Grid>
      </Grid>
    </Container>
  </div>
  );
}

export default App;
