import axios from "axios"
import React from "react";
import { deleteFav } from "../../service/taskService";
import { Table, Button } from 'react-bootstrap'

let url = "http://localhost:4000/favorite"

export default function Favorite() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  });

  const Favdata = data.map((ele=>
    {
      return(
        // <table style={{marginLeft:"auto", marginRight:"auto"}}>
        //   <tr>
        //     <td><h3>{ele.id}). {ele.book} {ele.genre}</h3></td>
        //     <td>&nbsp;</td>
        //     <td><Button onClick={()=>deleteFav(ele.id)} variant="danger">delete</Button></td>
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
              <td><Button onClick={()=>deleteFav(ele.id)} variant="danger">delete</Button></td>
            </tr>
          </tbody>
        </Table>
      )
    }
   ))
   return [Favdata]
}
