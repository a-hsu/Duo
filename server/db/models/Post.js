const { model, Schema } = require("mongoose")

const postSchema = new Schema({
    username: String,
    body: String,
    createdAt: String,
    location: String,
    duration: String,
    time: String,
    assignedUser: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String,
        },
    ],
    likes: [
        {
            username: String,
            createdAt: String,
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // assignedUser: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    // },
})

module.exports = model("Post", postSchema)
