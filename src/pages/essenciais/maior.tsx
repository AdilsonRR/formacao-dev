import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function Maior() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [maior, setMaior] = useState(0);

  const calculaMaior = () => {
    return n1 > n2 ? n1 : n2;
  };
  useEffect(() => {
    let m = calculaMaior;
    setMaior(m);
  }, [n1, n2]);
  // usar o useEffect(()=>{},[]) cria funçao que tem q fazer se o [] vazio eel executa uma vez e se colocar os parametros n1 ou n2 ele vai executar quando tiver alteraçao nas variasveis no caso é n nesse exemplo
  useEffect(() => {
    console.log(`N1:${n1}, N2:${n2}, maior:${maior}`);
  }, [n1, n2, maior]);
  useEffect(() => {
    if (maior > 5) {
      window.alert("Os numeros estão ficando altos!!");
    }
  }, [maior]);
  return (
    <Pagina titulo="" subtitulo="">
      <Display
        texto={`N1: ${n1} | N2: ${n2}`}
        textoComplementar={`O maios numero é ${maior}`}
      />
      <Flex gap={5}>
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-red-500"
          texto="N1"
          onClick={() => setN1(n1 + 1)}
        />

        <Botao
          redondo
          tamanho="2xl"
          cor="bg-blue-500"
          texto="N2"
          onClick={() => setN2(n2 + 1)}
        />
      </Flex>
    </Pagina>
  );
}
