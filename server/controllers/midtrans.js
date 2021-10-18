const midtransClient = require("midtrans-client");

class Midtrans {
  static async payment(req, res, next) {
    try {
      const { price, id } = req.body;
      const { firstName, lastName, email } = req.currentUser;
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: "SB-Mid-server-xn-Xkl2DCCrTrCKzMgYSf26o"
      });

      let parameter = {
        transaction_details: {
          order_id: `${Date.now()}-${id}`,
          gross_amount: price
        },
        creadit_card: {
          secure: true
        },
        customer_details: {
          first_name: firstName,
          last_name: lastName,
          email: email
        }
      };

      const transaction = await snap
        .createTransaction(parameter)
        .catch(error => error);
      if (transaction) {
        res.status(201).json(transaction);
      } else {
        next(transaction);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Midtrans;
