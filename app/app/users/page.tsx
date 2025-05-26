type User = {
    name: string
}

async function makePostRequest() {

    const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: "Andrey Pedro Lefkum"})
    })

    const data: User = await res.json()

    console.log(data)

    return data
}


export default async function Home() {

    const data = await makePostRequest()

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            Test
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            Name: { data.name }
        </footer>
        </div>
    );
}