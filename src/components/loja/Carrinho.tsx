import { useContext, useState } from "react";
import { Contexto } from "../../pages/contexto/loja";
import Janela from "../template/Janela";

export default function Carrinho() {
  const { carrinho, valorTotal,subTotal } = useContext(Contexto);
  
  const produtos = [...carrinho];
 // let total = produtos.reduce((acc, produto) => acc + +produto.preco, 0);

  return (
    <Janela titulo="Carrinho" cor="bg-green-700" vertical>
      <div className="overflow-y-auto relative max-h-60 h-fit min-w-full">
        <table className="table-auto w-full h-full text-center">
          <thead>
            <tr>
              <th className="w-1/3">Nome</th>
              <th className="w-1/3">Qtde</th>
              <th className="w-1/3">Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => {
           //     setSubTotal(+produto.preco *+produto.quantidade)
              return (
                <tr key={produto.nome}>
                  <td>{produto.nome}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.preco }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-2xl">
        <span>
          Total: <strong>{subTotal().toFixed(2)}</strong>
        </span>
      </div>
    </Janela>
  );
}
