import Link from "next/link";
const About = ()=>{
    return(
        <div>I'M about
            <Link href={"/about/aboutcollege"}>Go to about of college</Link>
        </div>
       

    )
}

export default About;