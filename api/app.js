const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { ApolloServer, AuthenticationError } = require('apollo-server-express')
const createMainSchema = require('./src/graphql/schemas')
const jwt = require('express-jwt')
const { JWT_SECRET_KEY='somereallylongsecretkey', NODE_ENV= 'development' } = process.env

const schema = createMainSchema()
const isProduction = NODE_ENV !== 'production'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', routes)

const errorHandler = (err, req, res, next) => {
    try {
        console.error(
            JSON.stringify({
                method: req.method,
                url: req.url,
                error: {
                    message: err.message,
                    stack: err.stack
                },
                params: req.params,
                headers: req.headers,
                queries: req.query,
                body: req.body
            })
        )
        if (res.headersSent) {
            return next(err)
        }
        const { status } = err
        res.status(status).send({error: err.message})
    } catch (error) {
        return next(error)
    }
}

app.use(errorHandler)

// auth middleware
const auth = jwt({
    secret: JWT_SECRET_KEY,
    credentialsRequired: false
})


const apollo = new ApolloServer({
    introspection: isProduction, // do this only for dev purposes
    playground: isProduction, // do this only for dev purposes
    schema,
    context: ({ req }) => {
        const { id, email } = req.user || {}
        return { id, email }
    },
    formatError: err => {
        if(err instanceof AuthenticationError){
            console.error(
                JSON.stringify({
                    messages: err.messages,
                    extensions: err.extensions
                })
            )
        }
        return err
    }
})

app.use(auth)

apollo.applyMiddleware({ app, path: '/graphql' })

module.exports = app