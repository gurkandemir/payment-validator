import 'reflect-metadata';
import {server} from "./server";

let application = server.build()

// @ts-ignore
application.listen(3000,() => {console.log("Started on port 3000")});
