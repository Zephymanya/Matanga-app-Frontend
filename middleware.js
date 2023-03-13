import { NextResponse } from "next/server"
import { rooter } from "./datas/web"


export function middleware(req)
{
    const token = req.cookies.get("token")
    const url   = req.url
    

    if(!token && url.includes("/defunt"))
    {
        return NextResponse.redirect(new URL(`${process.env.BASE_PATH}${rooter.login.link}`))
    }

    if(token && url.includes("/connexion") || token && url.includes("/inscription"))
    {
        return NextResponse.redirect(new URL(`${process.env.BASE_PATH}${rooter.defunt.link}`))
    }

    return NextResponse.next()

}

export const config = 
{
    matcher: ["/defunt", "/defunt/:path*", "/connexion", "/inscription"]
}