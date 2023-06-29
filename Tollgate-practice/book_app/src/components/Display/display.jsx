import axios from "axios"
import React from "react";
import AddFavorite from "../AddFavorite/addFavorite";
import { deleteTask } from "../../service/taskService";
import { Table, Button } from 'react-bootstrap'

const url="http://localhost:4000/books"

export default function Home() {
  const [book, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  });

  const bookdata = book.map((ele=>
    {
      let fav = {
          "book":ele.book,
          "genre":ele.genre,
          "availability":ele.availability,
          "date":ele.date
      }
      return(
        // <table style={{marginLeft:"auto", marginRight:"auto"}}>
        //   <tr>
        //     <td><h3>{ele.id}). {ele.book} {ele.genre}</h3></td>
        //     <td>&nbsp;</td>
        //     {/* <td><button onClick={()=> navigate(`/manage-books/${ele.id}`,{state:{id:ele.id,name:ele.book}})}>Manage</button></td> */}
        //     <td><Button onClick={()=>AddFavorite(fav)} variant="primary">add to favorite</Button></td>
        //     <td><Button onClick={e=>deleteTask(ele.id, e)} variant="danger">delete</Button></td>
        //   </tr>
        // </table>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>genre</th>
              <th>availability</th>
              <th>date</th>
              <th>Favorite</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ele.id}</td>
              <td>{ele.book}</td>
              <td>{ele.genre}</td>
              <td>{ele.availability}</td>
              <td>{ele.date}</td>
              <td><Button onClick={()=>AddFavorite(fav)} variant="primary">add to favorite</Button></td>
              <td><Button onClick={e=>deleteTask(ele.id, e)} variant="danger">delete</Button></td>
            </tr>
          </tbody>
        </Table>
      )
    }
   ))
   return [bookdata]
}
