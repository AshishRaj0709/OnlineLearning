
    var numbersArray = []; // Initialize an empty array to store numbers

    function addNumber() {
        var input = document.getElementById("inputField").value;
        var number = parseInt(input); // Convert input to a number

        if (!isNaN(number)) { // Check if input is a valid number
            numbersArray.push(number); // Add number to the array
            document.getElementById("inputField").value = ""; // Clear input field
            var array1="";
            for (var i = 0; i < numbersArray.length; i++) {
                array1 += '<div class="square">' + numbersArray[i] + '</div>';
            }
            document.getElementById("output").innerHTML = array1;
        } else {
            document.getElementById("output").innerHTML = "Please enter a valid number.";
        }
    }

    function Ascending() {
        if (numbersArray.length === 0) {
            document.getElementById("output").innerHTML = "Array is empty.";
        } else {
            numbersArray.sort(function(a, b) {
                return a - b; // Sort numbers in ascending order
            });

            var output = "";
            for (var i = 0; i < numbersArray.length; i++) {
                output += '<div class="square">' + numbersArray[i] + '</div>';
            }
            document.getElementById("output").innerHTML = output;
        }
    }

    function Descending() {
        if (numbersArray.length === 0) {
            document.getElementById("output").innerHTML = "Array is empty.";
        } else {
            numbersArray.sort(function(a, b) {
                return a - b; // Sort numbers in ascending order
            });

            numbersArray.reverse();
            var output = "";
            for (var i = 0; i < numbersArray.length; i++) {
                output += '<div class="square">' + numbersArray[i] + '</div>';
            }
            document.getElementById("output").innerHTML = output;
        }
    }
