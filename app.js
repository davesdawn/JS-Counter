const plus = document.getElementById("increment");
const counter = document.getElementById("counter");
const minus = document.getElementById("decrement");
let count = 0;

currentCount();

plus.addEventListener("click", function(){
     count++;
     currentCount();
});

minus.addEventListener("click", function(){
    count--;
    currentCount();
});

function currentCount() {
    counter.innerText = count;
}

