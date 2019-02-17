import React from 'react'
import { connect } from 'react-redux'
import { addGun, desGun, addGunAsync} from './index.redux'
class App extends React.Component{
    render(){
        const {num, addGun, desGun, addGunAsync} = this.props;
        return(
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick = {addGun}>申请武器</button>
                <button onClick = {desGun}>撤销武器</button>
                <button onClick = {addGunAsync}>过两天再给</button>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
  return { num:state.counter }
}
const actionCreatrors = { addGun, desGun, addGunAsync }
App = connect(mapStatetoProps, actionCreatrors)(App);
export default App