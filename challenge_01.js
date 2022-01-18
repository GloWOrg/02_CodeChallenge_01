
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let zahl1, zahl2, summe;
zahl1 = prompt("Bitte geben Sie die erste Zahl an:");
zahl2 = prompt("Bitte geben Sie die zweite Zahl an:");
summe = Number(zahl1) + Number(zahl2);
console.log("Die Summe beider Zahlen beträgt: " + summe);


/*eine prompt Eingabe erzeugt immer einen String deshalb muss der Datentyp
in JS bei einer Berechnung vom prompteingaben geändert werden.
summe = Number(zahl1) + Number(zahl2)

wenn zahl1 = 2
wenn zahl2 = 3

Summe ohne typisierung = 23
Summe mit typisierung  = 5

ggf. mit typeof den Datentyp anzeigen lassen

andere Lösungen : 

//summe = parseInt(zahl1) + parseInt(zahl2)//

//aus Ziffern (Strings) eine Zahl (zum rechnen) machen :// 

Number()
parseInt()      //wandelt die Variable direkt in einen INT Wert um
parseFloat()    //wandelt die Variable direkt in einen FLOAT Wert um 
parseDouble()   //wandelt die Variable direkt in einen DOUBLE Wert um

//Deklarierung und prompt zusammenfassen :// 

let zahl1 = prompt("Bitte geben Sie zahl1 ein: ")
let zahl2 = prompt("Bitte geben Sie zahl2 ein: ")
*/


