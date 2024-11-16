import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function formularioId1() {
  let id = useId();
  return (
    <Pagina
      titulo="Conhecendo o hood useId"
      subtitulo="usando useId em formulario"
    >
      <Flex center>
        <label htmlFor={`nome-${id}`} className="m-4">
          Nome:
        </label>
        <input
          id={`nome-${id}`}
          type="text"
          className="m-2 text-gray-600 p-2 rounded-md"
        />
      </Flex>
      <Flex center>
        <label htmlFor={`Sobrenome-${id}`} className="m-4">
          Sobrenome:
        </label>
        <input
          id={`Sobrenome-${id}`}
          type="text"
          className="m-2 text-gray-600 p-2 rounded-md"
        />
      </Flex>
    </Pagina>
  );
}
