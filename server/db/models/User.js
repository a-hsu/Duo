const { model, Schema } = require("mongoose")
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    isAssigned: Boolean,
    posts: [
        {
            type:Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
})

module.exports = model("User", userSchema)
