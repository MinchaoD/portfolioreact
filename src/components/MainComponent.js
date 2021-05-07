import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Typical from 'react-typical';
import { Card, CardImg, CardTitle, CardText, CardBody, Button, CardDeck} from 'reactstrap';
import Footer from './FooterComponent';


function Skills() {
    return (
    <div className="container" align="center">
         <span className="title" style={{ fontSize: "3em" }} >About me </span>
         <br/><br /> <br />
         <span style={{ fontSize: "2em" }}>I'm a Front End / Full Stack developer and I love to code. I enjoy the happiness of building some cool and user friendly websites, apps and games. My skills include, but are not limited to: Html, Css, BootStrap, Javascript, ReactJS, Redux, Rest API, React Native, NodeJS, Express, MongoDB </span>
       
    </div>
    )
    
}  

function Projects() {
   

    return (
        <div className="container" align="center">
        <span className="title" style={{ fontSize: "3em" }} >Projects </span>
        <br/><br /> <br />
        <div className ="row justify-content-center">
        <div className = "col ">
            <CardDeck>
                <Card>
                        <CardImg  height="400"  src="/assets/images/project-hawaii.png" alt="image"/>
                        <CardBody>
                        
                            <CardTitle>Hawaii Travel</CardTitle>
                      
                            <CardText>
                                <span> For this project I used mostly Bootstrap and Css to create a Hawaii travel website. I focused on layout design, user interaction and code cleanup. </span>
                            </CardText>
                            <br/>
                            <a target="_blank" href="https://github.com/chaohg/traveltoHawaii" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/traveltoHawaii" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
                <Card>
                        <CardImg  height="400"  src="/assets/images/project-house.png" alt="image"/>
                        <CardBody>
                        
                            <CardTitle>House Search</CardTitle>
                      
                            <CardText>
                                <span>I used ReactJS to link a mockup mini dataset with the website. The same information and layout for each house were rendered with no-repeat code.</span>
                            </CardText>
                            <br/>
                            <a target="_blank" href="https://github.com/chaohg/realestateapp" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/realestateapp" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
                <Card>
                <CardImg  height="400"  src="/assets/images/project-house.png" alt="image"/>
                        <CardBody>
                        
                            <CardTitle>Drum Game</CardTitle>
                      
                            <CardText>
                                <span> This is a little fun project! I used Vanilla JavaScript to create a Drum Playing Game. The drum can be played by both key press and mouse click. </span>
                            </CardText>
                            <br />
                            <a target="_blank" href="https://github.com/chaohg/realestateapp" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/realestateapp" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
                
            </CardDeck>
        </div>
    </div>
   </div>
        
    )
    
}  

class AnimationText extends Component {
    render () {
      return (
          <div className="text">
              
              <Typical
                  steps={['Javascript', 1000, 'ReactJS', 1000, 'React Native', 1000, 'Redux', 1000,'BootStrap', 1000,'Python', 1000,'MongoDb', 1000]}
                  loop={Infinity}
                  wrapper="b"
              />
        </div>
      )
    }
  }


function Presenter () {
    const FadeUp = batch(Move());
  
    return (
      <ScrollContainer >
        <ScrollPage page={0} >
          <Animator  animation={FadeUp}>
            <Zoom>  
            <div align="center" >
                <span style={{ fontSize: "3em" }}>Hi, I'm </span> <span style={{fontSize: "4em", color:"#800000"}}>Minchao Duclos </span> <br /> 
                <span style={{ fontSize: "3em" }}>a Developer & Designer</span>
                <br/><br/><br/>
                <AnimationText />
            </div>
            </Zoom>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
        <Animator  animation={FadeUp}>
            <Skills />
        </Animator>    
        </ScrollPage>
        <ScrollPage page={2}>
        <Animator  animation={FadeUp}>
            <Projects />
        </Animator>
        </ScrollPage>
    </ScrollContainer>
    );
  };


 
 class Main extends Component {
     render() {
         return (
            <div>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Presenter />
                <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
                </div>  
                <Footer />
               
            </div>
         )
     }
 }
 

export default Main;