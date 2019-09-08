import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';

class BodyContent extends Component {

    constructor() {
        super();
        this.state = {
            speed: 10
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val()
            });
        });
    }
    
    render() {
        return (
            <div>
              <Paper>
                <Typography variant="h5" component="h3">
                    Inventory Items
                </Typography>
                <Typography component="p">
                    {this.state.speed}
                </Typography>
              </Paper>
          </div>
      );
    }
}

export default BodyContent;