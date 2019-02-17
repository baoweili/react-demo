import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './Auth.redux'

class Auth extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        { this.props.isAuth ? <Redirect to='/dashboard/'></Redirect> : null}
        <h2>你没有权限，需要登录后才能查看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return state.auth
}
const actionCreatrors = { login }
Auth = connect(mapStatetoProps, actionCreatrors)(Auth);

export default Auth;