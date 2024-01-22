import SnippetEditForm from '@/components/snippet-edit-form'
import { db } from '@/db'
import { notFound } from 'next/navigation'

interface SnippedEditPageProps {
  params: {
    id: string
  }
}

export default async function SnippedEditPage(props: SnippedEditPageProps) {
  const id = parseInt(props.params.id)
  const snippet = await db.snippet.findFirst({
    where: { id },
  })

  if (!snippet) {
    return notFound()
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}
