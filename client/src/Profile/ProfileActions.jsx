import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/core/ExpandMore'

const PofileActions = (props) => {
    const { classes, expanded, handleExpandClick } = props;
    return (
        <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
                className={classnames(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
            >
                <ExpandMoreIcon />
            </IconButton>
        </CardActions>
    )
}

export default ProfileActions;