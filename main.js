function add (num1 ,num2){
    return num1 + num2;
}
const addition=(sum)=>{
    let num1=4;
    let num2=3;
    if(sum(num1,num2)>10){
        console.log('Hello World');
    }else {
        console.log('Good Bye World');
    }
}
addition(add);

function sub(num1,num2){
    return num1-num2;

}
const substract=(num2)=>{
  console.log('hello world');
}
