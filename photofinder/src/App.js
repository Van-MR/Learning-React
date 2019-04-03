import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/searchBar'
import PhotoList from './components/photoList'

const API_KEY = '55f3514ddf33fdacaa7e6e46052bf705d2be452fa146005713f8d96e6cfffb85'

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      photos: [],
      term: ''
    }
  }

  componentDidMount() {
      var kw = 'javascript'
      this.getPhotos(kw)
      console.log(this.state.photos);
     //this.state.term = '' ? this.getPhotos(kw)  : this.getPhotos(this.state.term)
  }

  getPhotos(keyword) {
     fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            photos: data.results
          })
        })
        .catch(err => {
          console.log(err);
        })

}

handleChange = e => {
     this.setState({
       [e.target.name] : e.target.value
     })
}  

handleSearch = e => {
  e.preventDefault()
  this.getPhotos(this.state.term)
}

  render() {
    return(
      <div>
        <Search handleChange={this.handleChange} handleSearch={this.handleSearch} value={this.state.term} />
        <PhotoList  photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
