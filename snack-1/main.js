let n = [];
let s = 0;
let i = 0;
do {
    do {
        n[i] = Number(prompt("Inserisci un numero"));
    } while (isNaN(n[i]));
        s += n[i];
        i++;
} while (s<50);
if (s>50){
    n.pop();
}
console.log(n);