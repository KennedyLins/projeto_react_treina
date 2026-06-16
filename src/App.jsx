import { Container } from "react-bootstrap";
import NavbarProjeto from "./NavbarProjeto"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Tarefas from "./Tarefas";
import Projetos from "./Projetos";
import Usuarios from "./Usuarios";

function App() {
  return (
    <Container>
        <NavbarProjeto />

        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/tarefas" element={<Tarefas />}></Route>
            <Route path="/projetos" element={<Projetos />}></Route>
            <Route path="/usuarios" element={<Usuarios />}></Route>
        </Routes>

    </Container>
  
  );

}

export default App
