import { useState } from "react";

export default function useToggle(valor?: boolean) {
    const [ativo, setAtivo] = useState(valor ?? false);

    const toggleAtivo = () => setAtivo(!ativo);
    // r e uma variavel de retordno, precisa fazer isso para fazer tipagem do TS
    const retorno: [boolean, () => void] = [ativo, toggleAtivo]
    return retorno 
}