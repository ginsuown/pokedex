import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import * as components from './SearchComponents.jsx'
import { selectStyles } from './helper.js'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js'

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
        const { classes, theme } = this.props
        const styles = selectStyles(theme)
        return (
            <div className={classes.root}>
                <Select
                    classes={classes}
                    styles={styles}
                    options={this.props.suggestions}
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

Search.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    suggestions: PropTypes.array.isRequired
}

export default withStyles(styles, { withTheme: true })(Search);