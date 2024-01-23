'use server'

import { db } from '@/db'
import { snippetsBaseURL } from '@/resources'
import { revalidatePath } from 'next/cache'
import { notFound, redirect } from 'next/navigation'

export async function editSnippet(id: number, code: string) {
  const res = await fetch(`${snippetsBaseURL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  })

  if (res.status !== 200) {
    return notFound()
  }

  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
  const res = await fetch(`${snippetsBaseURL}/${id}`, {
    method: 'DELETE',
  })

  if (res.status !== 200) {
    return notFound()
  }

  revalidatePath('/')
  redirect('/')
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get('title')
    const code = formData.get('code')

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be longer',
      }
    }

    if (typeof code !== 'string' || code.length < 3) {
      return {
        message: 'Code must be longer',
      }
    }

    const res = await fetch(`${snippetsBaseURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, code }),
    })

    if (res.status !== 201) {
      throw new Error('unable to update the database')
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      }
    } else {
      return {
        message: 'Something went wrong...',
      }
    }
  }
  revalidatePath('/')
  redirect('/')
}
