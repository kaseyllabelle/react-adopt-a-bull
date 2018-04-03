//Imports Below are Required
import React, { Component } from 'react';

//Imports Below are Optional
//import { connect } from 'react-redux';
//import {whatever, actions, dispatchToStateAction} from './path/to/actions'

export default class SkeletonStatefulComponent extends Component
{
  constructor(props)
  {
    super(props);
    //this.state = {}; //optional
  }

  //optional - But most used lifecycle listener
  /*
  componentDidMount()
  { }
  */

  render()
  {
    return(
    <div>
      <h2>Hi mom</h2>
      <p>Look what I can do <em>{this.props.propExample}</em></p>
    </div>
    )
  }
}

//Below is optional

/*
// Make sure you remember to import the action at the beginning of the file
const mapDispatchToProps = (dispatch) =>
  ({
    propName: (paramsAreOptional) => { dispatch(dispatchToStateAction(paramsAreOptional)); },
  });

const mapStateToProps = (state, ownProps) =>
  ({ propName: valueFromState });

//if you use `connect` make sure to remove the `default` keyword from the class above
export default connect(mapStateToProps, mapDispatchToProps)(Login);

*/