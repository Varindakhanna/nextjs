import Profile from '../../../public/vercel.svg'
import Image from 'next/image'

export default function IO()
{
   // console.log(Profile)
    return(
        <main>
            <h1>Image optimization</h1>
            
        <Image
        src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={200}
        height={200}
        />

        {/* optimized next js component */}
        <Image
        src={Profile}
        />

        {/* not optimized */}
        <img
        src={Profile.src}
        
        />
        </main>

        

    )
}