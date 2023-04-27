const app = require("./src/app.js");
const { port } = require("./config")

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});