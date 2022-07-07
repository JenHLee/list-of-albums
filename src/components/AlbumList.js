import React, { Component } from 'react'
import axios from 'axios';
//import { ClipLoader } from 'react-spinners';

export class AlbumList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: [],
            error: ''
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                console.log(response)
                this.setState({ albums: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: 'Error retreiving data' })
            })
    };

    render() {
        const { albums, errorMessage } = this.state
        return (
            <div>
                List of albums
                {
                    albums.map(album => <div key={(album.id)}>{album.title}</div>)
                }
                {
                    <div>{errorMessage}</div>
                }
            </div>
        )
    }
}
export default AlbumList;