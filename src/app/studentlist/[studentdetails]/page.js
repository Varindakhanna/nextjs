"use client"


export default function Studentdetails ({params})
{
    console.log(params)
    return(
        <div>
            <h1>Student List {params.studentdetails} </h1>
            
        </div>
    )       
}