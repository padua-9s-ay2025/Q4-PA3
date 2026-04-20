function checkSection() {
var sectionCode = document.getElementById('sectionInput').value;

    switch (sectionCode) {
        case "F":
            document.getElementById('result').innerHTML= "You're checking the Fiction Section";
            break;

        case "N":
            document.getElementById('result').innerHTML= "You're checking the Non-Fiction Section"; 
            break;

        case "R":
            document.getElementById('result').innerHTML= "You're checking the Reference Section"; 
            break;

        default:
        document.getElementById('result').innerHTML="Invalid Section Entry";
    }
}