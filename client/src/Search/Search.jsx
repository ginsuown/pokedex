import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import * as components from './SearchComponents.jsx'
import { selectStyles } from './helper.js'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({
            value
        })
    }

    render() {
        const SEARCH_OPTIONS = gql`
            {
                all {
                    id
                    name
                }
            }`
        const { classes, theme } = this.props
        const styles = selectStyles(theme)
        return (
            <Query query={SEARCH_OPTIONS}>
            {
                ({ loading, error, data}) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    console.log(data.all.length)
                    let suggestions = data.all.map((d) => {
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
                                value={this.state.value}
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
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Search);