interface DisplayProps {
    texto: any;
    textoComplementar?: string;
}

export default function Display(props: DisplayProps) {
    return (
        <>
            <p className={`text-5xl m-4 text-gray-300`}>{props.texto}</p>
            {props.textoComplementar ? (
                <p className={`text-4xl m-4 text-gray-300`}>
                    {props.textoComplementar}
                </p>
            ) : (
                ""
            )}
        </>
    );
}
