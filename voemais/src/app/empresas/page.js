

'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";

export default function Page() {

    const empresas = JSON.parse(localStorage.getItem('empresas')) || [] //get é para pegar

    return (
        <Pagina titulo="Empresas">
            <Link href="/empresas/create" className="btn btn-primary mb-3">
                <FaCirclePlus /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map(item => (
                        <tr>
                            <td>1</td>
                            <td>{item.nome}</td>
                            <td>
                                <a href={item.site} target="_blank"></a>
                                <img src={item.logo} width={100} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}


