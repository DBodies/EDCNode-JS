import Joi from 'joi';


const allowedTiers = ["common", "rare", "epic", "legendary"];

export const createItemSchema = Joi.object({
  _id: Joi.string().required().messages({
    "string.base": "_id must be a string",
    "string.empty": "_id cannot be empty",
    "any.required": "_id is required",
  }),
  name: Joi.string().trim().required().messages({
    "string.base": "name must be a string",
    "string.empty": "name cannot be empty",
    "any.required": "name is required",
  }),
  tier: Joi.string()
    .valid(...allowedTiers)
    .required()
    .messages({
      "any.only": "tier must be one of: common, rare, epic, legendary",
      "string.empty": "tier cannot be empty",
      "any.required": "tier is required",
    }),
  category: Joi.string().required().messages({
    "string.base": "category must be a string",
    "string.empty": "category cannot be empty",
    "any.required": "category is required",
  }),
  cost: Joi.number().min(0).required().messages({
    "number.base": "cost must be a number",
    "number.min": "cost cannot be less than 0",
    "any.required": "cost is required",
  }),
  sell_cost: Joi.number().min(0).required().messages({
    "number.base": "sell_cost must be a number",
    "number.min": "sell_cost cannot be less than 0",
    "any.required": "sell_cost is required",
  }),
  components: Joi.array()
    .items(
      Joi.string().messages({
        "string.base": "each component id must be a string",
        "string.empty": "component id cannot be empty",
      })
    )
    .messages({
      "array.base": "components must be an array of item IDs",
    }),
  stats: Joi.object()
    .pattern(
      Joi.string(),
      Joi.number().messages({
        "number.base": "stat values must be numbers",
      })
    )
    .default({})
    .messages({
      "object.base": "stats must be an object like \\{ statName: number \\}",
    }),
  active: Joi.object({
    name: Joi.string().messages({
      "string.base": "active.name must be a string",
    }),
    cooldown_sec: Joi.number().messages({
      "number.base": "active.cooldown_sec must be a number",
    }),
    notes: Joi.string().messages({
      "string.base": "active.notes must be a string",
    }),
  }).messages({
    "object.base": "active must be an object",
  }),
  lore: Joi.string().messages({
    "string.base": "lore must be a string",
  }),

  patch_tag: Joi.string().messages({
    "string.base": "patch_tag must be a string",
  }),
});

export const updateItemSchema = Joi.object({
_id: Joi.string().messages({
    "string.base": "_id must be a string",
    "string.empty": "_id cannot be empty",
  }),
  name: Joi.string().trim().messages({
    "string.base": "name must be a string",
    "string.empty": "name cannot be empty",
  }),
  tier: Joi.string()
    .valid(...allowedTiers)
    .messages({
      "any.only": `tier must be one of: ${allowedTiers.join(", ")}`,
      "string.empty": "tier cannot be empty",
    }),
  category: Joi.string().messages({
    "string.base": "category must be a string",
    "string.empty": "category cannot be empty",
  }),
  cost: Joi.number().min(0).messages({
    "number.base": "cost must be a number",
    "number.min": "cost cannot be less than 0",
  }),

  sell_cost: Joi.number().min(0).messages({
    "number.base": "sell_cost must be a number",
    "number.min": "sell_cost cannot be less than 0",
  }),
  components: Joi.array()
    .items(
      Joi.string().messages({
        "string.base": "each component id must be a string",
        "string.empty": "component id cannot be empty",
      })
    )
    .messages({
      "array.base": "components must be an array of item IDs",
    }),
  stats: Joi.object()
    .pattern(
      Joi.string(),
      Joi.number().messages({
        "number.base": "stat values must be numbers",
      })
    )
    .messages({
      "object.base": "stats must be an object like \\{ statName: number \\}",
    }),
  active: Joi.object({
    name: Joi.string().messages({
      "string.base": "active.name must be a string",
    }),
    cooldown_sec: Joi.number().messages({
      "number.base": "active.cooldown_sec must be a number",
    }),
    notes: Joi.string().messages({
      "string.base": "active.notes must be a string",
    }),
  }).messages({
    "object.base": "active must be an object",
  }),
  lore: Joi.string().messages({
    "string.base": "lore must be a string",
  }),
  patch_tag: Joi.string().messages({
    "string.base": "patch_tag must be a string",
  }),
});