import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import * as components from './SearchComponents.jsx'
import { selectStyles } from '../common/style.js'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LoadingBar from '../LoadingBar/LoadingBar.jsx'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        console.log(value)
        this.props.onHandleSelect(value)
    }

    renderLoading() {
        return <LoadingBar color={"secondary"}/>
    }

    render() {
        const SEARCH_OPTIONS = gql`
            {
 	            pokemon(id: null, type: null, name: null, specie: null, move: null) {
                    id,
                    name
                }
            }`
        const { classes, theme } = this.props
        const styles = selectStyles(theme)
        return (
            <Query query={SEARCH_OPTIONS}>
            {
                ({ loading, error, data}) => {
                    if (loading) {
                        return this.renderLoading();
                    }

                    if (error) return `Error! ${error.message}`;

                    let suggestions = data.pokemon.map((d) => {
                        return {
                            label: d.name,
                            value: d.id
                        }
                    })
                    return (
                        <div className={classes.root}>
                            <Select
                                classes={classes}
                                styles={styles}
                                options={suggestions}
                                components={components}
                                value={this.props.value}
                                onChange={this.handleChange}
                                placeholder="Search for a Pokemon"
                                isClearable
                            />
                        </div>
                    )
                }
            }
            </Query>
        )
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onHandleSelect: PropTypes.func
}

export default withStyles(styles, { withTheme: true })(Search);