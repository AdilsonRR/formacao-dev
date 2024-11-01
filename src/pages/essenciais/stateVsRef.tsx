import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function StateVSRef() {
  const [estado, setEstado] = useState(0);
  const refetencia = useRef(0);
  const incrementaReferencia = () => {
    refetencia.current = refetencia.current + 1;
  };
  return (
    <Pagina titulo="Referencia Vs State" subtitulo="Entendendo o useRef">
      <Display texto={`R:${refetencia.current} | S:${estado}`} />
      <Flex gap={5}>
        <Botao 
            redondo 
            tamanho="2xl" 
            cor="bg-pink-500" 
            texto="R+" 
            onClick={()=>incrementaReferencia()} 
        />
        <Botao
            redondo
            tamanho="2xl"
            cor="bg-green-500"
            texto="S+"
            onClick={() => setEstado(estado + 1)}
        />
      </Flex>
    </Pagina>
  );
}