import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'


import { payloadToken } from '../../_api/token'


export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string
      }
    }
  },
): Promise<Response> {
  console.log('Preview route hit')


  const token = req.cookies.get(payloadToken)?.value
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')
  const secret = searchParams.get('secret')
  console.log(`URL: ${url}, Secret: ${secret}, Token: ${token ? 'exists' : 'missing'}`)


  if (!url) {
   
    console.log('No URL provided')
    return new Response('No URL provided', { status: 404 })
  }


  if (!token) {
    console.log('No token provided')
    new Response('You are not allowed to preview this page', { status: 403 })
  }


  // validate the Payload token
  console.log('Validating Payload token')
  const userReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })


  const userRes = await userReq.json()


  if (!userReq.ok || !userRes?.user) {
    console.log('Invalid or unauthorized user')
    draftMode().disable()
    return new Response('You are not allowed to preview this page', { status: 403 })
  }


  if (secret !== process.env.NEXT_PRIVATE_DRAFT_SECRET) {
    console.log('Invalid secret')
    return new Response('Invalid token', { status: 401 })
  }
  console.log('Enabling draft mode')
  draftMode().enable()
  console.log(`Redirecting to: ${url}`)
  redirect(url)
}


