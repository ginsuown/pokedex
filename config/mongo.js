let mongo = {
    uri: (user,password) => `mongodb+srv://${user}:${password}@cluster0-ua8fn.mongodb.net/test?retryWrites=true`,
    user: 'ashKetchum',
    password: '6f1aXfDOa7s7KkHR'
};

module.export = mongo;