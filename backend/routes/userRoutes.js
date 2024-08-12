import express from "express";
import {
  getListOfOwners,
  updateOwnerStatus,
  myBalance,
} from "../controllers/userController";
import authenticateJwt from "../middlewares/authMiddleware";
import { authorize } from "../middlewares/caslMiddleware";

const router = express.Router();

router.get(
  "/owners",
  authenticateJwt,
  authorize("filter", "Owner"),
  getListOfOwners
);

router.put(
  "/approve/:ownerId",
  authenticateJwt,
  authorize("approve", "Owner"),
  updateOwnerStatus
);

router.put(
  "/disable/:ownerId",
  authenticateJwt,
  authorize("disable", "Owner"),
  updateOwnerStatus
);

router.get("/balance", authenticateJwt, myBalance);

export default router;
