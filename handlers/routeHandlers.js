import mongoose from 'mongoose';
import { getAllManu, manufacturer_Retailers, } from '../services/Manufacturer.js';


export async function handleAllManu (req,res){
    const manu = await getAllManu()
    res.send(manu)  
  }

export async function handleManuRetailers(req, res) {
    const manuId = req.params.manufacturerId;
    // const iBookId = parseInt(bookId);
    console.log(manuId)
    const manu = await manufacturer_Retailers(manuId);
    res.send(manu);
  }


export default handleAllManu