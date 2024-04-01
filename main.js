// const debitCard = {
//   pincode: 7777,
//   balance: [5000, -500, -1000, -700, 200],
//   withdrawMoney() {
//     alert(debitCard.pincode)
//     const result = Number(prompt("What's the pincode?"));
//     if (result === debitCard.pincode) {
// const amount = Number(prompt("What's the amount?"));
//  let sum = 0;
//       for (let i = 0; i < debitCard.balance.length; i++) {
//         sum = sum + debitCard.balance[i];
//       }
//     if (amount > sum){
//         alert("insufficient amount");
//     } else{
//       leftover = sum - amount; 
//       console.log(`here is your money${amount}
        
//         your balance is ${leftover}`); 
//     }
//     } else {
//       alert("wrong pin");
//     }
//   },

//   changePin() {
//     const result = Number(prompt("What's the pincode?"));
//     if (result === debitCard.pincode) {
//         const result2 = prompt("what's the new pincode?");
//         debitCard.pincode = result2;
//         alert(`Succesful completion ${debitCard.pincode}`)
//     } 
//     else {
//         alert("wrong pin");
//   }
//   }
// }

// debitCard.changePin();
// debitCard.withdrawMoney();



const burger = document.querySelector(".header__burger");
const topline = document.querySelector(".header__topline");
const btmline = document.querySelector(".header__btmline");
console.log(burger);

burger.addEventListener("click", () => {
  topline.classList.toggle("header__moveTop");
  btmline.classList.toggle("header__moveBtm"); 
})
