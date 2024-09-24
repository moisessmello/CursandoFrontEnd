
'use client'

import Pagina from "@/app/components/Pagina";
import apiAnime from "@/services/apiAnime";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiAnime.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])


    return (
        <Pagina titulo="Anime">

            {personagens.map(item => (
                <p>{item.name}</p>
            ))}

        </Pagina>
    )
}


