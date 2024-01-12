import { Roboto } from "next/font/google"
const roboto=Roboto({
    weight:'100',
    display:"swap",
    subsets:['latin']
}
    
)

export default function fontoptimization()
{
    
    return (
        <main>
            <h1 className={roboto.className}>Font optimization </h1>
            <h1>Font optimization </h1>

        </main>
    )
}