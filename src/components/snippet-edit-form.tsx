'use client'

import { Editor } from '@monaco-editor/react'
import { Snippet } from '@prisma/client'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm(props: SnippetEditFormProps) {
  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={props.snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  )
}
