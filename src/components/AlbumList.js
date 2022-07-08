import React, { Component } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import "./AlbumList.css";

export class AlbumList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: [],
            isLoading: true,
            error: ''
        }
    }
  async componentDidMount() {
       await axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                //console.log(response)
                this.setState({ albums: response.data, isLoading: false });
            })
            .catch(error => {
                //console.log(error)
                this.setState({ errorMessage: 'Error retrieving data' });
            })
    };
    deleteHandler = (id, e) => {
        e.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => {
                //console.log(response.data);
                const albums = this.state.albums.filter(album => album.id !== id);
                this.setState({ albums });
            })
    }
    render() {
        const { albums, isLoading, errorMessage } = this.state;
        return (
            <div>
                {isLoading ?
                    (
                        <div className="loader">
                            <ClipLoader color={"#245CE7"} size={150} />
                        </div>
                    ) : (
                        <div className='album__list'>
                            <div className='album__logo'><img src="logo4.png" alt='logo'></img></div>
                            <table className='album__table'>
                                <thead>
                                    <tr className='table__top'>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Thumbnail</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        albums.map(album => <tr key={(album.id)}>
                                            <td>{album.id}</td>
                                            <td>{album.title}</td>
                                            <td><img src={album.thumbnailUrl} alt={album.title} title={album.title}></img></td>
                                            <td><button className="button__delete" onClick={ (e) => this.deleteHandler(album.id, e)}>Delete</button></td>
                                        </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>

                    )}
                {errorMessage ? (
                    <div>{errorMessage}</div>
                ) : null
                }
            </div>
        )
    }
}

export default AlbumList;