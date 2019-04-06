import React from 'react'
import PropTypes from 'prop-types'
import gql from "graphql-tag";
import LoadingBar from '../LoadingBar/LoadingBar.jsx'
import ProfileHeader from './ProfileHeader'
// import ProfileActions from './ProfileActions';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js'
import { Query } from "react-apollo";
import Card from '@material-ui/core/Card';


class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    renderLoading() {
        return <LoadingBar color={"secondary"}/>
    }

    render() {
        const { classes, search } = this.props;
        let name = search ? search.label : null;
        const QUERY = gql`
            {
                pokemon(name: "${name}") {
                    id,
                    name
                }
            }`;
        console.log(QUERY);
        return (
            <Query query={QUERY}>
                {
                    ({ loading, error, data }) => {
                        console.log(data);
                        if(loading) {
                            return this.renderLoading();
                        }
                        if(error) {
                            return ''
                        }
                        if(data && data.pokemon && data.pokemon.length === 1) {
                            let pokemon = data.pokemon[0];
                            return (
                                <div>
                                    <Card class={classes.card}>
                                        <ProfileHeader 
                                            classes={classes}
                                            name={pokemon.name}
                                        />
                                    </Card>
                                </div>
                            );
                        } else {
                            return ''
                        }
                    } 
                }


            </Query>
        )
    }
}

export default withStyles(styles)(Profile);