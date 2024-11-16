import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { createContext, useState } from "react";
//a ideia é criar a interfase do parametros necessario
//nesse caso ele armazene qualquer coisa
export let Contexto = createContext({} as any);

export default function loja() {
  const [carrinho, setCarrinho] = useState([]);
  const ctx = {
    carrinho,
    setCarrinho,
    valorTotal(): number {
      const r = carrinho.reduce(
        (acc: number, produto: { preco:number}) => acc + +produto.preco,
        0
      );

      return r;
    },
    subTotal():number{
        const sub = carrinho.reduce((ac:number,produto:{preco:number,quantidade:number})=>ac + +(produto.preco*produto.quantidade),0)
        return sub
    }
  };
  return (
    <Contexto.Provider value={ctx}>
      <Pagina
        titulo="Loja"
        subtitulo="Compartilhando Informaçoes entre mutiplos componentes"
      >
        <Flex col gap={4}>
          <Flex gap={4}>
            <AdicionarProduto />
            <FinalizarCompra />
          </Flex>
          <Carrinho />
        </Flex>
      </Pagina>
    </Contexto.Provider>
  );
}
