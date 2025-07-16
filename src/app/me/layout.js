import "@/app/globals.css";

export const metadata = {
    title: "Joe Paton Resume",
    description: "Joe Paton Resume 2025"
}

export default function Layout({children}){
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}
