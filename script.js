$(document).ready(function(){
    $(".send").click(function(event) {
        
        console.log("clicked");

        let name = $(".form").val();
        let email = $(".form2").val();
        let mesasge = $(".form3").val();
        let validEmail = $(".valid");
        validEmail.empty();

        if(email.includes("@") && email.includes(".")){
            console.log("email valid");
        }else{
            event.preventDefault();
            validEmail.append("<div>Email is not valid<")            
        }


    })
})