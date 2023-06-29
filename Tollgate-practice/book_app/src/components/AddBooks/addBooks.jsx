import React from "react";
import {  useState } from "react";
import { addTask } from "../../service/taskService";
import Button from "react-bootstrap/esm/Button";

const AddBook = () => {
    const [bookList, SetBook] = useState({
        book: "",
        genre: "",
        availability: "",
        date: ""
    })
    
    const handleOnChange = (e) => {
        let ele = e.target.name;
        SetBook({...bookList, [ele]:e.target.value });
    }

    const handleClick = () => {
        saveBook(bookList);
        SetBook({
            book: "",
            genre: "",
            availability: "",
            date: ""
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
                    Enter book name:
                    <input type="text" name="book" value={bookList.book} onChange={handleOnChange} autoComplete="off"/>
                </p>
                <p>
                    <label for="genre">Genre:</label>
                    <select name="genre" onChange={handleOnChange}>
                        <option value="comedy">comedy</option>
                        <option value="action">action</option>
                        <option value="romance">romance</option>
                        <option value="thriller">thriller</option>
                    </select>
                </p>
                <p>
                    <label for="availability">availability:</label>
                    <select name="availability" onChange={handleOnChange}>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </p>
                <p>
                    <label for="date">Date added:</label>
                    <input type="date" name="date" onChange={handleOnChange}></input>
                </p>
                <Button onClick={handleClick} variant="success">Add</Button>
            </form>
        </div>
    )

}

export default AddBook
