// success: function where request successed will be called
// error:   function wehre request failed will be called
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){

    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState === 4) {
            return req.status === 200 ?
                success(req.responseText) : error(req.status);
        }
    }
    url = "http://0.0.0.0:3001/src/back_end_components/database/" + url;
    console.log(url);
    req.open("GET", url, true);
    req.responseType = "text";
    req.send();
    return req;

}

function requestFail() {
    alert("Send request to PHP failed!");
}


function getPassInfo(id){
    var php_add = 'common.php';
    var php_arg = php_add + "?type=3&id=" + id;
    
    getRequest(php_arg, getPassInfoSuccess, requestFail);
}
// responseText: id, seller_id, seller_name, seller_email, price, class, game
function getPassInfoSuccess(responseText){
    /*
     EDIT HERE!
     */
}


/*
 clas: class (U1, U2, U3, U4)
 game: eg. Alabama
 handicapped: true or false
 */
function addPass(email, name, price, clas, game, handicapped){
    var php_add = 'addpass.php';
    var php_arg = php_add + "?email=" + email + "&name=" + name + "&price=" + price + "&class=" + clas + "&game=" + game + "&handicapped=" + handicapped;
    getRequest(php_arg, addPassSuccess, requestFail);
}

// responseText is pass ID
function addPassSuccess(responseText){
    /*
     EDIT HERE!
     */
//    alert(responseText);
}


/*
 clas: class eg. U1, U2, U3, U4
 game: eg. Alabama, Michigan, etc.
 */
function updatePass(pass_id, price, clas, game){
    var php_add = 'updatepass.php';
    var php_arg = php_add + "?pass_id=" + pass_id + "&price=" + price + "&class=" + clas + "&game=" + game;
    
    getRequest(php_arg, updatePassSuccess, requestFail);
}


function updatePassSuccess(responseText){
    // So far no idea what can be returned
}


function getSellerPass(seller_email){
    var php_add = 'getsellerpass.php';
    var php_arg = php_add + "?seller_email=" + seller_email;
    
    getRequest(php_arg, getSellerPassSuccess, requestFail);
}

/*
 example responseText:
 passID, price, class, game
 2,45,U1,Alabama
 3,9999,U3,Michigan
 4,99.9,U4,Alabama
 
 "" if user doesn't selling any pass
 */
function getSellerPassSuccess(responseText){
    /*
     EDIT HERE!
     */
}


function filterPass(price, clas, game){
    var php_add = 'filterpass.php';
    var php_arg = php_add + "?price=" + price + "&class=" + clas + "&game=" + game;
//    alert(php_arg);
    getRequest(php_arg, filterPassSuccess, requestFail);
}

/*
 example responseText:
 passID, seller_name, price, class, game
 2,"Nick Johnson", 45,U1,Alabama
 3, "Hsin-Mei Lin", 9999,U3,Michigan
 4, "Morris Lin", 99.9,U4,Alabama
 
 "" if no result
 */
function filterPassSuccess(responseText){
    //console.log("responseText = ",responseText);
    /*
     EDIT HERE!
     */
    var each_pass = responseText.split("\n");
    var passes = [];
    for(var i = 0 ; i < each_pass.length ; ++i){
        let pass = each_pass[i].split(",");
        var obj = {};

        obj.id = pass[0];
        var id = obj.id;
        if(obj.id === "") continue;
        else{
            obj.id = parseInt(obj.id);
        }

        obj.seller_name = pass[1];
        obj.seller_email = pass[2];
        obj.price = parseFloat(pass[3]);
        obj.class = pass[4];
        obj.game = pass[5];
        obj.handicap = pass[6];
        
        passes.push(obj);
    }
    sessionStorage.setItem("passes", JSON.stringify(passes));
}

function deletePass(pass_id){
    var php_add = 'deletepass.php';
    var php_arg = php_add + "?pass_id=" + pass_id;
    
    getRequest(php_arg, deletePassSuccess, requestFail);
}

function deletePassSuccess(responseText){
    /*
     EDIT HERE!
     */
}

export default{addPass, updatePass, getSellerPass, filterPass, deletePass};

