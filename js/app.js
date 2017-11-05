/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
var arr = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
var click = 0;
var i = 3;
var moves = 0;
var point = 0;
var clk_id = [];
var clk_cls = [];
var it = 0;
var secs = 0;
var mins = 0;
var c_secs = 0;
window.onload = parent;

function parent() {
    click = 0;
    i = 3;
    moves = 0;
    point = 0;
    runner();
    time();
}


function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function runner() {
    arr = shuffle(arr);
    var len = arr.length;
    for (var j = i; j < len + i; j++)
        $("li:eq(" + j + ")").addClass(arr[j - i]);

}

function clk(elmt) {

    if (moves == 20)
        $("li:eq(2)").removeClass("fa fa-star");
    else if (moves == 30)
        $("li:eq(1)").removeClass("fa fa-star");


    var id_chk = $(elmt).index("li");
    if (it == 1 && clk_id[0] == id_chk)
        return;

    click++;
    $(elmt).addClass(" show open ");
    clk_id[it] = id_chk;
    clk_cls[it] = elmt.className;
    it++;
    console.log(clk_id);
    if (click == 2) {
        moves++;
        document.getElementById('mvs').innerHTML = moves;
        click = 0;
        setTimeout(function () {
            check()
        }, 500);

    }


}

function check() {
    if (clk_cls[0] == clk_cls[1]) {
        $("li:eq(" + clk_id[0] + ")").addClass("match");
        $("li:eq(" + clk_id[1] + ")").addClass("match");
        point++;

    } else {
        $("li:eq(" + clk_id[0] + ")").removeClass(" show open ");
        $("li:eq(" + clk_id[1] + ")").removeClass(" show open ");
    }

    clk_cls = [];
    clk_id = [];
    it = 0;
    setTimeout(function () {
        poin()
    }, 250);
}

function poin() {
    console.log(point);
    if (point == 8) {
        alert(" You Won!");
        var conf = confirm("Play Again?");
        if (conf)
            window.location.reload();
    }
}

function time() {
    console.log("time");
    $("#time").html("00:00");
    secs = 0;
    mins = 0;
    c_secs = 0;
    setInterval(timer, 1000);
}

function timer() {
    console.log("time");
    ++c_secs;
    mins = tm(parseInt(c_secs / 60));
    secs = tm(c_secs % 60);
    $("#time").html(mins + ":" + secs);
}

function tm(t) {
    console.log("time");
    var tempTime = t + "";
    if (tempTime.length == 2)
        return tempTime;
    return "0" + tempTime;
}