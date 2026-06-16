import { Container, Card, Button } from "react-bootstrap";
import CadastroTarefa from "./CadastroTarefa";
import { useState } from "react";

function Tarefas (){

    const [show, setShow] = useState(false);

    const exibir = () =>{
       setShow(true)
    }

    const ocultar = () =>{
        setShow(false)
    }

    return <Container>
            <Card>
                <Card.Header className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <h2>Painel de Tarefas</h2>
                    <Button variant="dark" onClick={exibir}>Adicionar Tarefas</Button>
                </Card.Header>

                <Card.Body>
                    <h2>Lista de Tarefas</h2>
                </Card.Body>
            </Card>

            <CadastroTarefa show={show} ocultar={ocultar}/>
        </Container>

}

export default Tarefas