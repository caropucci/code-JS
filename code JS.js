

function aireTriangle(base, hauteur) {
  return (base * hauteur) / 2;
}
console.log(aireTriangle(10, 5))



function factorielle(n){
  let res = 1;
  for (let i = 1; i <=+1; i++){
    res = res * i;
  }
  return res;
}
console.log(factorielle(5))





function LePlusGrand(a, b, c) {
max =0;
  if (a > b){
    max = a;
  }
  else{
    max = b;
  }
  if (c > max){
    max = c;
  }
  return max;
}
console.log(LePlusGrand(5, 9, 3))



function dernierElement(tab){
  return tab[tab.length - 1];
}
console.log(dernierElement([1, 2, 3, 4, 5]))



function concatTwoString(str1, str2){
  return `&{str1} | ${str2}`
}
console.log(concatTwoString("Hello", "World"))



function checkStringSameLength(str1, str2){
  return (str1.lengt === str2.length)
}
console.log(checkStringSameLength("Hello", "World"))



function checkIfPaire(n){
  if(n%2 === 0){
    return console.log(`&{n} est paire`)
  }else{ 
  return console.log(`&{n} est impaire`)
  }
}


