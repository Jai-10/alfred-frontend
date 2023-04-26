import React, { Component } from 'react';
import './Login.css'
import LoginImg from '../../assets/Alfred Pennyworth.jfif'
import SignupImg from '../../assets/homeServices.jfif'

export default class Login extends Component{
        
    toggleForm(){
        var container = document.querySelector('.containerForm');
        container.classList.toggle('active')
    }

    render(){

        return(    
            <div id='login'>
            <div className="containerForm" id="containerForm">
                <div className="user loginBx">
                  <div className="imgBx">
                       <img src={LoginImg} alt=""/>
                  </div>
                  <div className="formBx">
                       <form id='inForm'>
                           <h2>Log In</h2>
                           <div className="form-controls">
                               <input type="text"  placeholder="Username" id='inName'/>
                              <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                           </div>
                           <div className="form-controls">
                              <input type="password" name="" placeholder="Password" id='inPass'/>
                               <i className="fas fa-check-circle"></i>
                              <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                               <br/>
                           </div>
                           <input type="submit" name="" value="LogIn" id='logInBtn'/>
                           <p className="signUp">Don't have an account ? <a href="#"  onClick={this.toggleForm}>Sign Up.</a></p>
                       </form>
                   </div>
               </div>

       {/* <!----------------------------- Sign Up form------------------------------> */}
               <div className="user signupBx">
                   <div className="formBx">
                       <form id='form'>
                           <h2>Create an Account</h2>
          
                           <div className="form-controls">
                               <input type="text" name="" placeholder="Username" id='username'/>
                               <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                           </div>
                          
                           <div className="form-controls">
                               <input type="email" name="" placeholder="Email Address" id='email'/>
                               <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                           </div>
          
                           <div className="form-controls">
                                <input type="password" name="" placeholder="Create Password" id='password'/>
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i><p>  </p><p></p><p></p>
                                <small>Error message</small>
                           </div>
          
                          <div className="form-controls">
                               <input type="password" name="" placeholder="Confirm Password" id='password2'/>
                               <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                          </div>
          
                           <input type="submit" name="" value="Sign Up" id="signUpBtn"/>
                           <p className="signUp">Already have an account ? <a href='#'  onClick={this.toggleForm}>Log In.</a></p>
                       </form>
                   </div>
                   <div className="imgBx">
                     <img src={SignupImg} alt=""/>
                   </div>
               </div>
           </div>
           </div>
        )

    }
}
