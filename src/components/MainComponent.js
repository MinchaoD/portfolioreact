import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Animator, ScrollContainer, ScrollPage, batch, Move} from "react-scroll-motion";
import Typical from 'react-typical';
import { Card, CardImg, CardTitle, CardText, CardBody, Button} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';


function Aboutme() {
    return (
    <div className="container gapaboutme" align="center">
        <div className='pb-5 mb-5 '>
           <span className="title" style={{ fontSize: "2.5em" }} >About me </span>
        </div>
         <span  style={{ fontSize: "1.5em" }}>I'm a Front End / Full Stack developer, and I love to code. I enjoy the happiness of building cool and user friendly websites, apps and games. My skills include: HTML, CSS, BootStrap, Javascript, ReactJS, Redux, Rest API, React Native, NodeJS, Express, Python, MongoDB, MySQL and more. I have a Master's degree, and Full Stack Web and Mobile Development certificate of Honor from Nucamp. </span>
        
    </div>
    )
    
}  

function Certificate() {
    return (
        <div className="container maingap" align="center">
        <div className='pb-5 mb-5 '>
            <span className="title" style={{ fontSize: "2.5em" }} >Certificates </span>
        </div>
            <div className ="row justify-content-center ">
                <div className = "col-md-3 m-5">
                    <Card >
                            <CardImg   width='100%' src="/assets/images/React Course Certificate.jpg" alt="image"/>
                    </Card>
                </div>
                
                <div className = "col-md-3 m-5">
                    <Card >
                            <CardImg   width='100%' src="/assets/images/React Native Course Certificate.jpg" alt="image"/>
                    </Card>
                </div>
                <div className = "col-md-3 m-5">
                    <Card  >
                            <CardImg   width='100%' src="/assets/images/Backend Course Certificate.jpg" alt="image"/>
                    </Card>
                </div>
            </div>
            <div className ="row justify-content-center">
                <div className = "col-md-4 m-5">
                    <Card >
                            <CardImg  width='100%' src="/assets/images/Front End Web and Mobile Development Certificate.jpg" alt="image"/>
                    </Card>
                </div>
                <div className = "col-md-4 m-5">
                    <Card >
                            <CardImg  width='100%' src="/assets/images/Full Stack Web and Mobile Development Certificate with Honor.jpg" alt="image"/>
                    </Card>
                </div>
            </div>
        </div>
    )
}




function Projects() {
    return (
        <div className="container maingap " align="center">
            <div className='pb-5 mb-5 '>
                <span className="title" style={{ fontSize: "2.5em" }} >Projects </span>
            </div>
            <div className ="row justify-content-center">
               
                <div className = "col m-2">
                    <Card className={useStyles().border} style={{ width: '30' }}  >
                            <CardImg   height='400vw' src="/assets/images/project-house.png" alt="image"/>
                            <CardBody  className={useStyles().root} >
                            
                                <CardTitle>Real Estate Search App</CardTitle>
                        
                                <CardText>
                                    <span>I used ReactJS to develope this website, fetching from an API and rendering the search results with Google maps, virtual tours and many more detail information for each property.</span>
                                </CardText>
                                
                                <a target="_blank" href="https://realestate-search.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                                <a target="_blank" href="https://www.loom.com/share/62f733b1a9ad4d3aabe0e3625b3022e2" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'center'}}>Video</Button></a>
                                <a target="_blank" href="https://github.com/chaohg/realestateapp" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                            </CardBody>
                    </Card>
                </div>
                <div className = "col m-2">
                    <Card className={useStyles().border} style={{ width: '30' }} >
                            <CardImg  height='400vw' src="/assets/images/project-hawaii.png" alt="image"/>
                            <CardBody   className={useStyles().root} >
                            
                                <CardTitle>Hawaii Travel</CardTitle>
                        
                                <CardText>
                                    <span> For this project I used mostly Bootstrap and CSS to create a Hawaii travel website, with flip cards feature for the Cuisine section. I focused on layout design and user interaction.</span>
                                </CardText>
                             
                                <a target="_blank" href="https://hawaii-travel-2021.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                            
                                <a target="_blank" href="https://github.com/chaohg/traveltoHawaii" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                            </CardBody>
                    </Card>
                </div>
                
            </div>
            <div className ="row justify-content-center">
            <div className = "col m-2">
                <Card className={useStyles().border} style={{ width: '20' }} >
                <CardImg height='400vw' src="/assets/images/project-todolist.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>To Do List Mobile App</CardTitle>
                      
                            <CardText>
                                <span> I built this to-do-list mobile app with Redux in React Native. It can add and delete tasks. The data can be stored using Persist Redux Store. </span>
                            </CardText>
                    
                            <a target="_blank" href="https://expo.io/@minchao/todolist" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/todolist" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
            </div>
            <div className = "col m-2">
                <Card className={useStyles().border} style={{ width: '30' }} >
                <CardImg  height='400vw'  src="/assets/images/project-drum.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>Drum Game</CardTitle>
                      
                            <CardText>
                                <span> This is a fun little project! I used Vanilla JavaScript to create a Drum Playing Game. The drum can be played by both key press and mouse click. </span>
                            </CardText>
                            <a target="_blank" href="https://drum-game-2021.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/drum" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
            </div>
          </div>
          <div className ="row justify-content-center">
            <div className = "col m-2">
                <Card className={useStyles().border} style={{ width: '30' }} >
                <CardImg  height='400vw'  src="/assets/images/project-nucamp.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>Nucamp Project</CardTitle>
                      
                            <CardText>
                                <span> This project was developed with ReactJS as well as Redux. The github was set up in branches to record every step of the development.  </span>
                            </CardText>
                        
                            <a target="_blank" href="https://nucamp-website.netlify.app" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float:'left'}}>Demo</Button></a>
                           
                            <a target="_blank" href="https://github.com/chaohg/nucampsite_react/tree/master" style={{textDecoration : "none"}}> <Button className="btn-project" style={{float: 'right'}}>Code</Button></a>
                        </CardBody>
                </Card>
            </div>
            
            <div className = "col m-2">
                <Card className={useStyles().border} style={{ width: '30' }} >
                <CardImg height='400vw'  src="/assets/images/project-portfolio1.png" alt="image"/>
                        <CardBody  className={useStyles().root} >
                        
                            <CardTitle>Portfolio Website</CardTitle>
                      
                            <CardText>
                                <span> This is a portfolio I made with React mostly. It was fun to explore the ways of adding the animations for this little project by using CSS. </span>
                            </CardText>
                        
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
        <div className="container maingap" align="center">
                <div className='pb-5 mb-5 '>
                    <span className="title " style={{ fontSize: "2.5em" }} >Contact Me </span>
                </div>
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
                    <div className="col" align='center'>
                        <a role="button" className="btn extraBtn d-none d-md-block"  href="tel:+12063838906"> 1-206-383-8906 </a>
                        {/* d-none d-md-block is to hide this text when the screen is xs or sm, after md the text will be shown */}
                    </div>
                    <div className="col" align="center">
                        <a role="button" className="btn extraBtn d-none d-md-block"  href="mailto: chaohg@hotmail.com">chaohg@hotmail.com </a>
                    </div>
                    <div className="col" align="center">
                        <a role="button" className="btn extraBtn d-none d-md-block" href="https://github.com/chaohg">https://github.com/chaohg </a>
                    </div>
                </div>
                
       
            
        </div>
    )
}


function Presenter () {
   
    return (
      <div>
        
            <Zoom>  
            <div align="center" >
                <div className='mb-5 pb-5'>
                    <span style={{ fontSize: "2.5rem" }}>Hi, I'm </span> <span style={{fontSize: "3rem", color:"#800000"}}>Minchao Duclos</span> <br/>
                    <span style={{ fontSize: "2.5rem" }}>a Developer & Designer</span>
                </div>
                <AnimationText />
            </div>
            </Zoom>
        <Aboutme />
        <Projects/>
        <Certificate />        
        <Contactme />
     </div>
    );
  };


//   function Presenter () {
//     const FadeUp = batch(Move());
  
//     return (
//       <ScrollContainer >
//         <ScrollPage page={0} >
//           <Animator  animation={FadeUp}>
//             <Zoom>  
//             <div align="center" >
//                 <span style={{ fontSize: "3em" }}>Hi, I'm </span> <span style={{fontSize: "4em", color:"#800000"}}>Minchao Duclos </span>
//                 <span style={{ fontSize: "3em" }}>a Developer & Designer</span>
//            
//                 <AnimationText />
//             </div>
//             </Zoom>
//           </Animator>
//         </ScrollPage>
//         <ScrollPage page={1}>
//             <Animator  animation={FadeUp}>
//                 <Aboutme />
//             </Animator>    
//         </ScrollPage>
//         <Certificate1/>
//         <Certificate2/>
//         <Projects1/>
//         <Projects2/>
//         <Projects3/>
//         <ScrollPage page={7}>
//             <Animator  animation={FadeUp}>
//             <Contactme />
//             </Animator>
//         </ScrollPage>
//     </ScrollContainer>
//     );
//   };

 
 class Main extends Component {
     render() {
         return (
            <div >
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className='presenter'>
                <Presenter />
                </div>
                <div className="arrow">
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
        border: '2px solid gold'
    }
})

export default Main;
