import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function NavbarProjeto (){

    return (
    <Navbar className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand href="#home">
          <img alt="" src="src/assets/logo_2.png" 
          width="190"
          height="80"/>
        </Navbar.Brand>
        < Nav className="mx-auto gap-4 align-items-center">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/tarefas">Tarefas</Nav.Link>
            <Nav.Link as={Link} to="/projetos">Projetos</Nav.Link>
            <Nav.Link as={Link} to="/usuarios">Usuários</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
    
}

export default NavbarProjeto