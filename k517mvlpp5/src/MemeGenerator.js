import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "蒋宗豪",
      bottomText: "你TM就是个大傻逼！",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefaullt();
    let randomNumber = Math.floor(
      Math.Random() * this.state.allMemeImages.length
    );
    const randomPic = this.state.allMemeImages[randomNumber].url;
    this.setState({
      randomImage: randomPic
    });
  }

  componentDidMount() {
    // fetch("http://api.imgflip.com/get_memes")
    //   .then(response => response.json())
    //   .then(response => {
    //     const { memes } = response.data;
    //     console.log(memes[0]);
    //     this.state.setState({
    //       allMemeImages: memes
    //     });
    //   });
  }

  render() {
    return (
      <div className="meme-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="problems?" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
