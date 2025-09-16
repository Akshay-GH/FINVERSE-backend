const express = require('express');
const router = express.Router();
const {authMiddleware} = require("../gate/middleware.js");
const {Account} = require("../db/dbSchema.js");


router.get('/balance',authMiddleware,async (req,res)=>{
    const {balance} = await Account.findOne({userId:req.userId});
    if(!balance){
        return res.status(404).json({error:"Account not found"});
    }

    res.json({
        balance
    })
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const { amount, to } = req.body;

    const account = await Account.findOne({
        userId: req.userId
    });

    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
     });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
     }, {
        $inc: {
            balance: -amount
        }
     })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
});


module.exports = router;



// async function transfer(req){
//      const { amount, to } = req.body;

//     const account = await Account.findOne({
//         userId: req.userId
//     });

//     if (account.balance < amount) {
//         return res.status(400).json({
//             message: "Insufficient balance"
//         })
//     }

//     const toAccount = await Account.findOne({
//         userId: to
//     });

//     if (!toAccount) {
//         return res.status(400).json({
//             message: "Invalid account"
//         })
//     }

//     await Account.updateOne({
//         userId: req.userId
//     }, {
//         $inc: {
//             balance: -amount
//         }
//     })

//     await Account.updateOne({
//         userId: to
//     }, {
//         $inc: {
//             balance: amount
//         }
//     })

//     // res.json({
//     //     message: "Transfer successful"
//     // })

// }


// transfer({
//     userId:"68c70219e0916e243e96b69e",
//     body:{
//         amount:5000,
//         to:"68c70aac042be6db3dd81383"
//     }
// })

// transfer({
//     userId:"68c70219e0916e243e96b69e",
//     body:{
//         amount:500,
//         to:"68c70aac042be6db3dd81383"
//     }
// })



