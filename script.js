let a = 10;
a+=10;
alert (a);



let iphon = "09 января 2007"
alert ( iphon) ;


let name = "Брендан Эйх "  
alert ( name);


let ten =10;
let two = 2;
let sum= ten+two;
let difference= ten-two;
let multiplication = ten*two;
let division = ten/two;
alert('${sum},${difference},${multiplication},${division}');


let result=2**5;
alert (result);

let b=9;
let c=2;
alert( b%c);

let num = 1;
num += 5;
num -=3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);


let age=prompt('Сколько вам лет');
alert(age);



const user ={
    name1:'Стив',
    age1:33,
    isAdmin:false,  
}
user.cityofresidence =true;

delete user.cityofresidence

let info=prompt("Какую информацию хотите узнать о пользователе ?", );
alert(user[info]);



let guest=prompt("Как тебя зовут?");
alert( "Привет, $[guest]!");