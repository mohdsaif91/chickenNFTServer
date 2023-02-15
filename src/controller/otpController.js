const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

exports.sendOtp = (req, res) => {
  try {
    console.log(req.body);
    const client = require("twilio")(accountSid, authToken);
    client.messages
      .create({
        body: "9870",
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.mobile,
      })
      .then((message) => console.log(message.sid));
  } catch (error) {
    console.log(error);
  }
};
