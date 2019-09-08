import React, { Fragment } from 'react'
import NavBar from '../components/NavBar';
import Body from '../components/Body';

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Body></Body>
      </Fragment>
  );
}

export default App;

// import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import * as firebase from 'firebase';

// class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             speed: 10
//         }
//     }

//     componentDidMount() {
//         const rootRef = firebase.database().ref().child('react');
//         const speedRef = rootRef.child('speed');
//         speedRef.on('value', snap => {
//             this.setState({
//                 speed: snap.val()
//             });
//         });
//     }
    
//     render() {
//         return (
//             <div>
//               <Paper>
//                 <Typography variant="h5" component="h3">
//                     Inventory Items
//                 </Typography>
//                 <Typography component="p">
//                     {this.state.speed}
//                 </Typography>
//               </Paper>
//           </div>
//       );
//     }
// }

// export default App;
