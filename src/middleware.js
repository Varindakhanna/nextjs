import { NextResponse } from "next/server"

export default function Middleware(request)
{
    return(
        NextResponse.redirect(new URL("/login",request.url))
    )
}

// paths to redirect
export const config={
    matcher:"/about/:path*"
}