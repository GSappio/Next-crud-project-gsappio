import { Key } from "react";
import Cliente from "../core/Cliente";

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: any) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )

    }

    function renderizarDados(){
        return props.clientes?.map((cliente, id) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
            {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados}
            </tbody>
        </table>
    )
}