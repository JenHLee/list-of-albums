import React, { Component } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

export class AlbumList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: [],
            isLoading: true,
            error: ''
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                //console.log(response)
                this.setState({ albums: response.data, isLoading: false });
            })
            .catch(error => {
                //console.log(error)
                this.setState({ errorMessage: 'Error retreiving data' });
            })
    };

    render() {
        const { albums, isLoading, errorMessage } = this.state
        return (
            <div>
                {isLoading ?
                    (
                        <div className="loader">
                            <ClipLoader color={"#59bfff"} size={150} />
                        </div>
                    ) : (
                        <div className='album__list'>List of albums
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Thumbnail</th>
                                <th>Delete</th>
                            </tr>
                            {
                                albums.map(album => <table key={(album.id)}>
                                    <tr>
                                        <th>{album.id}</th>
                                        <th>{album.title}</th>
                                        <th><img src={album.thumbnailUrl} alt={album.title} title={album.title}></img></th>
                                        <th><button>Delete</button></th>

                                    </tr>
                                </table>)
                            }
                        </div>
                    )}
                {
                    <div>{errorMessage}</div>
                }
            </div>
        )
    }
}
export default AlbumList;