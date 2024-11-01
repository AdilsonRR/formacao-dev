import Pagina from "@/components/template/Pagina";
import { log } from "console";
import { setuid } from "process";
import { useEffect, useState } from "react";

export default function ConsultaAPI() {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((obj) => {
        console.log(obj);
        setUrl(obj.message)
      });
  }, []);

  return (
    <Pagina titulo="Requisição à API" subtitulo="Requerindo dados...">
      <img className="max-w-sm" srcSet={url}></img>
    </Pagina>
  );
}
