import axios from "axios"

const url="http://localhost:4000/books"
const favUrl = "http://localhost:4000/favorite"

export const addTask=(newTask)=>{
     console.log(newTask)
    return axios.post(`${url}`,newTask)
}

export const addFavorite = (task)=>{
    console.log(task);
    return axios.post(`${favUrl}`, task)
}

// export const getTask=()=>{
//     return axios.get(url)
// }

// export const getFavorite = () =>{
//     return axios.get(favUrl)
// }

export const deleteTask=(id, e)=>{
    return axios.delete(`${url}/${id}`)
}

export const deleteFav = (id) =>{
    //console.log(id);
    return axios.delete(`${favUrl}/${id}`)
}