"use client"
import Link from "next/link"

export default function StudentList ()
{
    return(
        <div>
            <h1>Student List</h1>
            <Link href="/studentlist/varinda">Varinda</Link>
            <Link href="/studentlist/kashish">Kashish</Link>
            <Link href="/studentlist/priya">Priya</Link>
           
        </div>
    )
}