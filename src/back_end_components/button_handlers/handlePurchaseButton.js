import recreate from "../../index.js";

import calldatabase from "../database/calldatabase.js";
import email from "../email/email.js";

const deletePass = calldatabase.deletePass;
const sendEmail = email.sendEmail;

function HandlePurchaseButton(pass, user) {
    alert(`Congratulations on purchasing a ${pass.class} sports pass for the ${pass.game} game for $${pass.price.toFixed(2)}!   \n`+
    `Please contact ${pass.seller_name} at ${pass.seller_email} to arrange a meetup!\n`+
      `Thanks and Gig 'em!`);
          
    deletePass(pass.id);
          
    var buyer = JSON.parse(sessionStorage.getItem('user_profile'));
    
          
    var subject = "Someone Just Purchased Your Ticket!";
    var body = "Hey there, " + buyer.name + " just bought your tickets in the AggiePass! ";
    body = body + "Please contact " + buyer.email + " to arrange further meetup location!\n";
          
          
    sendEmail("aggiepass@gamil.com", pass.seller_email, subject, body);
          
    window.location.replace("mainpage.html");
    recreate(user);
}
          
          
export default HandlePurchaseButton;
