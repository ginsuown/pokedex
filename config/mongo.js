let mongo = {
    uri: (user,password) => `mongodb+srv://${user}:${password}@cluster0-ua8fn.mongodb.net/test?retryWrites=true`,
    user: '',
    password: ''
};

module.export = mongo;