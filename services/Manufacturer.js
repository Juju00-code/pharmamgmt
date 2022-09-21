import mongoose from "mongoose";
import Invoices from "../Models/invoices.js";
import Manufacturers from "../Models/Manufacturers.js";
import Retailers from "../Models/retailers.js";
//1.
export async function getAllManu(){
    const allManu = await Manufacturers.find();
    return allManu;
}

//2.
export async function manufacturer_Retailers(manuId){
   // console.log(`call from services ${manuId}`)
    const manu_Id = mongoose.Types.ObjectId(manuId);
    let manu_id =  await Invoices.aggregate(
        [
            {$match : {manufacturerId : manu_Id}},
            {$group: {_id: "$retailerId", total_units_bought: {$sum: "$totalQuantity"},total_Value_bought: {$sum: "$totalValue"}, total_money_paid: {$sum: "$paidAmount"}, remainder_money:{$sum:"$remainderAmount"}}}
        ]
    ).exec()

    /*let revenue =  await Invoices.aggregate(
        [
            {$match : {manufacturerId : manu_Id}},
            {$group: {_id: null, total_units_sold: {$sum: "$totalQuantity"}, money_retrieved: {$sum: "$paidAmount"},money_owed:{$sum: "$remainderAmount"}}}
        ]
    ).exec()
    //let recName = await Retailers.findById(manu_id[0]._id).distinct('retailerName').exec();*/

    
    let tryId = manu_id.forEach(manu_id => {
        manu_id.supplierId = manuId
      })

    

    return manu_id

}
//3.
/*export async function manutotal(manuId){
    const manu_Id = mongoose.Types.ObjectId(manuId);
    let revenue =  await Invoices.aggregate(
        [
            {$match : {manufacturerId : manu_Id}},
            {$group: {_id: null, total_units_sold: {$sum: "$totalQuantity"}, money_retrieved: {$sum: "$paidAmount"},money_owed:{$sum: "$remainderAmount"}}}
        ]
    ).exec()

    //return manufacturer_id


}*/
//4.
export async function moneyOwed(manuId,retId){
    const manu_Id = mongoose.Types.ObjectId(manuId)
    const retailId= mongoose.Types.ObjectId(retId)
    let remainder = await Invoices
    .find({"manufacturerId":manu_Id,"retailerId":retailId}/*{"retailerId":retailId},{"allPaid":false}*/)
    .exec();   
    return remainder;
}

//5.
export async function moneyPaid(manuId,retailId){
    const manu_Id = mongoose.Types.ObjectId(manuId)
    const retId= mongoose.Types.ObjectId(retailId)
    let retrieve = await Invoices
    .find({"manufacturerId":manu_Id,"retailerId":retId,"allPaid":true}/*{"retailerId":retailId},{"allPaid":false}*/)
    .exec();   
    return retrieve;
}

//export default getAllManu 