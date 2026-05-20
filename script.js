console.log("BetMart Loaded Successfully");

const oddsButtons = document.querySelectorAll(".odds button");

oddsButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("selected");

        if(button.classList.contains("selected")){
            button.style.background = "#00ff88";
            button.style.color = "#000";
        }else{
            button.style.background = "#1f2937";
            button.style.color = "#fff";
        }

    });

});