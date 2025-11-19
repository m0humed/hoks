import { useState } from "react";

export default function IncreasCounter(){
    let [counter , setCounter] = useState(0)

    function handelIncrease(){
        setCounter((c) =>{
            return c+1
        })
        setCounter((c) =>{
            return c+1
        })
        // OR make first is normal function
        // setCounter(counter+1)
        // setCounter((c) =>{
        //     return c+1
        // })
    }

    return(
        <>
            <h3>
                Counter : {counter}
            </h3>
            <button onClick={handelIncrease} >
               +1
            </button>
        
        </>

    )


}