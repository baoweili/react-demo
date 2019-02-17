import React from 'react'
import { connect } from 'react-redux'
import { Link, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import { logout } from './Auth.redux'
function Erying() {
  return <h2>二营</h2>;
}

function Qibinglian() {
  return <h2>骑兵连</h2>;
}

class Test extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    return <h2>测试组件</h2>
  }
}

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const redirectToLogin = <Redirect to='/auth/'></Redirect>
    const app = (
      <div>
        <ul>
          <li>
            <Link to="/dashboard/">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>  
        <button onClick={this.props.logout}>注销</button>  
        <Route path='/dashboard/' exact component={App}></Route>
        <Route path='/dashboard/erying' component={Erying}></Route>
        <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
      </div>
    )
    return this.props.isAuth ? app : redirectToLogin
  }
}
const mapStatetoProps = (state) => {
  return state.auth
};
const actionCreatrors = { logout };
Dashboard = connect(mapStatetoProps, actionCreatrors)(Dashboard); 
export default Dashboard;