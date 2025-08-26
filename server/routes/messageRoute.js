import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  getMessages,
  getUsersForSideBar,
  markMessageAsSeen,
  sendMessages,
} from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/users", protectRoute, getUsersForSideBar);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.get("mark/:id", protectRoute, markMessageAsSeen);
messageRouter.get("/send/:id", protectRoute, sendMessages);

export default messageRouter;
