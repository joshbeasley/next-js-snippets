'use client'

import { editSnippet } from '@/actions'
import { Editor } from '@monaco-editor/react'
import { Snippet } from '@prisma/client'
import { useState } from 'react'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm(props: SnippetEditFormProps) {
  const [code, setCode] = useState(props.snippet.code)

  const handleEditorChange = (value: string = '') => {
    setCode(value)
  }

  const editSnippetAction = editSnippet.bind(null, props.snippet.id, code)

  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={props.snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction} className='mt-2'>
        <button type='submit' className='p-2 border rounded'>
          Save
        </button>
      </form>
    </div>
  )
}
