const nodemailer = require("nodemailer");

exports.sendMail = (email, subjectName, link) => {
  var transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arshadqadri321@gmail.com",
      pass: "qadri786",
    },
  });
  var mailOption = {
    from: "arshadqadri321@gmail.com",
    to: email,
    subject: subjectName,
    text: link,
  };
  transport.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent", info.response);
    }
  });
};
