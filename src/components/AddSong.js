import React, {Component} from 'react';
import Button from '../reusableComponents/Button'

class AddSong extends Component {
  constructor(props){
    super(props);
    this.state = {
      songTitle: '',
      artist: '',
      photo: '',
    }
    this.handleAddSong = this.handleAddSong.bind(this)
  }

  handleChangeTitle(e){
    this.setState({
      songTitle: e.target.value
    })
  }

  handleChangeArtist(e){
    this.setState({
      artist: e.target.value
    })
  }

  handleAlbumImage(e){
    this.setState({
      photo: e.target.value
    })
  }

  handleAddSong(){
    const body = {
      title: this.state.songTitle,
      artist: this.state.artist,
      photo: this.state.photo,
    }
    this.props.addSongFn(body)
  }

  otherFunction(){
    //does nothing. Just an example
  }

  render(){
    return(
      <div>
        <h1>add song</h1>
        <input placeholder="song title" onChange={(e) => this.handleChangeTitle(e)} />
        <input placeholder="song artist" onChange={(e) => this.handleChangeArtist(e)} />
        <input placeholder="album image" onChange={(e) => this.handleAlbumImage(e)} />
        {/* <button onClick={() => this.handleAddSong()}>add song</button> */}
        <Button callbackFunction={this.handleAddSong} label="add song"  />
        <Button callbackFunction={this.otherFunction} label="delete app" important={true} />
      </div>
    )
  }
}

export default AddSong;