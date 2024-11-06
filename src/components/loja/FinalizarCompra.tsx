import { IconCheck } from "@tabler/icons-react";
import Botao from "../template/Botao";
import Janela from "../template/Janela";
import { useContext } from "react";
import { Contexto } from "@/pages/contexto/loja";
export default function FinalizarCompra() {
    const {subTotal,setCarrinho} = useContext(Contexto)

    function finalizar() {
        window.alert("Compra realizada com sucesso!");
        //aqui esvazia o carrinho
        setCarrinho(()=>[])
    }

    return (
        <Janela titulo="Finalizar" cor="bg-red-600" vertical>
            <span className="text-2xl text-center">
                Total: <strong>{subTotal().toFixed(2)}</strong>
            </span>

            <Botao
                cor="bg-white text-red-600"
                icone={<IconCheck />}
                texto="Finalizar"
                onClick={finalizar}
            />
        </Janela>
    );
}
