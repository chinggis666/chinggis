import React, { Component } from 'react';   

class Login extends Component{

    render(){
        return(
            <div> 
                <form>
                <div className="imgcontainer">
                    <img width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GInB_r5C0dwb-7we3eTqeHue7ItDENaJMmEfbiEvMc4F1thPzw" alt="Avatar" class="avatar"/>
                </div>

                <div className="container">
                    <label for="uname"><b>Нэвтрэх нэр</b></label>
                    <input type="text" placeholder="Хэрэглэгчийн нэр" name="uname" required/>

                    <label for="psw"><b>Нууц үг</b></label>
                    <input type="password" placeholder="Нууц үг" name="psw" required/>
                     <label>
                    <input type="checkbox" checked="checked" name="remember"/> Намайг сана
                    </label>   
                    <div>
                    <button class="button" type="submit">Нэвтрэх</button>
                    <button type="button" className="cancelbtn" >Болих</button>
                    </div>
                <div className="container"> 
                    <span className="psw">Нууц үгээ <a href="#">мартсана уу?</a></span>
                </div>
                </div> 
                </form>
            </div>
        );
    }
}
 export default Login;