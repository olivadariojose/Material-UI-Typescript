import { Navbar } from "./components/materialui/Navbar";
import { Switcher } from './components/materialui/Switcher';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Paper } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Paper>

        <Switcher />
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Paper>
      <br />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </div>
  );
}

export default App;
