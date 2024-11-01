import { useState } from "react";

export default function useBoolean(valor?: boolean) {
    const [ativo, setAtivo] = useState(valor ?? false);

    const toggleAtivo = () => setAtivo(!ativo);
    const ativoTrue = ()=> setAtivo(true)
    const ativoFalse =() => setAtivo(false)
    // r e uma variavel de retordno, precisa fazer isso para fazer tipagem do TS
    const retorno: [boolean, () => void,() => void,() => void] = [ativo, toggleAtivo,ativoTrue,ativoFalse]
    return retorno 
}