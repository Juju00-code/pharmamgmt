import mongoose from 'mongoose';
import { getAllManu, manufacturer_Retailers, /*manutotal*/ moneyOwed, moneyPaid, } from '../services/Manufacturer.js';

export async function handleAllManu (req,res){
    const manu = await getAllManu()
    res.send(manu)  
  }

export async function handleManuRetailers(req, res) {
    const manuId = req.params.manufacturerId;
    // const iBookId = parseInt(bookId);
    //console.log(manuId)
    const manu = await manufacturer_Retailers(manuId);
    res.send(manu);
  }

/*export async function handleManutotal(req,res){
    const manuId = req.params.manufacturerId;
    const manu = await manutotal(manuId);
    res.send(manu);

  }*/

export async function handleMoneyOwed(req,res){
    const manuId = req.params.supplierId;
    const retailId = req.params.retailerId; 
    const manu = await moneyOwed(manuId,retailId);
    res.send(manu);
}

export async function handleMoneyPaid(req,res){
  const manuId = req.params.manufacturerId;
  const retailId = req.params.retailerId; 
  const manu = await moneyPaid(manuId,retailId);
  res.send(manu);
}
export default handleAllManu