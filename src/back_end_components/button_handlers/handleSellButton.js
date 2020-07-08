import recreate from "../../index.js";
//import addPass from "../database/calldatabase.js";

import calldatabase from "../database/calldatabase.js";
const addPass = calldatabase.addPass;


function sellPass(seller_email, seller_name, price, classification, game, user, handicap){
    console.log("seller_email: ",seller_email,",  seller_name: ",seller_name," price: ", price," class: ", classification," game: ", game, "handicap: ", handicap);
    addPass(seller_email, seller_name, price, classification, game, handicap);

    alert(`Howdy, ${seller_name}! Congrats on posting a pass for sale!`+
    `It has been posted for $${parseFloat(price).toFixed(2)} with a ${classification} classification for the game againt ${game}!`+
    `A buyer will contact you at ${seller_email}.`+
    `Thanks and Gig 'em!`);
    recreate(user);
}



export default sellPass;
