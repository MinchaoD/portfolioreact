import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Animator, ScrollContainer, ScrollPage, batch, Move} from "react-scroll-motion";
import Typical from 'react-typical';
import { Card, CardImg, CardTitle, CardText, CardBody, Button} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';




function Aboutme() {
    return (
    <div className="container" align="center">
         <span className="title" style={{ fontSize: "3em" }} >About me </span>
         <br/><br /> <br /><br/><br /> <br />
         <span style={{ fontSize: "2em" }}>I'm a Front End / Full Stack developer, and I love to code. I enjoy the happiness of building cool and user friendly websites, apps and games. My skills include: HTML, CSS, BootStrap, Javascript, ReactJS, Redux, Rest API, React Native, NodeJS, Express, Python, MongoDB, MySQL and more. I have a Master's degree, and various certificates from Nucamp. </span>
        
    </div>
    )
    
}  

function Certificate1() {
    return (
        <div className="container" align="center">
        <span className="title" style={{ fontSize: "3em" }} >Certificates </span>
        <br/><br /> <br /><br/><br /><br/>
            <div className ="row justify-content-center">
                <div className = "col-md-4 ">
                    <Card >
                            <CardImg   height="450" src="/assets/images/React Course Certificate.jpg" alt="image"/>
                    </Card>
                </div>
                <div className = "col-md-4 ">
                    <Card >
                            <CardImg   height="450" src="/assets/images/React Native Course Certificate.jpg" alt="image"/>
                    </Card>
                </div>
                <div className = "col-md-4 ">
                    <Card  >
                            <CardImg   height="450" src="/assets/images/Backend Course Certificate.jpg" alt="image"/>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function Certificate2() {
    return (
        <div className="container" align="center">
            <div className ="row justify-content-center">
                <div className = "col-md-4 ">
                    <Card >
                            <CardImg   height="450" src="/assets/images/Front End Web and Mobile Development Certificate.jpg" alt="image"/>
                    </Card>
                </div>
                <div className = "col-md-4">
                    <Card >
                            <CardImg   height="450" src="/assets/images/Full Stack Web and Mobile Development Certificate.jpg" alt="image"/>
                    </Card>
                </div>
            </div>
    </div>
     )
}



function Projects1() {
    return (
        <div className="container" align="center">
            <span className="title" style={{ fontSize: "3em" }} >Projects </span>
            <br/><br /> <br /><br/><br /><br/>
            <div className ="row justify-content-center">
               
                <div className = "col ">
                    <Card className={useStyles().border} style={{ width: '30rem' }} >
                            <CardImg   height="350" src="/assets/images/project-house.png" alt="image"/>
                            <CardBody  className={useStyles().root} >
                            
                                <CardTitle>Real Estate Search App</CardTitle>
                        
                                <CardText>
                                    <span>I used ReactJS to develope this website, fetching from an API and rendering the search results with Google maps, virtual tours and many more detail information for each property.</span>
                                </CardText>
                                <br/>
                                <a target="_blank" href="https://realestate-search.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                            
                                <a target="_blank" href="https://github.com/chaohg/realestateapp" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                            </CardBody>
                    </Card>
                </div>
                <div className = "col ">
                    <Card className={useStyles().border} style={{ width: '30rem' }} >
                            <CardImg  height="350" src="/assets/images/project-hawaii.png" alt="image"/>
                            <CardBody   className={useStyles().root} >
                            
                                <CardTitle>Hawaii Travel</CardTitle>
                        
                                <CardText>
                                    <span> For this project I used mostly Bootstrap and CSS to create a Hawaii travel website, with flip cards feature for the Cuisine section. I focused on layout design and user interaction.</span>
                                </CardText>
                                <br/>
                                <a target="_blank" href="https://hawaii-travel-2021.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                            
                                <a target="_blank" href="https://github.com/chaohg/traveltoHawaii" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                            </CardBody>
                    </Card>
                </div>
                
            </div>
   </div>
 )
}  

function Projects2() {
    return (
        <div className="container" align="center">
        
        <div className ="row justify-content-center">
            <div className = "col ">
                <Card className={useStyles().border} style={{ width: '30rem' }} >
                <CardImg  height="350"  src="/assets/images/project-todolist.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>To Do List Mobile App</CardTitle>
                      
                            <CardText>
                                <span> I built this to-do-list mobile app with Redux in React Native. It can add and delete tasks. The data can be stored using Persist Redux Store. </span>
                            </CardText>
                            <br />
                            <a target="_blank" href="https://expo.io/@minchao/todolist" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/todolist" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
            </div>
            <div className = "col ">
                <Card className={useStyles().border} style={{ width: '30rem' }} >
                <CardImg  height="350"  src="/assets/images/project-drum.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>Drum Game</CardTitle>
                      
                            <CardText>
                                <span> This is a fun little project! I used Vanilla JavaScript to create a Drum Playing Game. The drum can be played by both key press and mouse click. </span>
                            </CardText>
                            <br />
                            <a target="_blank" href="https://drum-game-2021.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/drum" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
            </div>
          </div>
    </div>
 )
}


function Projects3() {
    return (
        <div className="container" align="center">
        <div className ="row justify-content-center">
            <div className = "col ">
                <Card className={useStyles().border} style={{ width: '30rem' }} >
                <CardImg  height="350"  src="/assets/images/project-nucamp.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>Nucamp Project</CardTitle>
                      
                            <CardText>
                                <span> This project was based on ReactJS and Redux. The github was set up in branches to record every step of the development.  </span>
                            </CardText>
                            <br />
                            <a target="_blank" href="https://nucamp-website.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/nucampsite_react/tree/master" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
            </div>
            <div className = "col ">
                <Card className={useStyles().border} style={{ width: '30rem' }} >
                <CardImg  height="350"  src="/assets/images/project-portfolio1.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>Portfolio Website</CardTitle>
                      
                            <CardText>
                                <span> This is a portfolio I made with React mostly. It was fun to explore the ways of adding the animations for this little project by using CSS. </span>
                            </CardText>
                            <br />
                            <a target="_blank" href="https://minchao-duclos.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/portfolio" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
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

  
function Contactme() {
    return(
        <div className="container" align="center">
            <span className="title" style={{ fontSize: "3em" }} >Contact Me </span>
            <br/><br /> <br /><br/><br /> <br />
           
                <div className="row" >
                    <div className="col" align="center">
                        <a role="button" className="btn" href="tel:+12063838906"><i className="fa fa-phone-square extraIcon" ></i> </a>
                    </div>
                    <div className="col" align="center">
                    <a role="button" className="btn" href="mailto: chaohg@hotmail.com"><i className="fa fa-envelope-square extraIcon"></i> </a>
                    </div>
                    <div className="col" align="center">
                    <a role="button" className="btn" href="https://github.com/chaohg"> <i className="fa fa-github extraIcon"></i></a>
                    </div>
                </div>
                <div className="row" >
                    <div className="col">
                        <a role="button" className="btn extraBtn"  href="tel:+12063838906"> 1-206-383-8906 </a><br />
                    </div>
                    <div className="col" align="center">
                        <a role="button" className="btn extraBtn"  href="mailto: chaohg@hotmail.com">chaohg@hotmail.com </a>
                    </div>
                    <div className="col" align="center">
                        <a role="button" className="btn extraBtn" href="https://github.com/chaohg">https://github.com/chaohg </a>
                    </div>
                </div>
                
       
            
        </div>
    )
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
                <Aboutme />
            </Animator>    
        </ScrollPage>
        <Certificate1/>
        <br/>
        <Certificate2/>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <Projects1/>
        <br/> <br/>
        <Projects2/>
        <br/> <br/>
        <Projects3/>
        <br/> <br/>
        <ScrollPage page={7}>
            <Animator  animation={FadeUp}>
                <br /> <br /> <br /> <br /> <br />
                <Contactme />
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
            </div>
         )
     }
 }
 
 const useStyles = makeStyles({  // this is to allow styling for image in card 
    root: {
      borderTop: '3px solid',
      marginTop: 20
    },
    border: {
        minWidth: 275,
        border: '3px solid black',
        borderRadius: '10px'
    }
})

export default Main;
