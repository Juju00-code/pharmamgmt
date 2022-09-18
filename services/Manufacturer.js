import mongoose from "mongoose";
import Invoices from "../Models/invoices.js";
import Manufacturers from "../Models/Manufacturers.js";

export async function getAllManu(){
    const allManu = await Manufacturers.find();
    return allManu;
}


export async function manufacturer_Retailers(manuId){
    console.log(`call from services ${manuId}`)
    let manu_id =  await Invoices.aggregate(
        [
            {$match : {manufacturerId : manuId}},
            //{$group: {_id: "$retailerId", total_units_bought: {$sum: "$totalQuantity"}, total_money_paid: {$sum: "$paidAmount"}, remainder_money:{$sum:"$remainderAmount"}}}
        ]
    ).exec()

    return manu_id


}


//export default getAllManu 