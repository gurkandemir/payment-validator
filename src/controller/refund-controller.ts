import { controller, httpPost, request, response } from "inversify-express-utils";
import {RequestValidator} from "../middleware/request-validator";
import { body, param } from "express-validator";

@controller('/refund')
export class RefundController {

    @httpPost('/:paymentId',
        param("paymentId")
            .isNumeric().withMessage("PaymentId must be a number in request params"),
        body("amount")
            .notEmpty().withMessage('Amount is required in body')
            .isNumeric().withMessage('Amount must be a number'),
        RequestValidator
    )
    public refund(@request() req: any, @response() res: any) {
        res.send("Refund completed.");
    }
}
