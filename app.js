let x;
let O;
let active_player = 0;
let score;
function funp_1() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll1.innerHTML !== x && roll1.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-1").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-1").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll1.innerHTML === x && roll2.innerHTML === x && roll3.innerHTML === x) {
        roll1.style.color = "red";
        roll2.style.color = "red";
        roll3.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === x && roll4.innerHTML === x && roll7.innerHTML === x) {
        roll1.style.color = "red";
        roll4.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === x && roll5.innerHTML === x && roll9.innerHTML === x) {
        roll1.style.color = "red";
        roll5.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === O && roll2.innerHTML === O && roll3.innerHTML === O) {
        roll1.style.color = "red";
        roll2.style.color = "red";
        roll3.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll1.innerHTML === O && roll4.innerHTML === O && roll7.innerHTML === O) {
        roll1.style.color = "red";
        roll4.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll1.innerHTML === O && roll5.innerHTML === O && roll9.innerHTML === O) {
        roll1.style.color = "red";
        roll5.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_2() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll2.innerHTML !== x && roll2.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-2").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-2").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll1.innerHTML === x && roll2.innerHTML === x && roll3.innerHTML === x) {
        roll1.style.color = "red";
        roll2.style.color = "red";
        roll3.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll2.innerHTML === x && roll5.innerHTML === x && roll8.innerHTML === x) {
        roll2.style.color = "red";
        roll5.style.color = "red";
        roll8.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === O && roll2.innerHTML === O && roll3.innerHTML === O) {
        roll1.style.color = "red";
        roll2.style.color = "red";
        roll3.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll2.innerHTML === O && roll5.innerHTML === O && roll8.innerHTML === O) {
        roll2.style.color = "red";
        roll5.style.color = "red";
        roll8.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_3() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll3.innerHTML !== x && roll3.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-3").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-3").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll1.innerHTML === x && roll2.innerHTML === x && roll3.innerHTML === x) {
        roll1.style.color = "red";
        roll2.style.color = "red";
        roll3.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll3.innerHTML === x && roll6.innerHTML === x && roll9.innerHTML === x) {
        roll3.style.color = "red";
        roll6.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll3.innerHTML === x && roll5.innerHTML === x && roll7.innerHTML === x) {
        roll3.style.color = "red";
        roll5.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === O && roll2.innerHTML === O && roll3.innerHTML === O) {
        roll1.style.color = "red";
        roll2.style.color = "red";
        roll3.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll3.innerHTML === O && roll6.innerHTML === O && roll9.innerHTML === O) {
        roll3.style.color = "red";
        roll6.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll3.innerHTML === O && roll5.innerHTML === O && roll7.innerHTML === O) {
        roll3.style.color = "red";
        roll5.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_4() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll4.innerHTML !== x && roll4.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-4").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-4").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll1.innerHTML === x && roll4.innerHTML === x && roll7.innerHTML === x) {
        roll1.style.color = "red";
        roll4.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll4.innerHTML === x && roll5.innerHTML === x && roll6.innerHTML === x) {
        roll4.style.color = "red";
        roll5.style.color = "red";
        roll6.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === O && roll4.innerHTML === O && roll7.innerHTML === O) {
        roll1.style.color = "red";
        roll4.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll4.innerHTML === O && roll5.innerHTML === O && roll6.innerHTML === O) {
        roll4.style.color = "red";
        roll5.style.color = "red";
        roll6.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_5() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll5.innerHTML !== x && roll5.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-5").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-5").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll2.innerHTML === x && roll5.innerHTML === x && roll8.innerHTML === x) {
        roll2.style.color = "red";
        roll5.style.color = "red";
        roll8.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll3.innerHTML === x && roll5.innerHTML === x && roll7.innerHTML === x) {
        roll3.style.color = "red";
        roll5.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === x && roll5.innerHTML === x && roll9.innerHTML === x) {
        roll1.style.color = "red";
        roll5.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll4.innerHTML === x && roll5.innerHTML === x && roll6.innerHTML === x) {
        roll4.style.color = "red";
        roll5.style.color = "red";
        roll6.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll2.innerHTML === O && roll5.innerHTML === O && roll8.innerHTML === O) {
        roll2.style.color = "red";
        roll5.style.color = "red";
        roll8.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll3.innerHTML === O && roll5.innerHTML === O && roll7.innerHTML === O) {
        roll3.style.color = "red";
        roll5.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll1.innerHTML === O && roll5.innerHTML === O && roll9.innerHTML === O) {
        roll1.style.color = "red";
        roll5.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll4.innerHTML === O && roll5.innerHTML === O && roll6.innerHTML === O) {
        roll4.style.color = "red";
        roll5.style.color = "red";
        roll6.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_6() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll6.innerHTML !== x && roll6.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-6").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-6").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll3.innerHTML === x && roll6.innerHTML === x && roll9.innerHTML === x) {
        roll3.style.color = "red";
        roll6.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll4.innerHTML === x && roll5.innerHTML === x && roll6.innerHTML === x) {
        roll4.style.color = "red";
        roll5.style.color = "red";
        roll6.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll3.innerHTML === O && roll6.innerHTML === O && roll9.innerHTML === O) {
        roll3.style.color = "red";
        roll6.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll4.innerHTML === O && roll5.innerHTML === O && roll6.innerHTML === O) {
        roll4.style.color = "red";
        roll5.style.color = "red";
        roll6.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_7() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll7.innerHTML !== x && roll7.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-7").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-7").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll1.innerHTML === x && roll4.innerHTML === x && roll7.innerHTML === x) {
        roll1.style.color = "red";
        roll4.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll3.innerHTML === x && roll5.innerHTML === x && roll7.innerHTML === x) {
        roll3.style.color = "red";
        roll5.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll7.innerHTML === x && roll8.innerHTML === x && roll9.innerHTML === x) {
        roll7.style.color = "red";
        roll8.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === O && roll4.innerHTML === O && roll7.innerHTML === O) {
        roll1.style.color = "red";
        roll4.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll3.innerHTML === O && roll5.innerHTML === O && roll7.innerHTML === O) {
        roll3.style.color = "red";
        roll5.style.color = "red";
        roll7.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll7.innerHTML === O && roll8.innerHTML === O && roll9.innerHTML === O) {
        roll7.style.color = "red";
        roll8.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_8() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll8.innerHTML !== x && roll8.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-8").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");;
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-8").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll2.innerHTML === x && roll5.innerHTML === x && roll8.innerHTML === x) {
        roll2.style.color = "red";
        roll5.style.color = "red";
        roll8.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll7.innerHTML === x && roll8.innerHTML === x && roll9.innerHTML === x) {
        roll7.style.color = "red";
        roll8.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll2.innerHTML === O && roll5.innerHTML === O && roll8.innerHTML === O) {
        roll2.style.color = "red";
        roll5.style.color = "red";
        roll8.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll7.innerHTML === O && roll8.innerHTML === O && roll9.innerHTML === O) {
        roll7.style.color = "red";
        roll8.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}
function funp_9() {
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    if(roll9.innerHTML !== x && roll9.innerHTML !== O ) {
        if(active_player === 0) {
            x = "X";
            document.querySelector(".roll-9").innerHTML = x;
            active_player = 1;
            document.getElementById("player-0").classList.remove("player-active");
            document.getElementById("player-1").classList.add("player-active");
        }
        else if (active_player === 1) {
            O = "O";
            document.querySelector(".roll-9").innerHTML = O;
            active_player = 0;
            document.getElementById("player-0").classList.add("player-active");
            document.getElementById("player-1").classList.remove("player-active");
        }
    }
    if (roll1.innerHTML === x && roll5.innerHTML === x && roll9.innerHTML === x) {
        roll1.style.color = "red";
        roll5.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll3.innerHTML === x && roll6.innerHTML === x && roll9.innerHTML === x) {
        roll3.style.color = "red";
        roll6.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll7.innerHTML === x && roll8.innerHTML === x && roll9.innerHTML === x) {
        roll7.style.color = "red";
        roll8.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-0").classList.add("winner");
        document.getElementById("player-1").classList.remove("player-active");
        document.getElementById("name1").innerHTML = " Player X Winner!"
    }
    if (roll1.innerHTML === O && roll5.innerHTML === O && roll9.innerHTML === O) {
        roll1.style.color = "red";
        roll5.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll3.innerHTML === O && roll6.innerHTML === O && roll9.innerHTML === O) {
        roll3.style.color = "red";
        roll6.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
    if (roll7.innerHTML === O && roll8.innerHTML === O && roll9.innerHTML === O) {
        roll7.style.color = "red";
        roll8.style.color = "red";
        roll9.style.color = "red";
        active_player = 2;
        document.getElementById("player-1").classList.add("winner");
        document.getElementById("player-0").classList.remove("player-active");
        document.getElementById("name2").innerHTML = " Player O Winner!"
    }
}

function funcNew() {
    active_player = 0;
    let roll1 = document.querySelector(".roll-1");
    let roll2 = document.querySelector(".roll-2");
    let roll3 = document.querySelector(".roll-3");
    let roll4 = document.querySelector(".roll-4");
    let roll5 = document.querySelector(".roll-5");
    let roll6 = document.querySelector(".roll-6");
    let roll7 = document.querySelector(".roll-7");
    let roll8 = document.querySelector(".roll-8");
    let roll9 = document.querySelector(".roll-9");
    document.getElementById("player-0").classList.add("player-active");
    document.getElementById("player-1").classList.remove("player-active");
    document.getElementById("player-0").classList.remove("winner");
    document.getElementById("player-1").classList.remove("winner");
    document.getElementById("name1").innerHTML = " Player X";
    document.getElementById("name2").innerHTML = " Player O";
    roll1.style.color = "#322547";
    roll2.style.color = "#322547";
    roll3.style.color = "#322547";
    roll4.style.color = "#322547";
    roll5.style.color = "#322547";
    roll6.style.color = "#322547";
    roll7.style.color = "#322547";
    roll8.style.color = "#322547";
    roll9.style.color = "#322547";
    roll1.innerHTML = "";
    roll2.innerHTML = "";
    roll3.innerHTML = "";
    roll4.innerHTML = "";
    roll5.innerHTML = "";
    roll6.innerHTML = "";
    roll7.innerHTML = "";
    roll8.innerHTML = "";
    roll9.innerHTML = "";
}
