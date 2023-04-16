// //Task#1
// let firstName = prompt('Enter your name');
// let lastName = prompt('Enter your Last Name');
// let email = prompt('Enter your Email');
// function result(){
//     alert( email + lastName + " " + firstName);
// }
// result();




// //Task#2
// const deliveryCost = 5;
// let length = prompt('Enter the distance in km');
// let sum = 0.25;
// function result(){
//    alert(deliveryCost + (length*sum));

// }
// result()




// //Task#3
// let quantity = prompt('Enter the quantity of the product');
// let promotion = 10;
// let promotion1 = 15;
// let answer = promotion + promotion1;
// let participateInPromotion = prompt("Enter yes/no");
// let answer1 = ("You don't have discount's");
// function result(){
//     if(quantity >= 5 && participateInPromotion =="yes"){
//         alert(answer + "%");
//     }
//     else if(quantity >=5 && participateInPromotion == "no"){
//         alert(promotion + "%");
//     }
//     else if(quantity <=5 && participateInPromotion =="yes"){
//         alert(promotion1 + "%")
//     }
//     else if(quantity <=5 && participateInPromotion == "no"){
//         alert(answer1)
//     }
// }
// result()

// //Task#4 В этом задании помогал Шамиль.Oтчасти просила помощь у него :')
// let small = 2;
// let middle = 4;
// let large = 8;
// let number = prompt("Enter the number of the guests,please;");
// function result(){
//     if(number>large){
//         alert("The restaurant will not b e able to accommodate a company of more than 8 people within one table :'(");
//     }
//     else if (number <= small){
//         alert("We have small table for you")
//     }
//     else if(number>small && number <=middle){
//         alert("We have medium table for you");
//     }
//     else if(number> middle && number <=large){
//         alert("We have large table for you");
//     }

// }
// result()



// //Task#5
// let a = prompt("Enter the first temperature");
// let b = prompt("Enter the second temperature");
// let c = prompt("Enter the third temperature");
// function result(){
// if(a > b && a > c && b > c){
   
//     alert(a + " " + b + " " + c)
// }
//  else if(b > a && b > c && a > c){
    
//     alert(b + " " + a + " " + c)
    
//  }
//  else if(c > a && c > b && b > a){
    
//     alert(c + " " + b + " " + a)
//  }
//  else if(a > b && a > c && c > b){
    
//     alert(a + " " + c + " " + b)
//  }
//  else if(b > a && b > c && c > a){
    
//     alert(b + " " + c + " " + a)
//  }
//  else if(c > a && c > b && a > b){
    
//     alert(c + " " + a + " " + b)
//  }
// }
// let newResult = result();
// console.log(newResult);




// //Task#6
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age");
// let theNumber = prompt("Enter the number of orders:");
// let amountOfOrfders = ("Enter the amount of orders,please:");
// function result(){
//     if(age >60 || (theNumber >= 4 && amountOfOrfders >= 100)){
//         alert("You're offered the discount");
//     }
//     return alert(name + " " + age + " " + theNumber + " " + amountOfOrfders)
// }
// result()



// //Task#7
// let length = prompt("Enter the length");
// let width = prompt("Enter the width");
// let height = prompt("Enter the height");
// let sum = length + width + height;
// let weight = prompt("Enter the weight");
// let distance = prompt("enter the distance");
// function result(){
//     if(sum > 150){
//         alert("The sum of the length,width and height of an item doesn't exceed 150sm");
//     } 
//     else if(length > 100 || width > 100 || height > 100){
//         alert("None of the measurements exceed 100sm");
//     }
//     else if(weight > 10){
//         alert("The weight of the shipment doesn't exceed 10kg");
//     }
//     else if(distance < 3 || distance > 10){
//         alert("Delivery distance is in the range of 3 to 10km")
//     }
//     else{
//         alert("The order was correct and accepted")
//     }
// }
// result()




//Task#8
let writeANumber = prompt("Enter the number");
let ones = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tens = [" ","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function result(){
    alert(ones+tens)
}
result()
 


// //Task#9
// let n = prompt("Enter the number,please");
// function result(){

//     for(let i = 1; i <= 1000;i++){
//         if(i%n==0){
//             console.log(i);
//         }
//     }
// }
// result()
 




// //Task#10
// let initialAmount = prompt("Enter initial amount,please");
// let durationInYears = prompt("Enter duration in year");
// let procents = 10;
// function result(){
//     alert((initialAmount*procents)/100)
// }
// result()


//Task#11




//Task#12




//Task#13
