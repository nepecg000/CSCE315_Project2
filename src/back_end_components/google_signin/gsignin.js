function onSignIn(googleUser) {
            
    var profile = googleUser.getBasicProfile();
    
    var email = profile.getEmail();
    
    if(email.includes("@tamu.edu")){
        $(".g-signin2").css("display","none");
        $(".data").css("display","block");
        $("#pic").attr('src', profile.getImageUrl());
        $("#email").text(profile.getEmail());
        
        getRequest(
        'getuserid.php',   // URL for the PHP file
        profile.getEmail(),
        profile.getName(),
        drawOutput,  // handle successful request
        drawError    // handle error  
    );
        
        
    }
    else{
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function(){
            alert("Please sign in as a TAMU account!");
            $(".g-signin2").css("display","block");
            $(".data").css("display","none");
        })
    }
    
    
    
    
    
    
}
function drawError() {
    alert("Send request to PHP failed!");
}

function drawOutput(responseText) {
    var user_id = responseText;     // Returned by php, need to be stored somewhere
    alert(user_id);
}
        
function getRequest(url, email, name, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    
    var email_placeholder = "email=";
    var name_placeholder = "name=";
    
    var url_to_send = url + "?" + email_placeholder + email + "&" + name_placeholder + name;
    req.open("GET", url_to_send, true);
    req.send(null);
    return req;
}


function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("You have been successfully signed out!");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    })
}



