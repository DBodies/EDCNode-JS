import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    _id: {
      type: String, // "blink_dagger"
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    tier: {
      type: String,
      enum: ["common", "rare", "epic", "legendary"],
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    cost: {
      type: Number,
      required: true,
      min: 0,
    },

    sell_cost: {
      type: Number,
      required: true,
      min: 0,
    },

    components: [
      {
        type: String, // ссылки на _id других предметов
      },
    ],

    stats: {
      type: Map,
      of: Number, // например { strength: 10, agility: 5 }
      default: {},
    },

    active: {
      name: { type: String },
      cooldown_sec: { type: Number },
      notes: { type: String },
    },

    lore: {
      type: String,
    },

    patch_tag: {
      type: String, // "seed", "7.35", и т.д.
    },
  },
  {
    timestamps: true, // ← добавляет createdAt и updatedAt
  }
);

export const ItemsCollection = mongoose.model("Item", ItemSchema, 'Workshops' );