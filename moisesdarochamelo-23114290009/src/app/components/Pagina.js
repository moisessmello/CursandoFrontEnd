
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function Pagina(props) {
    return (
        
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="./">{props.titulo}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
                        <NavDropdown title="Disney" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/anime">                             
                                                           
                                Carrossel
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>
    )
}