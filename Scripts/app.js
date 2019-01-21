"use strict"; // triggers compiler to say certain things will give us errors
// self executing Anonymous function - AKA IFFY (Immediately Invoked Function Expression)
(function() {
    let myFunctionalVariable = 0;

    function Start() {
        let myLocalVariable = 0;
        console.log(`App Started... + ${myFunctionalVariable}`);
    }

    window.addEventListener("load", Start);
})();