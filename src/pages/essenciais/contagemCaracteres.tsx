import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function contagemCaracteres() {
  const quantidadeCaracteres = 400;
  const timeout = 1000;
  const [caracteresRestantes, setCaracteresRestantes] =
    useState(quantidadeCaracteres);
  const [texto, setTexto] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      let aux = quantidadeCaracteres - texto.length;
      setCaracteresRestantes(aux);
      console.log("Atalizei");
    }, timeout);
    //funçoes de limpezas
    return () => {
      clearTimeout(timer);
    };
  }, [texto]);

  return (
    <Pagina
      titulo="Contagem de caracteres"
      subtitulo="Entendo as funções de limpezas"
    >
      <Display
        texto={"Digite o Texto"}
        textoComplementar={`${caracteresRestantes} caracteres restantes`}
      />
      <textarea
        value={texto}
        onInput={(e) => {
          setTexto(e.currentTarget.value);
        }}
        className={`boder border-zinc-700 bg-zinc-700
                    text-white text-xl w-3/5 h-72
                    rounded p-5`}
      ></textarea>
    </Pagina>
  );
}
