// import { useState } from "react"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Form, Row } from "react-bootstrap"

function CadastroTarefa ({show, ocultar}){

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [status, setStatus] = useState('');
    const [data, setData] = useState('');

   

    const salvar = async () => {

        const tarefa = {
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            status: status,
            dataExecucao: "2026-06-17",
            projetoId: 2,
            responsavelId: 1
        }

        try {
            const response = await fetch(
                "https://spring-boot-treina-recife-turma-11-production.up.railway.app/api/v1/public/tarefas",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(tarefa)
                }
            );

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const dados = await response.json();
            console.log(dados);
            alert("Cadastro realizado com sucesso!");

        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar tarefa!");
        }
    };

    return <Modal show={show} onHide={ocultar}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Nova Tarefa</Modal.Title>
        </Modal.Header>     
        
        <Modal.Body>
        <Form>
            <Row>
                <Form.Label>Título</Form.Label>
                <Form.Control value={titulo} onChange={(c) => setTitulo(c.target.value)}></Form.Control>
            </Row>

            <Row>
                <Form.Label>Descrição</Form.Label>
                <Form.Control value={descricao} onChange={(c) => setDescricao(c.target.value)}></Form.Control>
            </Row>

             <Row>
                <Form.Label>Prioridade</Form.Label>
                <Form.Control value={prioridade} onChange={(c) => setPrioridade(c.target.value)}></Form.Control>
            </Row>

             <Row>
                <Form.Label>Status</Form.Label>
                <Form.Control value={status} onChange={(c) => setStatus(c.target.value)}></Form.Control>
            </Row>

             <Row>
                <Form.Label>Data</Form.Label>
                <Form.Control value={data} type="date" onChange={(c) => setData(c.target.value)}></Form.Control>
            </Row>

        </Form>



        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={ocultar}>
            Close
          </Button>
          <Button variant="primary" onClick={salvar}>      
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
}
export default CadastroTarefa