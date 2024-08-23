'use client'

import Pagina from "../components/Pagina";

export default function Objetos() {

    const carros = [
        { marca: 'GM', modelo: 'Corsa', cor: 'Rosa', foto: '' },
        { marca: 'GM', modelo: 'Celta', cor: 'Preta', foto: '' },
        { marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelha', foto: '' },
        { marca: 'VW', modelo: 'Fusca', cor: 'Prata', foto: '' },
        { marca: 'GM', modelo: 'Cobalt', cor: 'Branca', foto: '' }]//array começa com chaves[]




    return (
        <Pagina titulo="Objetos">


            {carros.map(item => (
                <p>{item.marca}</p>
            ))}

        </Pagina>

    )
}


