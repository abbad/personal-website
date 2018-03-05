import React from "react"
import styled, { css }  from "styled-components";


export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `
}
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* The sidebar menu */
const Sidenav = styled.div`
  height: 100%; 
  width: 160px; 
  position: fixed; 
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 20px;
  ${ media.handheld`
    padding-top: 15px;
    font-size: 18px;
  `}
`

/* The navigation menu links */
const SidenavLinks = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  &:hover {
    color: #f1f1f1;
  }
`

/* Style page content */
const Main = styled.div`
  margin-left: 160px; 
  padding: 0px 10px;
`;


export default ({children}) =>(
  <div>
    <Sidenav> 
    <SidenavLinks href="#biography">Biography</SidenavLinks>
      <SidenavLinks href="#projects">Projects</SidenavLinks>
    </Sidenav>
    <Main>{children}</Main>
  </div>
);
