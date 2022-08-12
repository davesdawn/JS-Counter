let plus = document.getElementById("increment");
let counter = document.getElementById("counter");
let minus = document.getElementById("decrement");
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

