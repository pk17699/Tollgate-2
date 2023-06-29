import axios from "axios"
import React from "react";
import { deleteTask } from "../../service/taskService";
import { Button, Card} from 'react-bootstrap'

const url="http://localhost:4000/students"

export default function Home() {
  const [student, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  });

  const studentdata = student.map((ele=>
    {
      return(
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            Id : {ele.id}
            <br />
            Name : {ele.name}
            <br />
            Dob : {ele.dob}
            <br />
            Gender : {ele.gender}
            <br />
            Address : {ele.address}
            <br />
            Mobile : {ele.mobile}
            <br />
            <Button variant="danger" onClick={(e)=>deleteTask(ele.id, e)}>delete</Button>
          </Card.Body>
        </Card>
      )
    }
   ))
   return [studentdata]
}
