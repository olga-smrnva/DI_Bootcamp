import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Child from './Child'

import {handleChangAction} from './actions'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // prop_one: 'text one',
      // prop_two: 'text_two'
      textInput: 'text from text input'
    }
  }

  handleChange = (e) => {
    this.setState({prop_two:e.target.value})
  }
  handleClick = () => {
    this.setState({prop_one:this.state.prop_two})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Simple Redux Example</h2>
          <div>
            {this.props.text_one}
          </div>
          <div>
            <input type="text" onChange={this.props.handelChangeApp}/>
          </div>
          <div>
            {this.props.text_two}
          </div>
          <div>
            <button onClick={this.handleClick}> Change prop_one to prop_two </button>
          </div>
          {this.props.a}
          <br/>
          {this.state.textInput}
          <Child/>
        </header>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    text_one: state.prop_one,
    text_two: state.prop_two,
    a: state.prop_three
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handelChangeApp: (e) => dispatch(handleChangAction(e.target.value))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
