import {
  IconAppWindow,
  IconArrowLeftRight,
  IconDimensions,
  IconLetterCase,
  IconLock,
  IconMathGreater,
  IconNumbers,
  IconRefreshAlert,
  IconSection,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
export const secoes = [
  {
    titulo: "Essenciais",
    aberta: true,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useState",
        icone: <IconNumbers />,
      },
      {
        titulo: "Votaçao",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUser />,
      },
      {
        titulo: "Consulta à API",
        url: "/essenciais/consultaAPI",
        tag: "useEffct",
        icone: <IconArrowLeftRight />,
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffct",
        icone: <IconMathGreater />,
      },
      {
        titulo: "Contagem Caracteres",
        url: "/essenciais/contagemCaracteres",
        tag: "useEffct",
        icone: <IconLetterCase />,
      },
      {
        titulo: "State Vs Refenciais",
        url: "/essenciais/stateVsRef",
        tag: "useRef",
        icone: <IconRefreshAlert />,
      },
      {
        titulo: "Referenciando Elemento",
        url: "/essenciais/refElemento",
        tag: "UseRef",
        icone: <IconSection />,
      },
      {
        titulo: "Contagem Caracateres ",
        url: "/essenciais/contagemCaractererisRef",
        tag: "UseRef",
        icone: <IconLetterCase />,
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: true,
    itens: [
      {
        titulo: "Modal",
        url: "/personalizados/modal",
        tag: "personalizado",
        icone: <IconAppWindow />,
      },
      {
        titulo: "Tamanho da Janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />,
      },
      {
        titulo: "Validando Senha",
        url: "/personalizados/senhas",
        tag: "personalizados",
        icone: <IconLock />,
      },
    ],
  },
  {
    titulo: "Contexto",
    aberta: true,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
];

export default secoes;