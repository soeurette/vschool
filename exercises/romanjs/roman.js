//function integer_to_roman(num) {  
//if (typeof num !== 'number')   
//return false;   
//  
//var digits = String(+num).split(""),  
//key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",  
//"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",  
//"","I","II","III","IV","V","VI","VII","VIII","IX"],  
//roman_num = "",  
//i = 3;  
//while (i--)  
//roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;  
//return Array(+digits.join("") + 1).join("M") + roman_num;  
//}  
//  
//console.log(integer_to_roman(501)); 

var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
}
console.log(convertToRoman(100))