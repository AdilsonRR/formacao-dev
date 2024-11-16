import { useContext } from "react"
import ContextoTema from "../context/TemaProvader"

const useTema = ()=>{
    return useContext(ContextoTema)
}
export default useTema;