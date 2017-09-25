import React, { Component } from 'react';
import GifList from './GifList';
import Search from './Search';

export default class GifContainer extends React.Component {
  constructor(){
    super()
    this.url = "http://api.giphy.com/v1/gifs/search?q=YOURQUERYHERE&api_key=dc6zaTOxFJmzC"
    this.getGifs = this.getGifs.bind(this)
    this.state = {
      gifs: []
    }
  }

  getGifs(searchTerm){
    var gifData = this.fetchData(searchTerm).then(function(data){ return data})
    gifData.then( data => {
      this.setState({
         gifs: data
      })
    })
    console.log("gifs: ", this.state.gifs);
  }

  fetchData(searchTerm){
    var url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=UVn6zWnjDCcwcsQsQ6hEIoMvGvYEeC0l&limit=5`
    return fetch(url).then(function(res){
      return res.json().then(function(result){ return result.data})
    })
  }

  render(){
    return(
      <div className='row'>
        <Search callback={this.getGifs} /><br></br><br></br><br></br><br></br><br></br>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  componentDidUpdate(){
    console.log("gif mounted");
  }
}
