const midtransClient = require("midtrans-client");
class Midtrans {
  static async payment(req, res, next) {
    try {
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: "SB-Mid-server-xn-Xkl2DCCrTrCKzMgYSf26o"
      });

      let parameter = {
        transaction_details: {
          order_id: "YOUR-ORDERID-123456",
          gross_amound: 10000
        },
        creadit_card: {
          secure: true
        },
        customer_detail: {
          first_name: "budi",
          last_name: "pratama",
          email: "budi.pra@example.com",
          phone: "08111222333"
        }
      };

      snap
        .createTransaction(parameter)
        .then(transaction => {
          console.log(transaction);
          res.redirect(transaction.redirect_url);
        })
        .catch(error => next(error.response));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Midtrans;
