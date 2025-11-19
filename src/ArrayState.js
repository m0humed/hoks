import { useState } from "react";


function ArrayState(){
    const languageList = [
        "java" , 
        "javaScript",
        "C++",
        "C"
    ]

    let [languages , setLanguages] = useState(languageList)
    let [language  , setLanguage ] = useState("")

    let languagesView = languages.map((lang)=>{
        return(
            <li>
                {lang}
            </li>
        )
    })
    return(
        <>
            <ul>
                {languagesView}
            </ul>
            <br/>
            <input id="newLanguage" 
            value={language}
            onChange={(event)=>{
                setLanguage(
                     event.target.value
                    )
            }}
            />
            <button
                onClick={
                    ()=>{
                        setLanguages([...languages , language])
                    }
                }
            >Add</button>
        </>
    )

}


export default ArrayState;
