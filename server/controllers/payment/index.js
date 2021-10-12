"use strict"

const CoreApi = require('../midtrans/CoreApi')
const BankTransfer = require('./BankTransfer')
class Index {
    static async bankTransfer({req, res}) {
        let data
        let body =  req.body;
        let customers = {
            email: "alim@mail.com",
            first_name: "alim",
            last_name: "makruf",
            phone: "08123456789"
        }

        let bankTransfer = new BankTransfer(body.items, customers)
        switch (body.channel) {
            case "BCA":
                data = bankTransfer.bca()
                break;
            case "BNI":
                data = bankTransfer.bni()
                break;
            case "PERMATA":
                data = bankTransfer.permata()
                break;
        }
        return data
        return CoreApi.charge(data)
    }
}

module.exports = Index