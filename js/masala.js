
// task 1   task 1   task 1   task 1   task 1   task 1   task 1   task 1   task 1   task 1   

function year(num) {
    if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
      return "Bu kabisa yili";
    }
    return "Bu kabisa yili emas";
  }

  let kabiseYear = +prompt('enter Kabisa year...')

  console.log(year(kabiseYear));
  
//   task 2     task 2     task 2     task 2     task 2     task 2     task 2     task 2     task 2     task 2     

//   function num(array) {
//     return array.filter((num) => num < 0);
//   }

//   console.log(num([1, 5, -6, -84, 9, -6]));


//   task 3     task 3     task 3     task 3     task 3     task 3     task 3     task 3     task 3     task 3     

//   function num(son) {
//     let arr = son.split("");
//     if (arr.reverse().join("") == son) {
//       return true;
//     }
//     return false;
//   }
//   console.log(num("2112"));