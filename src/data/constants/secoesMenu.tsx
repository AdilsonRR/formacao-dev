import {
  IconAppWindow,
  IconArrowLeftRight,
  IconColorSwatch,
  IconDatabase,
  IconDatabaseImport,
  IconDimensions,
  IconForms,
  IconLetterCase,
  IconLock,
  IconMathGreater,
  IconNumbers,
  IconPin,
  IconRefreshAlert,
  IconSection,
  IconShoppingCart,
  IconTextColor,
  IconUser,
} from "@tabler/icons-react";
export const secoes = [
  {
    titulo: "Essenciais",
    aberta: false,
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
    aberta: false,
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
    aberta: false,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
  {
    titulo: "Outros",
    aberta: true,
    itens: [
      {
        titulo: "Memoizando elementos",
        url: "/outros/memoizacao",
        tag: "useMemo",
        icone: <IconPin />,
      },
      {
        titulo: "Memoização Funções",
        url: "/outros/memoizacaoFuncoes",
        tag: "useCallback",
        icone: <IconPin />,
      },
      {
        titulo: "Formulario 1",
        url: "/outros/formularioImperativeHandle",
        tag: "useImperativeHandle",
        icone: <IconForms />,
      },
      {
        titulo: "Texto Secreto",
        url: "/outros/texto",
        tag: "useLayoutEffect",
        icone: <IconTextColor />,
      },
      {
        titulo: "Gerador de Cor",
        url: "/outros/geradorDeCor",
        tag: "useLayoutEffect",
        icone: <IconColorSwatch />,
      },
      {
        titulo: "Soma com useState",
        url: "/outros/soma",
        tag: "useState",
        icone: <IconDatabase />,
      },
      {
        titulo: "Soma com useReducer",
        url: "/outros/somaReducer",
        tag: "useReducer",
        icone: <IconDatabaseImport />,
      },
      {
        titulo: "Formulario 1",
        url: "/outros/formularioId1",
        tag: "useId",
        icone: <IconForms />,
      },
      {
        titulo: "Formulario 2",
        url: "/outros/formularioId2",
        tag: "useId",
        icone: <IconForms />,
      },
    ],
  },
];

export default secoes;