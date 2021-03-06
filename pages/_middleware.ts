import { NextResponse } from 'next/server'

const signedInPages = ['/', '/playlist', '/library']

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.trax_access_token

    if (!token) {
      return NextResponse.redirect('/signin')
    }
  }
}
