import { controller, httpPost, request, response } from "inversify-express-utils";
import { body } from "express-validator";
import {RequestValidator} from "../middleware/request-validator";

@controller('/pay')
export class PayController {

    @httpPost('',
        body('card.number')
            .notEmpty().withMessage('Card number is required')
            .isCreditCard().withMessage('Card number is invalid'),
        body('card.cvv')
            .optional()
            .isLength({ min: 3, max: 4 }).withMessage('CVV length can be either 3 or 4'),
        body('card.expiryYear')
            .notEmpty().withMessage('Expiry year is required')
            .custom(year => { return year > 2023 }).withMessage("Expiry year must be greater than current year"),
        RequestValidator
    )
    public pay(@request() req: any, @response() res: any) {
        res.send("Pay completed.");
    }
}
