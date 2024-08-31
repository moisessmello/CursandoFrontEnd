"use client";

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney Carrossel">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>

      <Carousel>
      {personagens.map((item) => (
              
        <Carousel.Item interval={1000}>
          <img height={700} src={item.imageUrl} className="d-block mx-auto" />
         
          <Carousel.Caption>
            <h3>{item.name}</h3>
            </Carousel.Caption>
        </Carousel.Item>
        ))}
    </Carousel>

      
    </Pagina>
  );
}
