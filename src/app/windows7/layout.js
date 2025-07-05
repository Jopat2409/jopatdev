import { cookies } from "next/headers"

export default function Layout({children}){

    let loggedIn = false;
    const cookieStore = cookies().then((r) => {
        loggedIn = r.get("loggedIn", false)
    })

    return (
        <div>
            <h1>{loggedIn ? "Hi" : "Bye"}</h1>
            {children}
        </div>
    )
}
