import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Typical from 'react-typical';
import  {Container} from 'react-bootstrap'




class AnimationText extends Component {
  render () {
    return (
        <div className="text">
            
            <Typical
                steps={['Javascript', 1000, 'React', 1000, 'React Native', 500, 'Moogodb', 1000]}
                loop={Infinity}
                wrapper="b"
            />
      </div>
    )
  }
}
function Presenter () {
    const FadeUp = batch(Fade(), Move(), Sticky());
  
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator  animation={FadeUp}>
          
                <span style={{ fontSize: "3em" }}>Hi, I'm Minchao Duclos, </span> <br /> 
                <span style={{ fontSize: "3em" }} >a Developer & Designer</span>
            
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={FadeUp}>
            <AnimationText />
          </Animator>
        </ScrollPage>
    </ScrollContainer>
    );
  };


 
 class Main extends Component {
     render() {
         return (
            // <div>
            //     <Container fluid className="container">
            //     <Presenter />
            //     </Container>
            // </div>
            <div>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <Presenter />
            </div>
         )
     }
 }
 

export default Main;