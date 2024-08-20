import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";

export default function Fundamentos() {

    
        
    return (
        
        <>
            <Cabecalho titulo="Fundamentos"/>

            <Container>

            <Alert>
                Atenção! Preste muita atenção.
            </Alert>

            <h1>Fundamentos</h1>
            <p>Sucesso</p>
            <Cabecalho titulo="Cabeçalho abaixo" />
            </Container>
            <Link href="/">Página Inicial</Link><br />
        <Link href="../clientes">Clientes</Link><br /> 
          
        </>
    )
}
