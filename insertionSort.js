var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i]; ///temp'i key gibi düşünebiliriz. dizinin i.elemanına 
    var j = i - 1;  ///j değeri key değerinin solunda kalan sayıları kontrol edebilmemiz için kullandığımız bir değişken.i=1 ise j bir sağındaki sayıdan başlatıyorum key değerini.j değeri arrayin kaydırdığımız elemanının indexi.
    while (j >= 0 && array[j] > temp) {  ///temel şart j değeri>key olmasıdır.döngü dönmesi için.kaydırma işlemi için
      array[j + 1] = array[j];  ///j'yi bir ileri,sağa hareket ettir.kaydırır.tek adım kaydırma işlemi.
      j--; ////her adımda bir azaltırız. j=j-1 'de diyebilirim.
    }
    array[j + 1] = temp; ///kaydırdık artık indexi yerleştirmeyi yani atamayı yapıyorum.Bu satır doğru pozisyona eleman ekleme işlemini gerçekleştiriyor.
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
