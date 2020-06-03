const UserModel = require('../../models/User')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const { JWT_SECRET_KEY='somereallylongsecretkey' } = process.env


module.exports = {
    Query: {
        users: async (parent, args, context, info ) => {
            const users = await UserModel.find({});
            return users
        }
    },
    Mutation: {
        signup: async (parent, { input }, context, info) => {

            let {first_name, last_name, email, password, phone, roles } = input;

            const avatarHash = crypto.createHash('md5').update(email).digest("hex")
            const avatar = `https://gravatar.com/avatar/${avatarHash}`
            password = await bcrypt.hash(password, 10)

            const user = await UserModel.create({first_name, last_name, email, password, phone, roles, avatar });
            return user
        },
        login: async (parent, { input }, context, info) => {
            let { email, password } = input;

            const user = await UserModel.findOne({email});

            if(!user){
                throw new Error('Invalid credentials!')
            }

            const valid = await bcrypt.compare(password, user.password)

            if (!valid) {
                throw new Error('Invalid credentials.')
            }

            const token = jsonwebtoken.sign(
                { id: user.id, email: user.email, roles: user.roles },
                JWT_SECRET_KEY,
                { expiresIn: '1d' }
            )

            return { token, roles: user.roles, avatar: user.avatar }
        }
    }
}