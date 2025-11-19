import { useState } from "react";


let Idx = 7 ;
function ArrayState(){
    const languageList = [
        {id:1 , name:"java" }, 
        {id:2 , name:"c" }, 
        {id:3 , name:"c++" }, 
        {id:4 , name:"c#" }, 
        {id:5 , name:"go" }, 
        {id:6 , name:"php" } 
    ]

    let [languages , setLanguages] = useState(languageList)
    let [language  , setLanguage ] = useState("")

    function handleDelete(id){
        let newList = [...languages]
        newList = newList.filter((lang)=>
        {
            return lang.id !== id 
        })
        setLanguages(newList);
    }

    function handleEdit(id){
        let newList = [...languages]
        newList = newList.map((lang)=>
        {
            return lang.id === id ? {id:lang.id , name:lang.name + "."} : lang 
        })
        setLanguages(newList);
    }

    let languagesView = languages.map((lang)=>{
        return(
            <li key={lang.id}>
                {lang.name} 
                <button onClick={()=>{handleDelete(lang.id)}}>Delete</button>
                <button onClick={()=>{handleEdit(lang.id)}}>Edit</button>
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
                        setLanguages([...languages , { id:Idx++,name:language }])
                    }
                }
            >Add</button>
        </>
    )

}


export default ArrayState;
