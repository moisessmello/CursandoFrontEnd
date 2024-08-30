'use client'
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <Pagina titulo="Pagina inicial">
      <Button variant="danger">Danger</Button>{' '}

      <Cabecalho titulo="Página inicial" subtitulo="Mhoises Melo" cor="danger" />
      <Cabecalho titulo="Front" subtitulo="Professor" />
      <Cabecalho titulo="React" subtitulo="Aula" />

      <Link href="/fundamentos">Página Fundamentos</Link><br />
      <Link href="/clientes">Página clientes</Link><br />




    </Pagina>
  );
}
