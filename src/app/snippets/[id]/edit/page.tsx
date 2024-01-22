interface SnippedEditPageProps {
  params: {
    id: string
  }
}

export default function SnippedEditPage(props: SnippedEditPageProps) {
  const id = parseInt(props.params.id)

  return <div>Editing snippet with id {id}</div>
}
