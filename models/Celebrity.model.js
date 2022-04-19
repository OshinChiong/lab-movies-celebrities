//  Add your code here
const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
    name: {
        type: String,
    },
    ocupattion:[{
        type: String,
    }],
    catchPhrase:[{
        type: String,
    }]
});

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;