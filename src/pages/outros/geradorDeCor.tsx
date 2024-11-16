import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useBoolean from "@/data/hooks/useBoolean";
import { useEffect,  useRef, useState } from "react";

export default function geradorDeCor() {
  const [mostrar, toggleMostar, mostrarTrue, mostraFalse] = useBoolean();
  const [texto, setTexto] = useState("Clique em Sortear");
  const ref =useRef<any>(null)

  const gerarCorAleatorio = () => {
    //aqui ele gera em hexadecimal aleatorio desta forma é convertida para hea
    const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff);
    const cor = numeroAleatorioHexadecimal.toString(16);

    return cor;
  };
  useEffect(() => {
    if (mostrar) {
        const cor = gerarCorAleatorio()
      setTexto(`#${cor}`);
      ref.current.style.backgroundColor = `#${cor}`
    } else {
      setTexto("Clique em Sortear");
    }
  }, [mostrar]);
  return (
    <Pagina
      titulo="Gerador de cor"
      subtitulo="Criando exemplos mais complexo com useLayoutEffect "
    >
      <Flex center>
        <Botao
          className="flex justify-center items-center w-auto"
          texto="Sortear cor"
          onClick={mostrarTrue}
        />
        <Botao
          className="flex justify-center items-center w-auto"
          texto="Apagar cor"
          onClick={mostraFalse}
        />
      </Flex>
      <Display texto={texto} />
      {mostrar ? <div ref={ref} className={`h-32 w-32`}></div> : ""}
    </Pagina>
  );
}
