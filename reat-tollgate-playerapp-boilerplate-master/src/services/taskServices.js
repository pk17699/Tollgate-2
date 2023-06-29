import axios from "axios"

const url="http://localhost:4000/players"

export const addTask=(newTask)=>{
    return axios.post(`${url}`,newTask)
}

export const deleteTask=(id, e)=>{
    return axios.delete(`${url}/${id}`)
}