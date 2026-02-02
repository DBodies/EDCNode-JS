import createHttpError from "http-errors";
import { getAllItems, getItemById, updateItem, deleteItem } from "../services/Items.js";

export const getUserController = async (req,res) => {
const item = await getAllItems();
res.status(200).json({
  data: item
});
};

export const getUserByIdController = async (req,res) => {
    const {itemId} = req.params;
    const response = await getItemById(itemId);
if(!response) {
   throw createHttpError(401,  "User not found");
}
res.status(200).json({
    message: "User was successfully found",
    data:response
});
};
export const getItemByIdAndUpdate = async (req,res,next) => {
const {itemId} = req.params;
const createItem = await updateItem(itemId, req.body, {
    upsert: true
});
if(!createItem) {
next(createHttpError(404, "Student not found"));
return;
};
const status = createItem.isNew ? 201 : 200;
res.status(status).json({
    status,
    message: "Successfully upserted item",
    data:createItem.item
});
};
export const deleteItemController = async (req,res,next) => {
const {itemId} = req.params;
const result = await deleteItem(itemId);
if(!result) {
    next(createHttpError(404, "Item not found"));
    return;
}
res.status(200).json({
    data: [`${itemId} was deleted`],
    message: "Item was deleted"
});
};
export const patchItemController = async (req,res,next) => {
    const {itemId} = req.params;
    const result = await updateItem(itemId, req.body);
    if(!result) {
        next(createHttpError(404, "Item not found"));
        return;
    }
    res.status(200).json({
        message: "Successfully update an item",
        data: result.item
    });
};