//activity 1
console.log("Addition Result : ",10+20);
console.log("Substraction Result : ",20-10);
console.log("Multiplication Result : ",20*10);
console.log("Division Result : ",20/10);
console.log("Modulas Result : ",5%2);

//Activity 2
let a=10;
a += 3 // a= 10+3
console.log(`Shorthand Adding : ${a}`);

let b=10;
b-=5 //b=10-5
console.log(`Shorthand Adding : ${b}`);

//Activity 3
let var1=100;
let var2=200;

if(var1<var2)
{
    console.log(`${var1} is less then ${var2}`)
}

let var3= 100;
let var4= 200;
if(var3<var4)
{
    console.log(`${var4} is greater then ${var3}`)
}

let var5= 100;
let var6= 100;
if(var5<=var6)
{
    console.log(`${var5} is less then or equals to  ${var6}`)
}

let var7= 900;
let var8= 100;
if(var7>=var8)
{
    console.log(`${var7} is greater then or equals to  ${var8}`)
}

console.log(10 == '10');
console.log(10 == "Ten");
console.log(10 ==='10');
console.log(100 === 100);


let x=10;
let y=20;

if(x<y && y>=20)
{
    console.log('Done🥂');
}
if(x<y || y>1000)
{
    console.log('Done🥂');
}
let isTrue=true
console.log(!isTrue);

let variable1=-10;
let posOrNeg = (variable1>=0)? "Positive" : "Negative"
console.log(posOrNeg);
