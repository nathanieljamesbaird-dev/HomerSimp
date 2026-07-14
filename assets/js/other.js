function toggleOtherinput() {
        var selectBox = document.getElementById("countrypick");
        var otherContainer = document.getElementById("other-input-container");
        var otherInput = document.getElementById("other_country");

            if (selectBox.value === "other") {
                otherContainer.style.display = "flex";
                otherInput.required = true;
                console.log("It worked!");
            } else {
                otherContainer.style.display = "none";
                otherInput.required = false;
                otherInput.value = "";
            }
        }