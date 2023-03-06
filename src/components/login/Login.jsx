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
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="container">
            <div className="formLogin">
                <h2 className="jpy">Login</h2>
                <form>
                    <div className="input__box">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input__box">
                        <input type="password"placeholder="••••••••" />
                    </div>
                    <div className="input__box">
                        <input type="submit" value="Login" />
                    </div>
                    <p className="forget">
                        Forgot Password? <a className="ksyo" href="#">Click Here</a>
                    </p>
                    <p className="forget">
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