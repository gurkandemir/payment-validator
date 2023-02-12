import {controller, httpGet, request, response} from "inversify-express-utils";
import {RequestValidator} from "../middleware/request-validator";
import {oneOf, query} from "express-validator";

@controller('/query')
export class QueryController {

    @httpGet('',
        oneOf([
            [
                query("startDate")
                    .exists().withMessage("Start date must exists with endDate if userId not given")
                    .isDate().withMessage("Start date should be in date format"),
                query("endDate")
                    .exists().withMessage("End date date must exists with startDate if userId not given")
                    .isDate().withMessage("End date should be in date format")
            ],
            query("userId")
                .exists().withMessage("UserId must exists if startDate and endDate not given")
                .isNumeric().withMessage("UserId must be numeric")
        ]),
        RequestValidator
    )
    public query(@request() req: any, @response() res: any) {
        res.send("Query completed.");
    }
}
