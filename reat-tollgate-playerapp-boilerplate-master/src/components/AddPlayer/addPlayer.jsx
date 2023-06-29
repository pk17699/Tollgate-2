import { Component } from "react";
import { Container, Form , Button} from "react-bootstrap";
import { addTask } from "../../services/taskServices";

class AddPlayer extends Component {
    constructor() {
        super()
        //define a state to store task details
        this.state = {
            "name": "",
            "country": "",
            "matchesPlayed": ""
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(e) {
        e.preventDefault();
        if (e.target.name === "name") {
            this.setState({
                name: e.target.value
            })
        }
        else if(e.target.name === "country"){
            this.setState({
                country: e.target.value
            })
        }
        else{
            this.setState({
                matchesPlayed: e.target.value
            })
        }
    }

    submitHandler(e) {
        e.preventDefault();
        // if fields are non empty only then it will run
        if(this.state.name !== '' & this.state.country !== '' & this.state.matchesPlayed !== ''){
            addTask(this.state)
        }
        this.setState({
            name:"",
            country:"",
            matchesPlayed: ""
        })
    }

    render() {
        return (
            <Container>
                <h1>Add Player</h1>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Player name</Form.Label>
                        <Form.Control name="name" type="text" value={this.state.name} placeholder="Enter Player name" onChange={this.onTextChange} autoComplete="off"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Player Country</Form.Label>
                        <Form.Control name="country" value={this.state.country} onChange={this.onTextChange} type="text" placeholder="Enter Player country" autoComplete="off"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Total matches played</Form.Label>
                        <Form.Control name="matchesPlayed" value={this.state.matchesPlayed} onChange={this.onTextChange} type="text" placeholder="Total matches played" autoComplete="off"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default AddPlayer