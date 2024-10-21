/*

let uname = "Ajith";

uname = "kumar";
// uname= true;  // error

let age: number;
age = 64;

let a: string | number | boolean | number[];
a = "f";
a = 44;
a = true;
a = [3, 2, 3, 4];

let arr: string[] = [];

arr[0] = "hallo";
arr[1] = "hallo";
// arr[1]=88;//error

let arr1: (string | number)[] = [];

arr1[0] = "hhh";
arr1[0] = 34;
// arr1[0]=true;//error

let arr3: any[] = [];

arr3[0] = "d";
arr3[0] = 33;
arr3[0] = true;
arr3[0] = "d";

function doAdd(a: number, b: number): number {
  let sum = a + b;
  return sum;
}
let result = doAdd(3, 6);
console.log(result);
*/
let login: any[] = ["vicky"];

login[0] = ["santhosh"];
login[2] = "uraj";

function doClick(a: any, b: any): any {
  let sum = a + b;
  return sum;
  console.log(sum); //27
}
doClick(12, 15);
console.log(doClick(12, 15));
