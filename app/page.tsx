import LinkFetching from '@/components/LinkFetching';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-5">
      <h1 className='text-4xl font-bold mb-4 text-left'>Link Previewer</h1>
      <LinkFetching />
    </main>
  )
}
