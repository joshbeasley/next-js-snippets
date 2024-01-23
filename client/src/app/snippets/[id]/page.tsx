import { deleteSnippet } from '@/actions'
import { snippetsBaseURL } from '@/resources'
import { Snippet } from '@prisma/client'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface SnippetShowPageProps {
  params: {
    id: string
  }
}

export default async function SnippetShowPage({
  params,
}: SnippetShowPageProps) {
  const res = await fetch(`${snippetsBaseURL}/${params.id}`)
  if (res.status !== 200) {
    return notFound()
  }

  const snippet: Snippet = await res.json()

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id)

  return (
    <div>
      <div className='flex m-4 justify-between items-center'>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
        <div className='flex gap-4'>
          <Link href='/' className='p-2 border rounded'>
            Home
          </Link>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className='p-2 border rounded'
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className='p-2 border rounded'>Delete</button>
          </form>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}

export async function generateStaticParams() {
  const res = await fetch(snippetsBaseURL)
  const snippets: Snippet[] = await res.json()

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    }
  })
}
