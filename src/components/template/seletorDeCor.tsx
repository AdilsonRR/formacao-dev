import useTema from "@/data/hooks/useTema";
import Botao from "./Botao";
import Flex from "./Flex";
import { Key } from "react";

export default function SeletorDeCor() {
  let {cores,setCorDestaque} = useTema()
  let listaCores = cores.map((cor: Key ) => {
    return <Botao key={cor} cor={`bg-${cor}`}  className=" rounded-3xl border-zinc-100 border"
            onClick={()=>{setCorDestaque(cor)}}
            />;
  });
  return (
    <Flex center gap={5} className={`absolute right-5 top-20`}>
      {listaCores}
    </Flex>
  );
}
