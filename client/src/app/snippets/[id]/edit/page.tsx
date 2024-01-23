import SnippetEditForm from '@/components/snippet-edit-form'
import { snippetsBaseURL } from '@/resources'
import { Snippet } from '@prisma/client'
import { notFound } from 'next/navigation'

interface SnippedEditPageProps {
  params: {
    id: string
  }
}

export default async function SnippedEditPage({
  params,
}: SnippedEditPageProps) {
  const id = parseInt(params.id)
  const res = await fetch(`${snippetsBaseURL}/${params.id}`)
  if (res.status !== 200) {
    return notFound()
  }

  const snippet: Snippet = await res.json()

  return (
    <div className='mt-10'>
      <h1 className='text-lg text-bold mb-2'>Edit Code Snippet</h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}
