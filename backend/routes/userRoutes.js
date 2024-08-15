import express from "express";
import {
  getListOfOwners,
  updateOwnerStatus,
  myBalance,
  deleteOwner,
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

router.delete(
  "/delete/:ownerId",
  authenticateJwt,
  authorize("delete", "Owner"),
  deleteOwner
);

export default router;
