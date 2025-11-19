import { useState } from "react";

export default function InputState(){
    let [title , setTitle] = useState("")
    function updatestate(event){
        setTitle(event.target.value)
    }

    return(
        <div>
            <input value={title} onChange={updatestate}/>
            <h1>
                {
                    title
                }
            </h1>

        </div>
    )

}
