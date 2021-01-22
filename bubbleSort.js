const arr=[2,4,7,3,8,2,9];
const myFunc=function bubbleSort(arr){
for(var i=0;i<arr.length;i++){
 for(var j=0;j<arr.length-1;j++){
   if(arr[j]>arr[j+1]){
     const temp = arr[j];
     arr[j] = arr[j+1];
     arr[j+1] = temp;
   }
 }
}
return arr;
}
console.log(myFunc(arr)); //[2, 2, 3, 4, 7, 8, 9]
