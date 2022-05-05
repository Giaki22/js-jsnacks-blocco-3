let n = 0;
const list = document.querySelector(".list");
do {
    n = Number(prompt("Inserisci un numero"));
} while (isNaN(n));
for (let i=0; i<n; i++){
    const array=[10];
    for (let j=0; j<10; j++){
        array[j] = Math.floor(Math.random() * 100) + 1;
    }
    const newList = document.createElement('li');
    newList.innerHTML = array;
    list.appendChild(newList);
}