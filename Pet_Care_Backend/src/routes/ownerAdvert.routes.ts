import express from 'express';
import ownerAdvertController from '../controllers/ownerAdvert.controller';
const router = express.Router();

router.post('/ownerAdverts', ownerAdvertController.createOwnerAdvertisement);

router.get('/ownerAdverts', ownerAdvertController.getOwnerAdverts);

router.get('/ownerAdverts/:id', ownerAdvertController.getOwnerAdvert);

router.get('/myAdverts/:userId', ownerAdvertController.getUserOwnerAdverts);

router.put('/ownerAdverts/:id', ownerAdvertController.updateOwnerAdvert);

router.delete('/ownerAdverts/:id', ownerAdvertController.deleteOwnerAdvert);

router.get('/ownerPets/:id', ownerAdvertController.getOwnerPets);

router.get('/ownerServices/:id', ownerAdvertController.getOwnerServices);

router.get('/ownerLanguages/:id', ownerAdvertController.getOwnerLanguages);

export default router;