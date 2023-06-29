import React from "react";
import {  useState } from "react";
import { addTask } from "../../service/taskService";
import Button from "react-bootstrap/esm/Button";

const AddStudent = () => {
    const [student, SetStudent] = useState({
        name: "",
        dob: "",
        gender: "",
        address: "",
        mobile: ""
    })
    
    const handleOnChange = (e) => {
        let ele = e.target.name;
        SetStudent({...student, [ele]:e.target.value });
    }

    const handleClick = () => {
        saveBook(student);
        SetStudent({
            name: "",
            dob: "",
            gender: "",
            address: "",
            mobile: ""
        })

    }
    const saveBook = (newTask) => {
        addTask(newTask).then((data)=>{
            console.log("sucess");
        })
        .catch("error")
    }
    
    return (
        <div style={{textAlign:'center', marginTop:'1em'}}>
            <form>
                <p>
                    student name:
                    <input type="text" name="name" value={student.name} onChange={handleOnChange} autoComplete="off"/>
                </p>
                <p>
                    <label for="dob">Student DOB:</label>
                    <input type="date" name="dob" onChange={handleOnChange}></input>
                </p>
                <p>
                    Gender : 
                    <input type="radio" name="gender" value="male" onChange={handleOnChange}/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" value="female" onChange={handleOnChange}/>
                    <label for="female">Female</label><br></br>
                </p>
                <p>
                    Adress:
                    <input type="text" name="address" onChange={handleOnChange}/>
                </p>
                <p>
                    contact:
                    <input type="number" name="mobile" onChange={handleOnChange}/>
                </p>
                <Button onClick={handleClick} variant="success">Add</Button>
            </form>
        </div>
    )

}

export default AddStudent
