const { exit } = require("process");

const prompt = require("prompt-sync")();


// Data for Students

let indices = [];
let firstName = [];
let lastName = [];
let studentNumber = [];

// Welcome Page

const welcomePage = () => {
    console.log("\nWelcome To Student Management System\n");

    console.log("1 = Create");
    console.log("2 = Retrieve");
    console.log("3 = Update");
    console.log("4 = Delete");
    console.log("5 = Exit Program\n");

    while (true) {
        let choice = prompt("Input: ");
        if (!isNaN(choice) && (choice > 0 && choice < 6)){

            switch(choice){
                case "1": 
                    createPage();
                    break;
                case "2":
                    if(validation()) { break; }
                    retrievePage();
                case "3":
                    if(validation()){ break; }
                    updatePage();
                case "4":
                    if (validation()){ break; } 
                    deletePage();
                case "5":
                    throw exit;
            }    
        }
        else{
            console.log("\nInvalid Input, Please Try Again !!!\n");
        }
    }
}   

// Validation Partials

const validation = () => {
    if(indices.length === 0){
        console.log("There is no information in the database please input some information");  

        return true
    }
    return false
}


// Create Page

const createPage = () => {

    console.log("\nCreate Student Information\n")

    indexSize = indices.length + 1;
    for (let i = 0; i < indexSize; i++){
        if (indices[i] == undefined){
            indices.push(i + 1);
            firstName.push(prompt("First Name: "));
            lastName.push(prompt("Last Name: "));
            studentNumber.push(prompt("Student Number: "));
        }
    }    
    console.log("\nInput Has Been Completely Registered")
    welcomePage();
}


// Retrieve Page

const retrievePage = () => {
    console.log("\nList of Registered Students\n")
    studentLists();
    welcomePage();
}

const studentLists = () => {
    console.log("No. \t Name \t\t\t Student Number\n");
    for(let i = 0; i <= indices.length - 1; i++){
        console.log(`${indices[i]} \t ${firstName[i]} ${lastName[i]} \t ${studentNumber[i]}`)
    }
}


// Update Page 

const updatePage = () => {
    console.log("\nUpdate Student Info\n")
    console.log("INSTRUCTION: To update student information you must \n  input their corresponding registered number\n")
    studentLists();

    while (true){
        let choice = prompt("\nInput: ");

        if (!isNaN(choice) && (choice > 0 && choice < indices.length + 1)){
            index = (Number(choice) - 1)
            console.log("\nYou're about to change", firstName[index] + "'s", "information\n");
            
            changePage(index)
        }
        else{
            console.log("\nInvalid Input, Please Try Again !!!\n")
        }
    }
}


const changePage = (index) => {

    console.log("Which information would you like to change\n");
    console.log("1 = First Name")
    console.log("2 = Last Name")
    console.log("3 = Student Number\n")

    while (true){
        let choice = prompt("Input: ");
        if (!isNaN(choice) && (choice > 0 && choice < 4)){
            switch(choice){
                case "1":
                    firstName[index] = prompt("\nNew First Name: ")
                    break;
                case "2":
                    lastName[index] = prompt("\nNew Last Name: ")
                    break;
                case "3":
                    studentNumber[index] = prompt("\nStudent Number: ")
                    break;
            }
            break;
        }
        else{
            console.log("\nInvalid Input, Please Try Again !!!\n")
        }
    }
    studentLists();
    console.log("\nThe Information Has Been Updated")
    welcomePage();
}

// Delete Page 

const deletePage = () => {
    console.log("\nDelete Student Information")
    console.log("\nINSTRUCTION: To delete student information you must  \n input their corresponding registered number\n")
    studentLists();

    while (true){
        let choice = prompt("Input: ");

        if (!isNaN(choice) && (choice > 0 && choice < indices.length + 1)){
            index = (Number(choice) - 1)

            indices.splice(index, 1);
            firstName.splice(index, 1);
            lastName.splice(index, 1);
            studentNumber.splice(index, 1);

            reset();
            break;
        }
        else{
            console.log("Invalid Input, Please Try Again !!!")
        }
    }
    console.log("\nThe Information Has Been Deleted")
    welcomePage();
}

const reset =  () => {
    const indexSize = indices.length;
    for(let i = 0; i < indexSize; i++){
        indices.push(i + 1);
    }
}

welcomePage();



