let n = [];
let s = 0;
let i = 0;
do {
        n[i] = Number(prompt("Inserisci un numero"));
        s += n[i];
        console.log(n);
        i++;
} while (s<50);