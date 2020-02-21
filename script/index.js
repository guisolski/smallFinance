function nextPage(){
    window.location.href ="pages/main.html";
}
function callNextPage(){
    $("#signIn").click(nextPage);
    $("#password").keypress(function(e) {
        if (e.keyCode == 13) {
            nextPage();
        }
    });
}
$(document).ready(function(){
    callNextPage();
});
    
