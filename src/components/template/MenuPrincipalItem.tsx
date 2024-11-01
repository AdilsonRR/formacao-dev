import { IconCode } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
    icone?: any;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, tag, url, mini } = props;

    const router = useRouter();
    const ativo = url === router.asPath;

    return (
        <Link
            id={titulo}
            href={url}
            className={`
            flex items-center gap-2  rounded-md text-zinc-400
            hover:bg-zinc-800 px-3 py-2
            hover:text-zinc-400
            ${ativo && ` text-blue-300 bg-zinc-900`}
        `}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
            {!mini && tag && (
                <span
                    className={`
                    ${ativo ? `bg-blue-300` : "bg-zinc-700"}
                    text-white text-[11px] rounded-full px-2
                `}
                >
                    {tag}
                </span>
            )}
        </Link>
    );
}
