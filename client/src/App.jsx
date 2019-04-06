import React from 'react';
import Search from './Search/Search.jsx';
import Profile from './Profile/Profile.jsx';
import styles from './styles.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPokemon: {},
        };
        this.onHandleSelect = this.onHandleSelect.bind(this);
    }

    onHandleSelect(selectedPokemon) {
        console.log('SELECTED', selectedPokemon);
        this.setState({
            selectedPokemon
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Search 
                            onHandleSelect={this.onHandleSelect}
                            value={this.state.selectedPokemon}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Profile search={this.state.selectedPokemon}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);