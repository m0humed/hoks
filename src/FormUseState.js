import { useState } from "react";

export default function FormS(){
    const [formInputs , SetFormInputs] = useState({name : "" , email:"" , age:"" , message:"" ,
                                                 gender:true
    });
    return(
        <form  onSubmit={(event)=>
        {
            event.preventDefault();
        }
        }>

            <label>name</label>
            <input value={formInputs.name} 
            
            onChange={
                (event)=>{
                    SetFormInputs(
                       {...formInputs, name:event.target.value} 
                    );
                }
            }

            />
            <br/>
            <label>email</label>
            <input onChange={
                (event)=>{
                    SetFormInputs(
                       {...formInputs, email:event.target.value} 
                    )
                }
            }
             value={formInputs.email} 
             />
            <br/>
            <label>age</label>
            <input onChange={
                (event)=>{
                    SetFormInputs(
                       {...formInputs, age:event.target.value} 
                    )
                }
            }
             value={formInputs.age}
            />
            <br/>
            <br/>
            <label >Message</label>
            <textarea placeholder="tell about your self"
                value={formInputs.message}
                onChange={(event)=>{
                    SetFormInputs({...formInputs , message : event.target.value})
                }}
            >
                {formInputs.message}
            </textarea>
            <br/>
            <label>Male</label>
            <input
            type="checkbox"
            checked={formInputs.gender}
            onChange={(event) => {
                SetFormInputs({
                ...formInputs,
                gender: event.target.checked
                });
            }}
            />

         
            <br/>




            <button>
                submit
            </button>

        </form>
    )



}













