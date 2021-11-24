import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Typical from 'react-typical';
import { Card, CardImg, CardTitle, CardText, CardBody, Button} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';



function Aboutme() {
    return (
    <div className="container gapaboutme" >
        <div className='pb-5 mb-5 ' align='center'>
            <ScrollAnimation animateIn='fadeIn'>
            <span className="title" style={{ fontSize: "2.5em"}} >About me </span>
            </ScrollAnimation>
        </div>
        <div align='left' className='m-3'>
            <ScrollAnimation animateIn="fadeIn">
                <span  style={{ fontSize: "1.5em", color:'#585858' }}>I'm a Front End / Full Stack developer, and I love to code. I enjoy the happiness of building cool and user friendly websites, apps and games. My skills include: </span> <span  style={{ fontSize: "1.5em", color:'black' }}>HTML, CSS, BootStrap, JavaScript, TypeScript, ReactJS, Redux, Rest API, React Native, NodeJS, Express, Python, MongoDB, MySQL and more.</span><span  style={{ fontSize: "1.5em", color:'#585858' }}> I have a Master's degree, and Full Stack Web and Mobile Development certificate of Honor from Nucamp. </span>
            </ScrollAnimation >
        </div>
    </div>
    )
    
}  

function Certificate() {
    return (
      <div className="container" align="center">
        <div className='pb-5 mb-5 '>
            <ScrollAnimation animateIn='fadeIn'>
                <span className="title" style={{ fontSize: "2.5em" }} >Certificates </span>
            </ScrollAnimation>
        </div>
            <div className ="row justify-content-center ">
                <div className = "col-md-3 m-4">
                    <ScrollAnimation animateIn='fadeIn'>
                        <Card >
                                <CardImg   width='100%' src="/assets/images/React Course Certificate.jpg" alt="image"/>
                        </Card>
                    </ScrollAnimation>
                </div>
                <div className = "col-md-3 m-4">
                    <ScrollAnimation animateIn='fadeIn'>
                        <Card >
                                <CardImg   width='100%' src="/assets/images/React Native Course Certificate.jpg" alt="image"/>
                        </Card>
                    </ScrollAnimation>
                </div>
                <div className = "col-md-3 m-4">
                    <ScrollAnimation animateIn='fadeIn'>
                        <Card  >
                                <CardImg   width='100%' src="/assets/images/Backend Course Certificate.jpg" alt="image"/>
                        </Card>
                    </ScrollAnimation>
                </div>
            
            </div>
            <div className ="row justify-content-center">
                <div className = "col-md-4 m-4">
                    <ScrollAnimation animateIn='fadeIn'>
                        <Card >
                                <CardImg  width='100%' src="/assets/images/Front End Web and Mobile Development Certificate.jpg" alt="image"/>
                        </Card>
                    </ScrollAnimation>
                </div>
                <div className = "col-md-4 m-4">
                    <ScrollAnimation animateIn='fadeIn'>
                        <Card >
                                <CardImg  width='100%' src="/assets/images/Full Stack Web and Mobile Development Certificate with Honor.jpg" alt="image"/>
                        </Card>
                   </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}




function Projects() {
    return (
        <div className="container maingap " align="center">
            <div className='pb-5 mb-5 '>
                <ScrollAnimation animateIn='fadeIn' >
                    <span className="title" style={{ fontSize: "2.5em" }} >Projects </span>
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn='fadeIn'> 
                {/* <ScrollAnimation animateIn='slide'> */}
                    <div className='parent grid'>
                            <div className='frame'>
                                <a target="_blank" href="https://hawaii-travel-2021.netlify.app"> <img className='image1' src='/assets/images/project hawaii.png' alt="project hawaii" /> </a>
                            </div>
                            <div className = 'content'  >
                                <p style={{ fontSize: "2em" }} >Hawaii Travel</p>
                                <p style={{ fontSize:'1.2em', color:'#787878' }} >Solo Project (from design to deployment)</p>
                                <p style={{ fontSize: "1.5em" }} >HTML | CSS | BootStrap | Javascript</p>
                                <p style={{color:'#787878'}}>For this project I used mostly Bootstrap and CSS to create a Hawaii travel website, with flip cards feature for the Cuisine section. I focused on layout design and user interaction.</p>
                                <div>
                                    <a target="_blank" href="https://hawaii-travel-2021.netlify.app" style={{textDecoration : "none" }} > <Button className="btn-project" style={{margin:'20px'}} >Demo</Button></a>
                                    <a target="_blank" href="https://github.com/chaohg/traveltoHawaii" style={{textDecoration : "none"}} > <Button className="btn-project" style={{margin:'20px'}}>Code</Button></a>
                                </div>
                            </div>
                    </div>
                {/* </ScrollAnimation> */}
            </ScrollAnimation>
           

            <ScrollAnimation animateIn='fadeIn'> 
                {/* <ScrollAnimation animateIn='slide'> */}
                    <div className='parent project grid'>
                        <div className = 'content1'  >
                            <p style={{ fontSize: "2em" }} >Real Estate Search App</p>
                            <p style={{ fontSize:'1.2em', color:'#787878' }} >Solo Project (from design to deployment)</p>
                            <p style={{ fontSize: "1.5em" }} >React | ReactStrap | JavaScript | CSS</p>
                            <p style={{color:'#787878'}}>Developed this website using React, fetching from a Real Estate API and rendering the search results with Google maps, virtual tours and many more detail information for each property.</p>
                            <div>
                                <a target="_blank" href="https://realestate-search.netlify.app" style={{textDecoration : "none" }} > <Button className="btn-project" style={{margin:'20px'}} >Demo</Button></a>
                                <a target="_blank" href="https://www.loom.com/share/62f733b1a9ad4d3aabe0e3625b3022e2" style={{textDecoration : "none"}}> <Button className="btn-project" style={{margin:'20px'}}>Video</Button></a>
                                <a target="_blank" href="https://github.com/chaohg/realestateapp" style={{textDecoration : "none"}} > <Button className="btn-project" style={{margin:'20px'}}>Code</Button></a>
                            </div>
                        </div>
                        <div className='frame image'>
                            <a target="_blank" href="https://realestate-search.netlify.app"> <img className='image1' src='/assets/images/project real estate.png' alt="project real estate" /> </a>
                        </div>
                    </div>
                {/* </ScrollAnimation>                */}
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'> 
                {/* <ScrollAnimation animateIn='slide'> */}
                    <div className='parent grid'>
                        <div className='frame'>
                            <a target="_blank" href="https://spacestagram-duclos.netlify.app"> <img className='image1' src='/assets/images/project space.png' alt="project spacestagram" /> </a>
                        </div>
                        <div className = 'content'  >
                            <p style={{ fontSize: "2em" }} >Spacestagram</p>
                            <p style={{ fontSize:'1.2em', color:'#787878' }} >Solo Project (from design to deployment)</p>
                            <p style={{ fontSize: "1.5em" }} >React | Hooks | JavaScript | CSS</p>
                            <p style={{color:'#787878'}}>This is a projected developed with ReactJS, getting data from NASA API. The user can pick the dates to render different information. Invalid dates will show alerts.</p>
                            <div>
                                <a target="_blank" href="https://spacestagram-duclos.netlify.app/" style={{textDecoration : "none" }} > <Button className="btn-project" style={{margin:'20px'}} >Demo</Button></a>
                                <a target="_blank" href="https://github.com/chaohg/spacestagram" style={{textDecoration : "none"}} > <Button className="btn-project" style={{margin:'20px'}}>Code</Button></a>
                            </div>
                        </div>
                    </div>
                {/* </ScrollAnimation> */}
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'> 
                {/* <ScrollAnimation animateIn='slide'> */}
                    <div className='parent project grid'>
                        <div className = 'content1'  >
                            <p style={{ fontSize: "2em" }} >To Do List Mobile App</p>
                            <p style={{ fontSize:'1.2em', color:'#787878' }} >Solo Project (from design to deployment)</p>
                            <p style={{ fontSize: "1.5em" }} >React Native | Redux | JavaScript </p>
                            
                            <p style={{color:'#787878'}}>I built this to-do-list mobile app with Redux in React Native. It can add and delete tasks. The data can be stored locally using Persist Redux Store. </p>
                            <div >
                                <a target="_blank" href="https://expo.io/@minchao/todolist" style={{textDecoration : "none" }} > <Button className="btn-project" style={{margin:'20px'}} >Demo</Button></a>
                                <a target="_blank" href="https://github.com/chaohg/todolist" style={{textDecoration : "none"}} > <Button className="btn-project" style={{margin:'20px'}}>Code</Button></a>
                            </div>
                        </div>
                        <div className='image frame'>
                            <a target="_blank" href="https://expo.io/@minchao/todolist"> <img className='image3' src='/assets/images/project todolist.png' alt="project to do list" /> </a>
                        </div>
                    </div>
                {/* </ScrollAnimation> */}
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'> 
                {/* <ScrollAnimation animateIn='slide'> */}
                    <div className='parent grid'>
                        <div className='frame'>
                            <a target="_blank" href="https://paint-app2021.netlify.app/"> <img className='image1' src='/assets/images/paint-app.png' alt="project paint app" /> </a>
                        </div>
                        <div className = 'content'  >
                            <p style={{ fontSize: "2em" }} >Paint App</p>
                            <p style={{ fontSize:'1.2em', color:'#787878' }} >Solo Project (from design to deployment)</p>
                            <p style={{ fontSize: "1.5em" }} >HTML | CSS | BootStrap | Javascript</p>
                            <p style={{color:'#787878'}}>This paint app has complete functions of drawing with colors auto-changing, adding stamps, erasing and saving the drawing.</p>
                            <div>
                                <a target="_blank" href="https://paint-app2021.netlify.app/" style={{textDecoration : "none" }} > <Button className="btn-project" style={{margin:'20px'}} >Demo</Button></a>
                                <a target="_blank" href="https://github.com/chaohg/paint-app" style={{textDecoration : "none"}} > <Button className="btn-project" style={{margin:'20px'}}>Code</Button></a>
                            </div>
                        </div>
                    </div>
                {/* </ScrollAnimation> */}
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'> 
                {/* <ScrollAnimation animateIn='slide'> */}
                    <div className='parent project grid'>
                        <div className = 'content1'  >
                            <p style={{ fontSize: "2em" }} >Current Time Project</p>
                            <p style={{ fontSize:'1.2em', color:'#787878' }} >Solo Project (from design to deployment)</p>
                            <p style={{ fontSize: "1.5em" }} >Vanilla JavaScript | CSS </p>
                            
                            <p style={{color:'#787878'}}> This is a little fun project! I was able to build an app to show current time on a clock with second, minute and hour hands, using Vanilla JavaScript and CSS. </p>
                            <div >
                                <a target="_blank" href="https://clock-currenttime.netlify.app/" style={{textDecoration : "none" }} > <Button className="btn-project" style={{margin:'20px'}} >Demo</Button></a>
                                <a target="_blank" href="https://github.com/chaohg/clock-currenttime" style={{textDecoration : "none"}} > <Button className="btn-project" style={{margin:'20px'}}>Code</Button></a>
                            </div>
                        </div>
                        <div className='image frame'>
                            <a target="_blank" href="https://clock-currenttime.netlify.app/"> <img className='image1' src='/assets/images/project-clock.png' alt="project clock" /> </a>
                        </div>
                    </div>
                {/* </ScrollAnimation> */}
            </ScrollAnimation>
        </div>
 )
}  

class AnimationText extends Component {
    render () {
      return (
          <div className="text">
              
              <Typical
                  steps={['JavaScript', 1000, 'ReactJS', 1000, 'React Native', 1000, 'Redux', 1000,'TypeScript', 1000, 'BootStrap', 1000,'Python', 1000,'MongoDb', 1000]}
                  loop={Infinity}
                  wrapper="b"
              />
        </div>
      )
    }
  }

  
function Contactme() {
    return(
        <div className="container maingap " align="center">
                <div className='pb-5 mb-5 '>
                    <ScrollAnimation animateIn='fadeIn'>
                        <span className="title " style={{ fontSize: "2.5em" }} >Contact Me </span>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn='slideFromLeft'>
                <div>
                    <div className="row " >
                        <div className="col" align="center">
                                <a role="button " className="btn" href="tel:+12063838906"><i className="fa fa-phone-square extraIcon" ></i> </a>
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
                </ScrollAnimation>
        </div>
    )
}


function Presenter () {
   
    return (
      <div>
            <Zoom>  
            <div align="center" >
                <div className='mb-5 '>
                    <span style={{ fontSize: "6rem" ,color:'#B8860B', justifyContent:"center"}} className='row' >Hello</span>
                    <div className='row' style={{justifyContent:"center" }}>
                        <span style={{ fontSize: "2.5rem" ,color:'#585858'}} className='pr-3 pt-2'> I'm </span> <span style={{fontSize: "3rem", color:"black",verticalAlign:'text-bottom'}}> Minchao Duclos</span> 
                    </div>
                    <span style={{ fontSize: "2.5rem", color:'#585858' }}>a Developer & Designer</span>
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
