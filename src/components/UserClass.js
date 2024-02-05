import React from "react";

class UserClass extends React.Component {

       constructor(props){
        
        const dummyImg =
          'https://www.shareicon.net/data/128x128/2016/08/18/814068_face_512x512.png';

         super(props)
         
         this.state = {
           userInfo: {
             name: 'user name',
             avatar_url: dummyImg,
           },
         };
       }

    async componentDidMount(){
           
       const data = await fetch('https://api.github.com/users/ashique2510');
       const json = await data.json()
       console.log('json',json);

       this.setState({ userInfo:json });

     }

     componentDidUpdate(){

      console.log('component did update');

     }

     componentWillUnmount(){
      console.log('component will unmount');
     }

    render(){

          const { name, avatar_url } = this?.state?.userInfo;


        return (
          <div className="user-card">

            <img style={{width:'100px', height:'100px', borderRadius:'50%'}} src={avatar_url} alt="avatar" />
            <h2>{name}</h2>
            <h3>{this.props.location}</h3>
            <h4>{this.props.designation}</h4>
          </div>
        );
    }
}

export default UserClass;