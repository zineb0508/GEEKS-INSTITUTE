document.getElementById("lib-button").addEventListener("cilck", function(event){
    event.preventDefault();

const noun = document.getElementById("noun").value
const adjective = document.getElementById("adjective").value
const person = document.getElementById("person").value
const verb = document.getElementById("verb").value
const place = document.getElementById("place").value;
 if (noun && adjective && person && verb && place) {
    const noun =` ${person} went to the ${place} and saw a ${adjective} ${noun} trying to ${verb}.`;

    document.getElementById("story").textContent = story ;
    } else {
        alert("Please fill in all the fields!");
    }
});




