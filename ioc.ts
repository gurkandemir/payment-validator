import {Container} from "inversify";
import {PayController} from "./src/controller/pay-controller";
import {RequestValidator} from "./src/middleware/request-validator";
import {RefundController} from "./src/controller/refund-controller";
import {QueryController} from "./src/controller/query-controller";

let container = new Container();

container.bind<PayController>(PayController).toSelf().inSingletonScope()
container.bind<RefundController>(RefundController).toSelf().inSingletonScope()
container.bind<QueryController>(QueryController).toSelf().inSingletonScope()
container.bind<RequestValidator>(RequestValidator).toSelf().inSingletonScope();

export { container }