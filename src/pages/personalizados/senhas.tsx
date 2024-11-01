"use client"
import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";


export default function() {
 
  //utilizando rejest para verifcar alguns caracteres na minha senha
  function validaSenha(senha: any) {
    // console.log(senhaha);
    const correspondencia = senha.match(/[\d\S]{8,}/);

    return (correspondencia?.[0].length) === (senha.length);
    //condicion change o ""?."" é utilizado para ver se nao foi pasado nulo ou vaziu
  }
  const [senha, setSenha, senhaEhValida] = useStateValidado("",validaSenha);
  let borda;
  if (senha === "") {
    borda = "border-none ";
  } else if (senhaEhValida) {
    borda = "border-green-600";
  } else if (!senhaEhValida) {
    borda = "border-red-600";
  }
 //console.log(senhaEhValida);
 
  return (
    <Pagina
      titulo="Validando senha"
      subtitulo="Usando um Hook personalizado para validação"
    >
      <InputFormatado
        valor={senha}
        onInput={(e) => setSenha(e.target.value)}
        tipo="text"
        label="Senha"
        className={`${borda}border-4 w-28 h-14 flex bg-blue-400`}
      />
    </Pagina>
  );
}
