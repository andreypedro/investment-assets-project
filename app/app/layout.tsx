import Link from 'next/link'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
            <h1>App Layout</h1>
            <Link href="/">Return</Link>
            {children}
         </section>
}