"use client";

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney Tabela">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {personagens.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td><img height={80} src={item.imageUrl} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
