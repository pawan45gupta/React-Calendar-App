import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login(props) {
    return (
<div className="text-center">
        <form className="form-signin">
  <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label htmlFor="inputEmail" className="sr-only">Email address</label>
  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""></input>
  <label htmlFor="inputPassword" className="sr-only">Password</label>
  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>
  <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={props.handleSignIn} >Sign in</button>
  <p className="mt-5 mb-3 text-muted">© 2020-2021</p>
</form>
</div>
    )
}