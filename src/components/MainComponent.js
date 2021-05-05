import React, { Component } from 'react';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Typical from 'react-typical'

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
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
  
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "3em" }}>I'm Minchao Duclos </span> <br /> 
            <span style={{ fontSize: "3em" }} >I'm a Developer & Designer</span>
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
            <div style={{ 
                backgroundImage: "url(/images/backgroundimage.jpg)" 
              }}>
                <Presenter />
            </div>
         )
     }
 }
 

export default Main;