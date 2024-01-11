'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import {useRouter} from 'next/navigation';


export default function Home() {

  const [name,setName]=useState('varinda');
  const router=useRouter();
 
  const hello=()=>{    
    setName('khanna')
    // alert(name)
  }

  const going =(name)=>{
    router.push(name)
  }
 

  return (
    
    <main className={styles.main}>
      <h1>Welcome {name}</h1>
      {/* <User name='varinda'/> */}

      <button onClick={()=>hello()}>Click me </button>

      <Link href={"/about"}>Go to about page</Link>
      <Link href={"/about/aboutcollege"}>Go to about college page</Link>
      <button onClick={()=>{going('/about') }}>About page</button>
    </main>
  )
}

// const User =(props) => 
// {
//   return(
//     <div>
//       <h2>hello {props.name}</h2>
//     </div>
//   )

// }
