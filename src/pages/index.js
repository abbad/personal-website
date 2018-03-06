import React from "react"

import Container from "./main";
import Biography from "./biography/index";
import Projects from "./projects/index"


class Index extends React.Component {


  constructor() {
    super()
    this.state = { selected: <Biography/> }
  }

  onClick = (text, e) => {
    switch(text) {
      case 'biography': 
        this.state = { selected: <Biography/> }  
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

