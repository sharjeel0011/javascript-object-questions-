//object k andar method 
// const  studentInfo = {
//     name : "ali",
//     age : 15 ,
//     class : "web & app devolopment",
//     batch : 10 ,
//     teacher : "sir uzair Muzzafer ",
//     getinfo:function(){
//         return `name is ${this.name} age is ${this.age} class is ${this.class} batch is ${this.batch} teacher ${this.teacher}`
//     }

// }
// const info = studentInfo.getinfo()
// console.log(info)


//convert to objec array of array 
// const  studentInfo = {
//     name : "ali",
//     age : 15 ,
//     class : "web & app devolopment",
//     batch : 10 ,
//     teacher : "sir uzair Muzzafer ",
//     getinfo:function(){
//         return name is ${this.name} age is ${this.age} class is ${this.class} batch is ${this.batch} teacher ${this.teacher}
//     }

// }
// const info = studentInfo.getinfo()
// console.log(info)

// function studentInfor(){
//     const getKey = Object.keys(studentInfo);
//     const getValues = Object.values(studentInfo);
//     const entries = Object.entries(studentInfo);
//     console.log(entries)
// }
// studentInfor()



//get area of rectengal 
// const rectangle = {
// width :20 ,
// height : 20,
// getArea:function(){
// return  this.width * this.height
// },
// getPerimeter:function(){
//     return (this.height + this.width) * 2;
//     }
// }
// const area = rectangle.getArea();
// const perimeter = rectangle.getPerimeter();
// console.log(perimeter)


//3. Write a JavaScript program that creates a object called 'vehicle' with properties for make, model, and year. Include a method to display vehicle detail
// const vecal ={
//     make : "Honda",
//     model : "civic" ,
//     year : 2024,
// vecalDetails :function(){
//     return `make for: ${this.make}  model is: ${this.model} vecal year: ${this.year}`
// }
// }
// const method = vecal.vecalDetails()
// console.log(method)

// 4. Write a JavaScript program that creates a object called "bankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account
//its my 
// const bankAccount = {
// accountNumber : 10101010101010,
// balance : 5000,
// deposite : function(amount){
// if(amount>=500){
// return`this is your deposite  amount ${amount} this is your last balance ${this.balance} tottal balance availabel ${this.balance+=amount} `
// }else{return`plese inter valid amount minimum 500PKR other wise not be dedposite `}
// },

// widthdrew : function(amount){
// if (amount>=500){
//     const availabelBalance = amount-this.balance
//     return `you widthdrew ${amount} availabel Balance ${availabelBalance} `
// }else{
//     return `plese enter amount minimum 500`
// }
// }

// }
// //use like this 
// const userdeposite = bankAccount.deposite()
// const userWidthDrew = bankAccount.widthdrew(400)
// console.log(userdeposite)
// console.log(userWidthDrew)



//its chat gpt
// const bankAccount = {
//     accountNumber: 10101010101010,
//     balance: 5000,
//     deposit: function (amount) {
//       if (amount >= 500) {
//         this.balance += amount;
//         return `This is your deposit amount: ${amount}. Your new balance is ${this.balance}. Total balance available: ${this.balance}`;
//       } else {
//         return `Please enter a valid amount, minimum 500 PKR, otherwise, the deposit cannot be made.`;
//       }
//     },
//   };
  
//   // Get the deposit amount from the user
//   const depositAmount = parseFloat(prompt("Enter the deposit amount in PKR:"));
  
//   if (!isNaN(depositAmount)) {
//     const depositResult = bankAccount.deposit(depositAmount);
//     console.log(depositResult);
//   } else {
//     console.log("Invalid input. Please enter a valid numeric amount.");
//   }
  //6. Write a JavaScript program that creates a object called 'employee' with properties for name and salary. Include a method to calculate annual salary.
// const employee = {
//     namee : "aliZ" ,
//     salary : 6000,
//     month : 12 ,
//     anualSalary : function(){
//         const totalsalaries =  this.salary*this.month
//         return`Empoly Name ${this.namee}.Empoly Salary ${this.salary}. Anual Salary ${totalsalaries} `
//     }
// }
// const anualSalarys = employee.anualSalary()
// console.log(anualSalarys)

// 7. Write a JavaScript program that creates a object `book` with properties for title, author, and publication year. Include a method to display book details.

// const book  = {
// Tittel : "Sadqa",
// Author : "Mulana Bashir Farooq Qadri",
// publicationYear :  " 2017-04-25",
// bookDetails : function(){
//     const detais =  `Book tittel ${this.Tittel} Book Author ${this.Author} and this book publication year ${this.publicationYear}`
//      return detais
// },
// }
// console.log(book.bookDetails())
  

//8. Write a JavaScript program that creates a object called 'animal' with properties for species and sound. Include a method to make the animal's sound.
// const animal = {
//     cat : "meao! meao!",
//     dog : "bhooo! bhoo!",
//     perot : "methTho! methTho!",
//     animalsSound : function(){
//         return `cat sound:${this.cat}  Dog  sound : ${this.dog}  perot sound: ${this.perot}  `
//     }
// }
// console.log(animal.animalsSound())
// 9. Write a JavaScript program that creates a object called bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches.

const bank = {
    bankName: "My Bank",
    branches: [],
  
    // Method to add a branch
    addBranch: function (branchName) {
      this.branches.push(branchName);
      return `${branchName} branch has been added to ${this.bankName}.`;
    },
  
    // Method to remove a branch
    removeBranch: function (branchName) {
      const index = this.branches.indexOf(branchName);
      if (index !== -1) {
        this.branches.splice(index, 1);
        return `${branchName} branch has been removed from ${this.bankName}.`;
      } else {
        return `${branchName} branch not found in ${this.bankName}.`;
      }
    },
  
    // Method to display all branches
    displayBranches: function () {
      return `Branches of ${this.bankName}: ${this.branches.join(", ")}`;
    },
  };
  
  // Example usage:
  console.log(bank.addBranch("Main Branch")); // Add Main Branch branch to My Bank.
  console.log(bank.addBranch("Downtown Branch")); // Add Downtown Branch branch to My Bank.
  console.log(bank.displayBranches()); // Branches of My Bank: Main Branch, Downtown Branch.
  console.log(bank.removeBranch("Main Branch")); // Remove Main Branch branch from My Bank.
  console.log(bank.displayBranches()); // Branches of My Bank: Downtown Branch.
  console.log(bank.removeBranch("Unknown Branch")); // Unknown Branch branch not found in My Bank.
  






