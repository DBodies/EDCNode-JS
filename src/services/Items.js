import { ItemsCollection } from "../db/schema.js";

export const getAllItems = async () => {
    const item = await ItemsCollection.find();
    return item;
};
export const getItemById = async (itemId) => {
    const item = await ItemsCollection.findById(itemId);
    return item;
};
export const updateItem = async (itemId, payload, options={}) => {
const rawResult = await ItemsCollection.findByIdAndUpdate(
    {_id: itemId},
    payload,
    {new: true,
        includeResultMetadata: true,
        ...options
    }
);
if(!rawResult || !rawResult.value) return null;
return {
    item: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted)
};
};
export const deleteItem = async(itemId) => {
    const item = await ItemsCollection.findByIdAndDelete(itemId);
return item;
};
