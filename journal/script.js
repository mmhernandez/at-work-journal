var entryLogElement = document.querySelector("#entry-log");

function addEntry(event) {
    //prevent default form actin to append contents of form to URL
    event.preventDefault();
    
    var newEntryElement = document.querySelector("#entry");
    entryLogElement.innerHTML += `<p>${newEntryElement.value}</p>`;

    newEntryElement.value = '';
}

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