import {connect} from 'react-redux'

const Child = (props) => {
  return(
    <>
      <h1>{props.text1}</h1>
      <h2>{props.text2}</h2>
    </>
  )
}

const mapStateToProps =(state) => {
  return {
    text1:state.prop_one,
    text2: state.prop_two
  }
}
export default connect(mapStateToProps)(Child)
