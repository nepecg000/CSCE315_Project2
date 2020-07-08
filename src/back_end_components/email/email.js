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
    url = "http://0.0.0.0:3001/src/back_end_components/email/" + url;
    console.log(url);
    req.open("GET", url, true);
    req.responseType = "text";
    req.send();
    return req;

}

function requestFail() {
    alert("Send request to PHP failed!");
}

function sendEmail(sender, receiver, subject, content){
    var php_add = 'sendEmail.php';
    var php_arg = php_add + "?sender=" + sender + "&receiver=" + receiver + "&subject=" + subject + "&content=" + content; 
    
    getRequest(php_arg, sendEmailSuccess, requestFail);
}
function sendEmailSuccess(responseText){
//    console.log(responseText);
}

export default{sendEmail};

