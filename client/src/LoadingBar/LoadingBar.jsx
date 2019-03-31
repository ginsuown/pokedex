import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import styles from './styles.js'

class LoadingBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes, variant, color } = this.props;
        return (
            <div className = {classes.root}>
                <LinearProgress
                    variant={variant}
                    color={color}
                />
            </div>
        )
    }
}

export default withStyles(styles)(LoadingBar)
