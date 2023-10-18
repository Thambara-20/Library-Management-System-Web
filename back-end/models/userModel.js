
const Joi = require("joi");
const PasswordComplexity = require("joi-password-complexity");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ =  require("lodash");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {

        name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        national_id: {
            type: Sequelize.STRING,

        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
        }
    });

    User.prototype.generateAuthToken = function () { // Fix the method definition
        const token = jwt.sign({ name: this.name ,isAdmin:this.isAdmin}, config.get("jwtPrivateKey")); 
        return token;
    }

    async function validateUser(user) {
        const schema = Joi.object({
            name: Joi.string().required()
                .min(5)
                .max(255)
                .required(),
            email: Joi.string()
                .email() // This checks if the value is a valid email address
                .required(),
            password: Joi.string()
                .min(8)
                .required(),
        });
        
        try {
            await schema.validateAsync(user);
        } catch (error) {
            throw error;
        }
    }
    return { User, validateUser };

};



