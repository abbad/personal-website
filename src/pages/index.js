import React from "react"

import Container from "./main";
import AboutMe from "./about_me/index";
import Projects from "./projects/index"
import image from "./ahmad-picture.jpg";

import styled, { css }  from "styled-components";

class Index extends React.Component {
  /* Style page content */
  static Title = styled.h1`
    margin-left: 10px;
    padding: 0px 10px;
    width: 200px;
    margin: 10px;
    float: left;
    margin-top: 100px;
    font-family: century-gothic;
  `;

  static subTitle = styled.p`
    font-size: 13px;
    padding-top: 0px;
    margin-top: 0px;
    font-family: Helvetica, sans-serif;
  `;

  static Image = styled.img`
    width: 200px;
    margin: 10px;
    float: left;
  `;


  static all = styled.div`
    font-family: Helvetica, sans-serif;
  `;

  static Hero = styled.div`
    overflow: auto;
    border-bottom-style: solid;
    border-bottom-color: gray;
    border-bottom-width: 1px;
  `;

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

  renderImage = () => {
    // Import result is the URL of your image
    return <this.constructor.Image src={image} alt="Logo" />;
  }

  renderTitle = () => {
    return (<this.constructor.Title> 
      <span> Ahmad Abbad </span>
      <this.constructor.subTitle> 
        Software Engineer and a Musician 
      </this.constructor.subTitle>
    </this.constructor.Title>)
  };

  render() {
    return (
      <all>
        <this.constructor.Hero>
          {this.renderImage()}
          {this.renderTitle()}
        </this.constructor.Hero>
        <Container children={this.state.selected} onClick={this.onClick} />
      </all>
    );
  }
}

export default Index;

