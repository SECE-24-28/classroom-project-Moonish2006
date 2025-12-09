import { useState } from "react"

export default function Counter(){
    const[count,setcount]=useState(0);

    return(
        <>
        <p>The value is:{count}</p>
        </>
    )
}
