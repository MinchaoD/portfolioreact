import React, { Component } from 'react'

class Footer extends Component {
    render() {
        const date = new Date(); 
        const year = date.getFullYear();
    
        return (
            <React.Fragment>
                <footer className="site-footer">
                 
                        <div class="row row-content-footer text-center">
                            <div class="col-4">
                                <a role="button" class="btn btn-dark btn-lg"  href="tel:+12063838906"><i class="fa fa-phone-square fa-lg"></i> Phone ： 1-206-383-8906 </a><br />
                            </div>
                            <div class="col-4">
                                <p> made with <i class="fa fa-heart"></i> in Seattle</p>
                            </div>
                            <div class="col-4 ">
                                <a role="button" class="btn btn-dark btn-lg"  href="mailto: chaohg@hotmail.com"><i class="fa fa-envelope-square fa-lg"></i> Email :  chaohg@hotmail.com </a>
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col">
                            <p>copyright ©  {year}</p>
                            </div>
                        </div>
                </footer>
            </React.Fragment>



            
        );
    }
}

export default Footer;