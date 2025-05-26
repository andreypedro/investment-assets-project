import Link from 'next/link'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full py-6 px-4 bg-blue-700 flex items-center justify-center shadow">
        <Link href="/" className="text-2xl font-extrabold text-white tracking-tight">LinkedIn Pro Image</Link>
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="w-full py-6 bg-blue-700 text-center text-white text-sm font-medium tracking-wide">
        &copy; {new Date().getFullYear()} LinkedIn Pro Image Service.
      </footer>
    </div>
  );
}