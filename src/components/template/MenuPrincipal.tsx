import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";
import {
  IconAppWindow,
  IconArrowLeftRight,
  IconDimensions,
  IconLetterC,
  IconLetterCase,
  IconLock,
  IconMathGreater,
  IconMenu,
  IconNumbers,
  IconRefreshAlert,
  IconSection,
  IconUser,
  IconWritingSign,
  IconX,
} from "@tabler/icons-react";
import Titulo from "./Titulo";
import useToggle from "@/data/hooks/useToggle";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";
import { useEffect } from "react";
import useBoolean from "@/data/hooks/useBoolean";

export default function MenuPrincipal() {

  const secoes = [
    {
      titulo: "Essenciais",
      aberta: false,
      itens: [
        { titulo: "Contador",url: "/essenciais/contador",tag: "useState",icone: <IconNumbers />,},
        {titulo: "Votaçao",url: "/essenciais/votacao",tag: "useState",icone: <IconUser />,},
        {titulo: "Consulta à API",url: "/essenciais/consultaAPI",tag: "useEffct",icone: <IconArrowLeftRight />,},
        {titulo: "Maior",url: "/essenciais/maior",tag: "useEffct",icone: <IconMathGreater />,},
        {titulo: "Contagem Caracteres",url: "/essenciais/contagemCaracteres",tag: "useEffct",icone: <IconLetterCase />,},
        {titulo: "State Vs Refenciais",url: "/essenciais/stateVsRef",tag: "useRef",icone: <IconRefreshAlert />,},
        {titulo: "Referenciando Elemento",url: "/essenciais/refElemento",tag: "UseRef",icone: <IconSection />,},
        {titulo: "Contagem Caracateres ",url: "/essenciais/contagemCaractererisRef",tag: "UseRef",icone: <IconLetterCase />,},
      ],
    },
    {
      titulo: "Personalizados",
      aberta: true,
      itens: [
        { titulo: "Modal",url: "/personalizados/modal",tag: "personalizado",icone: <IconAppWindow />,},
        { titulo: "Tamanho da Janela",url: "/personalizados/tamanhoJanela",tag: "personalizados",icone: <IconDimensions />,},
        { titulo: "Validando Senha",url: "/personalizados/senhas",tag: "personalizados",icone: <IconLock />,},
      ],
    },
    
  ];
  const [mini,toggleMini,miniTrue] = useBoolean(false);
  const tamanho = useTamanhoJanela()
  useEffect(()=>{
    if(tamanho==="md"||tamanho==="sm"){
      miniTrue()
    }
  },[tamanho])
  function renderizarSecoes() {
    return secoes.map((secao: MenuSecao) => (
      <MenuPrincipalSecao key={secao.titulo}titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
        {renderizarItens(secao)}
      </MenuPrincipalSecao>
    ));
  }

  function renderizarItens(secao: MenuSecao) {
    return secao.itens.map((item: MenuItem) => (
      <MenuPrincipalItem
        key={`${item.titulo}-${item.tag}`}
        icone={item.icone}
        titulo={item.titulo}
        tag={item.tag}
        url={item.url}
        mini={mini}
      />
    ));
  }

  return (
    <aside
      className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
    >
      <Flex center className="m-7">
        {!mini && <Logo />}
        <div className="cursor-pointer" onClick={toggleMini}>
          {mini?<IconMenu/> : <IconX/>}
        </div>
      </Flex>
      <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
    </aside>
  );
}
