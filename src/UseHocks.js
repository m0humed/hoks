import { useState } from "react";

export default function ButtonChangeName(){
    let [name , setName ] = useState("Ahmed") ; 

    function ChangeName (){
        if(name ==="Ahmed"){
            setName("Mohamed")
        }else{
            setName("Ahmed")
        }
    }
    return(
        <div>
        <button onClick={ChangeName} >
            Change
        </button>
        <hr/>
        <h1>{name}</h1>
        </div>

    )

}