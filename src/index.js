//function expression
import app from "./app.js";
const main = () =>{
    app.listen(app.get("port"));
    console.log(`The company's super web server is running on port ${app.get("port")}`);
}

main();
