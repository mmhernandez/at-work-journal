var entryLogElement = document.querySelector("#entry-log");

function addEntry(event) {
    //prevent default form action to append contents of form to URL
    event.preventDefault();
    
    var newEntryElement = document.querySelector("#entry");
    entryLogElement.innerHTML += `<p>${newEntryElement.value}</p>`;

    newEntryElement.value = '';
}

// ALTERNATE SYNTAX OPTION - when using ID's, don't need to create variables using querySelector or getElementByID, b/c javascript knows the IDs from the html
// WOULD NEED TO UPDATE THE FUNCTION CALL FROM THE HTML
// function addEntry(event, entry, entryLog) {
//     event.preventDefault();
//     entryLog.innerHTML += `<p>${entry.value}</p>`;
//     entry.value = '';
// }

function hide(element) {
    if(element.innerText == "My Journal") {
        element.innerText = "My Work To-Do List";
        entryLogElement.style.display = "none";
    }
    else {
        element.innerText = "My Journal";
        entryLogElement.style.display = "block";
    }
}