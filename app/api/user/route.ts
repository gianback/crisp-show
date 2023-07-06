import { prisma } from '@/config/prisma'
import { NextResponse as res } from 'next/server'
import {hash} from "bcrypt"


export async function POST(request: Request) {
    const {user} = await request.json()
    const { email, firstName, lastName, password } = user

    const hashedPassword = await hash(password,10);

    const newUser = await prisma.user.create({
        data: {
            email,
            firstName,
            lastName,
            password:hashedPassword

        }
    })
    return res.json({userCreated:newUser})
}

export async function GET(request:Request){

    const users = await prisma.user.findMany()

    return res.json({users})

}