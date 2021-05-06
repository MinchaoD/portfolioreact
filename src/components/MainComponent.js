import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Typical from 'react-typical';
import { Card, CardImg, CardTitle, CardText, CardBody, Button, CardDeck} from 'reactstrap';


class AnimationText extends Component {
  render () {
    return (
        <div className="text">
            
            <Typical
                steps={['Javascript', 1000, 'React', 1000, 'React Native', 1000, 'Redux', 1000,'BootStrap', 1000,'Python', 1000,'MoogoDb', 1000]}
                loop={Infinity}
                wrapper="b"
            />
      </div>
    )
  }
}

function Skills() {
    return (
    <div>
         <span style={{ fontSize: "3em" }} align="center">I'm a web developer and good at html, css, javascript </span>
    </div>
    )
    
}  

function Projects() {
    return (
        <div className ="row justify-content-center">
        <div className = "col ">
            <CardDeck>
                <Card>
                        <CardImg  height="400"  />
                        <CardBody className="cardinfo" >
                            <CardTitle>Hawaii Travel</CardTitle>
                            <CardText>
                                <span>This project I used mostly bootstrap to create my own designed travel website.</span>
                            </CardText>
                            <Button variant="secondary" size="lg" >Demo</Button>{' '}
                            <Button variant="secondary" size="lg"  style={{float: 'right'}}>Code</Button>{' '}
                        </CardBody>
                </Card>
                <Card>
                        <CardImg  height="400"  />
                        <CardBody className="cardinfo" >
                            <CardTitle>Hawaii Travel</CardTitle>
                            <CardText>
                                <span>This project I used mostly bootstrap to create my own designed travel website.</span>
                            </CardText>
                        </CardBody>
                </Card>
                <Card>
                        <CardImg  height="400"  />
                        <CardBody className="cardinfo" >
                            <CardTitle>Hawaii Travel</CardTitle>
                            <CardText>
                                <span>This project I used mostly bootstrap to create my own designed travel website.</span>
                            </CardText>
                        </CardBody>
                </Card>
                
            </CardDeck>
        </div>
    </div>
    )
    
}  

function Presenter () {
    const FadeUp = batch(Fade(), Move());
  
    return (
      <ScrollContainer >
        <ScrollPage page={0} >
          <Animator  animation={FadeUp}>
              
            <div align="center" >
                <span style={{ fontSize: "3em" }} align="center">I'm </span> <span style={{fontSize: "4em", color:"#800000"}}>Minchao Duclos </span> <br /> 
                <span style={{ fontSize: "3em" }} align="center">a Developer & Designer</span>
               
                <AnimationText />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Skills />
        </ScrollPage>
        <ScrollPage page={2}>
          <Projects />
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
               
            </div>
         )
     }
 }
 

export default Main;