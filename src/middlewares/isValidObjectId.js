import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const isValidId = (req,res,next) => {
const {itemId} = req.params;
if(!isValidObjectId(itemId)) { 
throw createHttpError(400, "Bad Request");
}
next();
};