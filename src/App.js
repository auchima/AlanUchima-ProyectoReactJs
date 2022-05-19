import './App.scss';
import {Navbar as Bnavbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {Navbar} from "./Navbar"

function App() {
  return (
  <div>
      <Navbar></Navbar>
  <Bnavbar bg="light" expand="lg">
            <Container>
                <Bnavbar.Brand href="#home">React-Bootstrap</Bnavbar.Brand>
                <Bnavbar.Toggle aria-controls="basic-navbar-nav" />
                <Bnavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Bnavbar.Collapse>
            </Container>
        </Bnavbar>

  </div>
  );
}

export default App;
