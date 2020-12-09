import React, {Component} from 'react';
import SongCard from './SongCard';
import './Dashboard.css'


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      songList: [
        {
          title: 'Carless Whisper',
          artist: 'Tamia',
          photo: 'https://tinyurl.com/y3389nmk'
        },
        {
          title: 'My Heart Will Go On',
          artist: 'Celine Dion',
          photo: 'https://tinyurl.com/yyqjrho6'
        },
        {
          title: 'If I Were A Rich Man',
          artist: 'Fiddler in the Roof',
          photo: 'https://images-na.ssl-images-amazon.com/images/I/51qHkagNQcL._SX466_.jpg'
        },
      ]
    }
  }

  render(){
    const songs = this.state.songList.map( song => {
      return (
        <SongCard song={song} key={song.title}/>
      )
    })
    return (
      <div>
        <h1>{this.props.name}</h1>
        {songs}
      </div>
    )
  }
}

export default Dashboard;