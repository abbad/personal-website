import React from "react"

import Container from "./main";
import AboutMe from "./about_me/index";
import Projects from "./projects/index"


class Index extends React.Component {


  constructor() {
    super()
    this.state = { selected: <AboutMe/> }
  }

  onClick = (text, e) => {
    switch(text) {
      case 'aboutMe': 
        this.state = { selected: <AboutMe/> }  
        break
      case 'projects': 
        this.state = { selected: <Projects/> }  
        break
    }
  };

  render() {
    return (
      <div>
        <h1 > Ahmad Abbad </h1>  
        <Container children={this.state.selected} onClick={this.onClick} />
      </div>
    );
  }
}

export default Index;

