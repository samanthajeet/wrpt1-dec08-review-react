import React, {Component} from 'react';
import SongCard from './SongCard';
import AddSong from './AddSong';
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
        {
          title: 'Building A Mystery',
          artist: 'Sarah McLachlan',
          photo: 'https://i.scdn.co/image/89d9c22e066a804d68483c4a21e6ae4ff130652d'
        },
        {
          title: 'Sweet Dreams',
          artist: 'La Bouche',
          photo: 'https://images-na.ssl-images-amazon.com/images/I/71jRc2LXxIL._SL1500_.jpg'
        },
        {
          title: 'Hurt',
          artist: 'Johnny Cash',
          photo: 'https://cdn.smehost.net/johnnycashonlinecom-uslegacyprod/wp-content/uploads/2018/10/Hurt.jpg'
        },
      ]
    }
    this.addSong = this.addSong.bind(this)
  }

  addSong(song){
    this.setState({
      songList: [...this.state.songList, song]
    })
  }

  render(){
    const songs = this.state.songList.map( song => {
      return (
        <SongCard song={song} key={song.title}/>
      )
    })
    return (
      <div>
        <AddSong addSongFn={this.addSong} />
        <div className="dashboard">
          {songs}
        </div>
      </div>
    )
  }
}

export default Dashboard;