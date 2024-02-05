import React from 'react';
import User from './User'
import UserClass from './UserClass'

class About extends React.Component {

//const About = () => {

  constructor(props){
    super(props)
  }
  componentDidMount(){
  }

 render(){
  return (
    <div>
      <h1>About page</h1>
      <User
        name={'Ashique (Functional component)'}
        location={'Kerala'}
        designation={'Web Developer'}
      />
      <UserClass
       
        location={'Kerala'}
        designation={'Web Developer'}
      />


    </div>
  );
 }
}

export default About
