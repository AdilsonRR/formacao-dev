import InputComId from "@/components/formulario/InputComId";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function formularioId1() {
  let id = useId();
  return (
    <Pagina
      titulo="Usando o hood useId em um componente"
      subtitulo="reusando um componente com Id"
    >
      <InputComId label ="nome"/>
      <InputComId label ="Sobrenome"/>

    </Pagina>
  );
}
