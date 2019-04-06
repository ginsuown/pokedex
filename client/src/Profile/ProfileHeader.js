import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

    // Change color depending on the type
const getFirstLetter = (name) => {
    return name.charAt(0).toUpperCase();
}

const ProfileHeader = (props) => {
    const { classes, name, description } = props;
    return (
        <CardHeader
          avatar={
            <Avatar aria-label="pokemon" className={classes.avatar}>
              { name ? getFirstLetter(name) : null }
            </Avatar>
          }
          title={ name ? name : '' }
          subheader={ description ? description : ''}
        />
    );
}

export default ProfileHeader;