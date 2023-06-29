import axios from "axios"

const url="http://localhost:4000/students"

export const addTask=(newTask)=>{
     console.log(newTask)
    return axios.post(`${url}`,newTask)
}

export const deleteTask=(id, e)=>{
    return axios.delete(`${url}/${id}`)
}
