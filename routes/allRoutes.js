import express from 'express';
import { handleAllManu, handleManuRetailers } from '../handlers/routeHandlers.js';

const manuRouter = express.Router();

manuRouter.get('/allmanufacturers', handleAllManu)
manuRouter.get('/manufacturer/:manufacturerId/retailers' , handleManuRetailers)


export default manuRouter;