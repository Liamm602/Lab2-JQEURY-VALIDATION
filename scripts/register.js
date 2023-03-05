(function () {
//validates the first and last name input
function ValidateNameInput(inputFieldID, exception) {
    let errorMessage = $('#ErrorMessage').hide()

    $('#' + inputFieldID).on("blur", function() {
        let inputText = $(this).val()
      //got this from a online source to get the number of characters from a string you need to use the .length to get that value (https://stackoverflow.com/questions/20602441/javascript-form-length-validation)
        if (inputText.length < 2) {
          
            //i think this focuses on the input field
            $(this).trigger("focus").trigger("select")
            //puts out error message with the selected messafe you put in the parameter of the function
            errorMessage.addClass("alert alert-danger").text(exception).show()
        } else {
           

            errorMessage.removeAttr("class").hide()
        }
    })
}

//validates the password
function ValidatePasswordInput(exception) {
    let errorMessage = $('#ErrorMessage').hide()
    let submitButton = document.getElementById("submitbutton")
    
    submitButton.addEventListener("click", function() {
        event.preventDefault();
        //getting the values from the input fields
        //got this from a online source getting a value from by its id and putting it into a variable (https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_val_get)
        inputText = $("#password").val();
        inputText2 = $("#confirmPassword").val();

    

        
        //if less or equal to 5
        if (inputText.length <= 5) {
            

            $(this).trigger("focus").trigger("select")

            errorMessage.addClass("alert alert-danger").text(exception).show()
        }else if (inputText2.length <= 5) {
               
    
                $(this).trigger("focus").trigger("select")
    
                errorMessage.addClass("alert alert-danger").text(exception).show()
        //if confirm password does not equal user password
        }else if (!(inputText2 == inputText)) {
               
    
                $(this).trigger("focus").trigger("select")
    
                errorMessage.addClass("alert alert-danger").text(exception).show()
        
        
        } else {
            
            //hides div tag
            errorMessage.removeAttr("class").hide()
        }
    })
    }


function ValidateEmailInput(inputFieldID,regularExpression, exception) {
    let errorMessage = $('#ErrorMessage').hide()
    //when user clicks off of input field check to see if valid
    $('#' + inputFieldID).on("blur", function() {
        let inputText = $(this).val()

        if (inputText.length <= 7) {
            // failure to match full name with regex

            $(this).trigger("focus").trigger("select")

            errorMessage.addClass("alert alert-danger").text(exception).show()
       
       } else if(!regularExpression.test(inputText)) {
       
        $(this).trigger("focus").trigger("select")

        errorMessage.addClass("alert alert-danger").text(exception).show()

           
        }else
        {
            errorMessage.removeAttr("class").hide()
        }
    })
}
//fucntion holds all validation functions with the regex email pattern as well.
function ContactFormValidate() {
    let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-][\D]{2,10}$/g
    
   
    ValidateNameInput("firstName","Either first or last name is less than 2 characters")
    ValidateNameInput("lastName","Either first or last name is less then 2 characters")
    ValidateEmailInput("emailAddress",emailAddressPattern,"Email address does not have at least 8 characters or a @ symbol")
    ValidatePasswordInput("Passwords are not at least 6 characters or do not match")
}
//function for main register actions
function DisplayRegister() {
    
    //getting the submit button
    let submitButton = document.getElementById("submitbutton")
    //makes it so page does not refresh
    event.preventDefault();
    //creates div tag which hold the error messages
    $("header").append(`<div id="ErrorMessage"></div>`)
    

    //calling the function which holds all the validation functions
    ContactFormValidate()
    
    //when the submit button is clicked
    submitButton.addEventListener("click", function() {
        
        //create user instance
        let user = new core.User(firstName.value,lastName.value,emailAddress.value,password.value)
            
       //output values using toString method from user class
       console.log(` ${user.toString()}`)
       //reset form
       //got this from a online source, it resets all input fields (https://stackoverflow.com/questions/17237772/html-how-to-clear-input-using-javascript)
       document.getElementById("myForm").reset();
        
    })
   
 
}


  //function which hold a switch case and activates the display register function based on when you visit the page and its page title
function Start() {
    console.log("App Started Successfully!")

    switch (document.title) {
        case "Register Page":
            DisplayRegister()
            break
    
    

}
}
//event listener for page finishes loading
window.addEventListener("load", Start)
})()