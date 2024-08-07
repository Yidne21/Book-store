import express from "express";
import {
  getListOfOwners,
  approveOwner,
  disableOwner,
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
  approveOwner
);

router.put(
  "/disable/:ownerId",
  authenticateJwt,
  authorize("disable", "Owner"),
  disableOwner
);

export default router;
