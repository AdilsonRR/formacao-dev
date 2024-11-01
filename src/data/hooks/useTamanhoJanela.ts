import { useEffect, useState } from "react";

// const getTamanhoDaJanela = () => {
//     // se o tipo da janela é diferente de undefinef
//     if (typeof window !== undefined) {
//         const { innerWidth: largura, innerHeight: altura } = window;
//         console.warn({ largura, altura })
//         return { largura, altura }
//     } else {
//         return { largura: -1, altura: -1 }
//     }
// }

// export default function useTamanhoJanela() {
//     //nesse caso se chama a funçao atribuindo os ()
//     const [tamanhoDaJanela, setTamanhoDaJanela] = useState(getTamanhoDaJanela());
//     // aqui vai executar so uma vaz quando abrir a  janela por isso  o [] é vazio
//     useEffect(() => {
//         const tamanhoMudou = () => { setTamanhoDaJanela(getTamanhoDaJanela()) }
//         //adiciona o evento 
//         window.addEventListener("resize", tamanhoMudou)
//         //aqui deleta ele
//         return () => {
//             return window.removeEventListener("resize", tamanhoMudou);
//         }
//     }, [])
//     const entre = (min: number, max: number) => {
//         return tamanhoDaJanela.largura >= min && tamanhoDaJanela.altura < max;
//     }
//     const dimensoes = {
//         sm: entre(640, 768),
//         md: entre(768, 1024),
//         lg: entre(1024, 1280),
//         xl: entre(1280, 1536),
//         xl2: entre(1536, Number.MAX_VALUE),
//     }
//     const tamanhoVerdadeiro = Object.entries(dimensoes).filter((e) => e[1])

//     return tamanhoVerdadeiro[0]?.[0];
// }

let altura: number
let largura: number
export default function useTamanhoJanela() {
    const [tamanhoDaJanela, setTamanhoDaJanela] = useState({ largura: 0, altura: 0 })
    const janelaNotUndefined = typeof window !== undefined
    useEffect(() => {
        if (janelaNotUndefined) {
            window.addEventListener("resize", () => {
                largura = window.innerWidth
                altura = window.innerHeight
                return { largura, altura }
            })
        }
        const tamanhoMudou = () => setTamanhoDaJanela({ largura, altura })
        window.addEventListener("resize", tamanhoMudou)

        return () => window.removeEventListener("resize", tamanhoMudou)
    }, [])
    const entre = (min: number, max: number) => {
        return (tamanhoDaJanela.largura >= min) && (tamanhoDaJanela.largura < max)
    }
    const dimensoes = {
        sm: entre(640, 768),
        md: entre(768, 1024),
        lg: entre(1024, 1280),
        xl: entre(1280, 1536),
        xl2: entre(1536, Number.MAX_VALUE),
    }
    const tamanhoVerdadeiro = Object.entries(dimensoes).filter((e)=>e[1])

    return tamanhoVerdadeiro[0]?.[0]
}