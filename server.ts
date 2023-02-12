import {InversifyExpressServer} from "inversify-express-utils";
import {container} from "./ioc";
import bodyParser = require("body-parser");

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

export { server }
