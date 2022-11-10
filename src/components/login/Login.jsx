import React from "react";
import "./login.css"




const Login = ()=>{

    return(
        <div id="login" className="products-card">

        <section className="sect">
    <div className="colour"></div>
    <div className="colour"></div>
    <div className="colour"></div>
    <div className="boxLogin">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="container">
            <div class="formLogin">
                <h2 className="jpy">Login</h2>
                <form>
                    <div class="input__box">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input__box">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div class="input__box">
                        <input type="submit" value="Login" />
                    </div>
                    <p class="forget">
                        Forgot Password? <a className="ksyo" href="#">Click Here</a>
                    </p>
                    <p class="forget">
                        Don't have an account? <a className="ksyo" href="#">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Login