import React from "react"

import Container from "./main";
import Biography from "./biography/index";
import Projects from "./projects/index"


class Index extends React.Component {


  constructor() {
    super()
    this.state = { selected: <Biography/> }
  }

  onClick = (text,e) => {
    if (text === 'biography'){
      this.state = { selected: <Biography/> }
    } else if (text === 'projects') {
      this.state = { selected: <Projects/> }
    }    
  };

  render() {
    return (
      <div>
        <Container children={this.state.selected} onClick={this.onClick} />
      </div>
    );
  }
}

export default Index;

