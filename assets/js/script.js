
// let check=(num)=>{
//     let result=num%21==0?num/21 : `bolunmur`
//     console.log(result);
// }
// let num=parseInt(prompt());
// check(num);


// let day = 1;
// switch (day) {
//     case 1:
//         console.log("1ci gun");
//         break;

//     default:
//         break;
// } 
// function Test(){
//     let sum=0;
//    for (let index = 0; index < arguments.length; index++) {
//     if (arguments[index]%2==0) {
//         sum+=arguments[index];
//     }
//    }
//    return sum;
    
// }
// console.log(Test(1,2,3,4,6));


let num=prompt();
let result = num;
let sum = "";
for (let i = 0; i < result.length; i++) {
    sum+=num%10;
    num=Math.floor(num/10);
}
if(sum==result){
    console.log("polindrom");
}
else{
    console.log("deyil");
}
