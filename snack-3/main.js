let n = [];
const redList = document.getElementById('red');
const greenList = document.getElementById('green');
for (let i=0; i<Math.floor(Math.random() * 20) + 1; i++){
    n[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(n);
for (let i=0; i<n.length; i++){
    const li = document.createElement("li");
    li.innerHTML = n[i];
    if ( n[i] % 2 == 0){
        redList.appendChild(li);
    } else {
        greenList.appendChild(li);
    }
}