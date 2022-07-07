import React, { Component } from 'react'
import axios from 'axios'

class AlbumForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            title: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
        //sending data = post
        //this.state is sent as a API
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            //this.setState({errorMessage : 'Error retreiving data'})
        })
    }
    render() {
        const {id, title} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
                    </div>

                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AlbumForm;