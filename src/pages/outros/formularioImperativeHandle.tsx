import InputFormatadoComReferencia from "@/components/formulario/InputFormatadoComReferencia";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef } from "react";

export default function formularioImperativeHandle() {
    const referencia = useRef<any>();
    const apagar =()=>{
        referencia.current.apagar();
    }
    const padrao = ()=>{
        referencia.current.textoPadrao();
    }
    return (
        <Pagina titulo="Modificando uma referência" 
                subtitulo="Usando useRef e useImperativeHandle">
            <Flex  center col>
                <InputFormatadoComReferencia 
                    tipo="text"label="Digite o texto" 
                    ref={referencia}/>
                    <Flex center>
                        <Botao texto="Apagar" onClick={apagar} className="px-11 flex justify-center items-center"/>
                        <Botao texto="Padrão" onClick={padrao} className="px-11 flex justify-center items-center"/>
                    </Flex>
            </Flex>
        </Pagina>
    );
}