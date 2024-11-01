import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function contagemCaractererisRef() {
  const quantidadeCaracteres = 400;
  const [caracteresRestantes, setCaracteresRestantes] =
    useState(quantidadeCaracteres);
  const refTexto = useRef<any>();
  const contador = useRef<any>();
  const iniciaContador = () => {
    clearTimeout(contador.current)
    contador.current = setTimeout(() => {
      let quantidadeCaracteresDigitados = refTexto.current.value.length;
      setCaracteresRestantes(
        quantidadeCaracteres - quantidadeCaracteresDigitados
      );
    }, 1000);
  };

  return (
    <Pagina
      titulo="Contagem de caracteres"
      subtitulo="Usando uma refenrencia para controlar o tempo"
    >
      <Display
        texto={"Digite o Texto"}
        textoComplementar={`${caracteresRestantes} caracteres restantes`}
      />
      <textarea
        ref={refTexto}
        onInput={iniciaContador}
        className={`boder border-zinc-700 bg-zinc-700
                    text-white text-xl w-3/5 h-72
                    rounded p-5`}
      ></textarea>
    </Pagina>
  );
}
