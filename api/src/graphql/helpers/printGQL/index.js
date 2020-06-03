const { print } = require('graphql/language/printer');

exports.printGQL = (...typesGQL) => typesGQL.map((type) => print(type));