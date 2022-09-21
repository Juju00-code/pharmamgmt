import express from 'express';
import { handleAllManu, handleManuRetailers, /*handleManutotal,*/ handleMoneyOwed, handleMoneyPaid } from '../handlers/routeHandlers.js';

const manuRouter = express.Router();

manuRouter.get('/allmanufacturers', handleAllManu)
manuRouter.get('/manufacturer/:manufacturerId/retailers' , handleManuRetailers)
//manuRouter.get('/manufacturer/:manufacturerId/totalsales', handleManutotal)
manuRouter.get('/manufacturer/:supplierId/:retailerId/unretrieved', handleMoneyOwed)
manuRouter.get('/manufacturer/:manufacturerId/retailer/:retailerId/retrieved', handleMoneyPaid)
export default manuRouter;