import React, { Component } from 'react';   

class Signup extends Component{

    render(){
        return(
            <div> 
                <form>
                <div className="container">
                    <h1>Бүртгүүлэх</h1> 
                    <hr/>

                    <label for="email"><b>Нууц үг</b></label>
                    <input type="text" placeholder="Нууц үг" name="email" required/>

                    <label for="psw"><b>Нууц үг</b></label>
                    <input type="password" placeholder="Нууц үг" name="psw" required/>

                    <label for="psw-repeat"><b>Нууц баталгаажуулах</b></label>
                    <input type="password" placeholder="Нууц баталгаажуулах" name="psw-repeat" required/>
                    
                    <label>
                    <input type="checkbox" checked="checked" name="remember"/> Намайг сана
                    </label>
                      
                    <div className="clearfix">
                    <button type="submit" className="button" >Бүртгүүлэх</button>
                    <button type="button" className="cancelbtn">Болих</button>
                    </div>
                </div>
                </form> 
            </div>
        );
    }
}
 export default Signup;