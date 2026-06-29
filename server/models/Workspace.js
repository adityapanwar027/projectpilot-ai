const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema ( 
    {
        name: {
            type: String,
            require: true,
            trim: true,
        },

        description: {
            type: String,
            default: "",
            trim: true,
        },

       owner: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         required: true,
       },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Workspace", workspaceSchema);