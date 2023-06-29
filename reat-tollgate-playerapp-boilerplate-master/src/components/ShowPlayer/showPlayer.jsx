import axios from "axios"
import React from "react";
import { Table, Button } from 'react-bootstrap'
import { deleteTask } from "../../services/taskServices";

const url="http://localhost:4000/players"

export default function ShowPlayer() {
    const [player, setPlayer] = React.useState([]);
  
    React.useEffect(() => {
      axios.get(url).then((response) => {
        setPlayer(response.data);
      });
    });
  
    const playerdata = player.map((ele=>
      {
        return(
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Player id</th>
                <th>Player Name</th>
                <th>Player Country</th>
                <th>Total matches played</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.country}</td>
                <td>{ele.matchesPlayed}</td>
                <td><Button onClick={e=>deleteTask(ele.id, e)} variant="danger">delete</Button></td>
              </tr>
            </tbody>
          </Table>
        )
      }
     ))
     return [playerdata]
  }