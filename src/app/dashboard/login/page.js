"use client"

import { signIn, signOut } from "next-auth/react";

export default function Login(){
    return (
        <>
            <button onClick={() => signIn('google')}>Sign in with Google</button>
            <button onClick={() => signOut()}>Sign Out</button>
        </>
    )
}
