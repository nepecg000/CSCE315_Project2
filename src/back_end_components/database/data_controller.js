import calldatabase from "./calldatabase.js";
const filterPass = calldatabase.filterPass;

let passes = filterPass(0,"","");

passes = sessionStorage.getItem("passes");

//console.log("pulled passes: ", JSON.parse(passes));
/*

    EDIT HERE

*/


//let passes_data_temp = require("./available_passes.json");
//console.log(passes_data_temp.passes);
//passes = passes_data_temp.passes;

const passes_data = {max_id: 0, passes: JSON.parse(passes)};
export default passes_data;
