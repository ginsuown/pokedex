const selectStyles = (theme) => {
    return {
        input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
            font: 'inherit',
        },
        }),
    }
};

export {
    selectStyles
};