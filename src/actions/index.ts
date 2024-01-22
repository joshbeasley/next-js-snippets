'use server'

import { db } from '@/db'
import { redirect } from 'next/navigation'

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  })

  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  })

  redirect('/')
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  return {
    message: 'Title must be longer',
  }
  // const title = formData.get('title') as string
  // const code = formData.get('code') as string

  // const snippet = await db.snippet.create({
  //   data: {
  //     title,
  //     code,
  //   },
  // })

  // redirect('/')
}
