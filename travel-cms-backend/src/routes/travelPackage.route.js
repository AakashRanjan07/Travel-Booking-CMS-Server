import { Router } from "express";
import { createPackage, deletePackage, getPackageById, getPackages, updatePackage } from "../controllers/travelPackage.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router()

router.post('/', protect, createPackage);
router.get('/', protect, getPackages);
router.get('/:id', protect, getPackageById);
router.put('/:id', protect, updatePackage);
router.delete('/:id', protect, deletePackage);

export default router  