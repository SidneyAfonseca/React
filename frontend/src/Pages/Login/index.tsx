import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Image } from "react-bootstrap";
// import Logo from "../../assets/logo.png";
import { useState } from "react";
import { CreateUser, DoLoginUser } from "../../services/login.service";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [nome, SetNome] = useState("");
  const [isLogin, SetIsLogin] = useState(true);
  const [typeUser, SetTypeUser] = useState("");

  function LoginButton() {
    return (
      <div className="d-grid col-12">
        <Button
          variant="success"
          onClick={() => {
            if (isLogin) DoLogin();
            else DoCreateUser();
          }}
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </Button>
      </div>
    );
  }

  async function DoLogin() {
    const res = await DoLoginUser(email, password);
    console.log(res);
  }

  async function DoCreateUser() {
    await CreateUser(nome, email, password, typeUser);
    SetIsLogin(true);
  }

  return (
    <Container fluid className="d-flex min-vh-100">
      <Row className="min-vw-100">
        <Col
          xs={12}
          md={4}
          className="bg-light d-flex flex-column align-items-center justify-content-center"
        >
          {/* <Image src={Logo} width={100} /> */}
          <h2>Bem vindo à WA Loja!</h2>
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-center align-items-center"
        >
          <Form>
            {!isLogin ? (
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  onChange={(e) => SetNome(e.target.value)}
                  type="email"
                  className="form-control-lg"
                  required
                />
              </Form.Group>
            ) : null}

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => SetEmail(e.target.value)}
                type="email"
                className="form-control-lg"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                onChange={(e) => SetPassword(e.target.value)}
                type="password"
                className="form-control-lg"
                required
              />
            </Form.Group>

            {!isLogin ? (
              <Form.Group className="mb-3">
                <Form.Label>Tipo de Usuário</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    name="userType"
                    label="Cliente"
                    value="6a4cda94-fbb6-476b-be29-f4124cae9058"
                    onChange={(e) => SetTypeUser(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    name="userType"
                    label="Administrador"
                    value="7edd25c6-c89e-4c06-ae50-c3c32d71b8ad"
                    onChange={(e) => SetTypeUser(e.target.value)}
                  />
                </div>
              </Form.Group>
            ) : null}

            <LoginButton />
            <div className="text-center mt-3">
              <Button
                variant="link"
                onClick={() => {
                  SetIsLogin(!isLogin);
                }}
              >
                {isLogin ? "Não tenho cadastro" : "Já tenho cadastro"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
