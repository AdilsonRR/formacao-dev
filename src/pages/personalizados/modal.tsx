import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { IconX } from "@tabler/icons-react";

export default function Modal() {
  const [mostrar, tottleMostar] = useToggle(false);

  return (
    <Pagina
      titulo="Modal"
      subtitulo="Usando o hook personalizado para abrir e fechar uma modal"
    >
      <Botao
        texto="Abrir"
        cor="bg-cyan-500"
        className="flex flex-col justify-center"
        onClick={tottleMostar}
      />
      {mostrar ? (
        <Flex
          center
          col
          className={`w-80 h-80 bg-gray-500 text-white text-2xl p-4 m-4 rounded-md
        `}
        >
          <Botao
            cor="bg-red-500"
            tamanho="xl"
            icone={<IconX />}
            onClick={tottleMostar}
          />
          <h1 className="mt-5">Clique em X para sair</h1>
        </Flex>
      ) : (
        ""
      )}
    </Pagina>
  );
}
