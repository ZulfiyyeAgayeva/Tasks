// Array və string metodlarından istifadə edərək array-imizdə promptdan gələn dəyərin neçə ədəd olduğunu tapan script yazın. Məsələn promptdan "a" dəyəri gəlirsə tərkibində 
// "a" olan sözlərin sayını qaytarsın.
 var names = ["Eli", "Elihuseyn", "Elsever", "Elimemmed", "Vidadi", "Veli", "Aygun" ];
 var herf = prompt("Herfi daxil edin:")
 var netice = find (herf);
 alert("Herf sayi:" + netice);

function find(herf){
var toplam = 0;
for(var i=0; i<names.length; i++){
    if(names[i]==herf){
        toplam+=1;
    }
}
return toplam;
}