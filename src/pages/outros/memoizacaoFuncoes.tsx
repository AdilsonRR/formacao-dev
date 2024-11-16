import InputFormatado from "@/components/formulario/InputFormatado";
import BotaoMemoizado from "@/components/template/BotaoMemoizado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useCallback, useState } from "react";

export default function MemoizacaoFuncoes() {
  const [quantidade, setQuantidade] = useState(0);
  const finalizar = useCallback(function(e:any) {
    window.alert(`Compra Finalizada com total de Produtos`);
    e.preventDefaul()
    setQuantidade(0);
  }, []);
  return (
    <Pagina
      titulo="Memoização Funções"
      subtitulo="Entendendo o hook useCallback"
    >
      <Display texto={"Quantos produtos você quer?"} />
      <form action="">
        <Flex col center>
          <InputFormatado
            tipo="number"
            valor={quantidade}
            onInput={(e) => setQuantidade(+e.target.value)}
          />
          <BotaoMemoizado
            texto="Confirmar"
            onClick={finalizar}
            className="px-11 flex justify-center items-center"
          />
        </Flex>
      </form>
    </Pagina>
  );
}
