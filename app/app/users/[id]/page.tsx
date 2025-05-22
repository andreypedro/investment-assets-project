import { notFound } from "next/navigation";

export default async function UserPage({params}: {params: {id: string}}) {

    const { id } = await params;

    if(id === '99') {
        notFound();
    }

    return (
        <div>Teste {id}</div>
    );
}