import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname.startsWith('/api/user')){
        // const {user} = request.body as any

        // if(!user){
        //     return NextResponse.json({mssg:'Please, entry a valid user'})
        // }
        // if(!user){
        //     return NextResponse.json({mssg:'Envia datos, por favor'})
        // }
    }
}
 
