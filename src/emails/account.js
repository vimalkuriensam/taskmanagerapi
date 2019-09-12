const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "vimalkuriensam@gmail.com",
//   from: "vimalkuriensam@gmail.com",
//   subject: "This is my first creation!",
//   text: "I hope this one actually gets to you"
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "admin@taskmanager.io",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}. Let me know how you get along with the app`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "admin@taskmanager.io",
    subject: "Sorry to see you go",
    text: `We are sorry to see you leave ${name}. Please let us know what we could have done to keep you as a member of the taskmanager community. Hope to see you soon!`
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
