import { useState } from "react"
import { Modal, Row, Form, Button } from "react-bootstrap"


function CadastroUsuario ({show, ocultar}){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async () => {
       
        const usuario = {
            nome: nome,
            email: email,
            senha: senha,
            role: "ROLE_USER"
        }

        try {

            const response = await fetch("https://spring-boot-treina-recife-turma-11-production.up.railway.app/api/v1/public/usuarios",
                {
                   method: "POST",
                   headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(usuario) 
                }
            );

            const dados = await response.json();
            console.log(dados)
            alert("Usuário Cadastrado com Sucesso!!")
 
        }catch(error){
            console.log(error)
             alert("Erro no Cadastro do Usuário")
        }

     }

    return <Modal show={show} onHide={ocultar}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Nova Tarefa</Modal.Title>
        </Modal.Header>     
        
        <Modal.Body>
        <Form>
            <Row>
                <Form.Label>Nome</Form.Label>
                <Form.Control value={nome} onChange={(c) => setNome(c.target.value)}></Form.Control>
            </Row>

            <Row>
                <Form.Label>Email</Form.Label>
                <Form.Control value={email} onChange={(c) => setEmail(c.target.value)}></Form.Control>
                
            </Row>

             <Row>
                <Form.Label>Senha</Form.Label>
                <Form.Control value={senha} onChange={(c) => setSenha(c.target.value)}></Form.Control>
                
            </Row>
            
        </Form>

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={ocultar}>
            Fechar
          </Button>
          <Button variant="primary" onClick={salvar}>      
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

}

export default CadastroUsuario