import { Router } from "express";
import { getUserController, getUserByIdController, getItemByIdAndUpdate, deleteItemController, patchItemController } from "../controllers/itemsController.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validationHandler } from "../middlewares/validationHandler.js";
import { createItemSchema, updateItemSchema } from "../validation/schema.js";

const router = Router();

router.get("/item",
    ctrlWrapper(getUserController));
router.get("/item/:itemId", 
    ctrlWrapper(getUserByIdController));
router.put("/item/:itemId", 
    validationHandler(createItemSchema),
    ctrlWrapper(getItemByIdAndUpdate));
router.delete('/item/:itemId',
    ctrlWrapper(deleteItemController));
router.patch('/item/:itemId',
    validationHandler(updateItemSchema),
    ctrlWrapper(patchItemController)
);
export default router;