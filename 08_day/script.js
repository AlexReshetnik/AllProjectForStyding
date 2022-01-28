var start = 3;
var c = start;
var mouth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (let i = 0; i < 12; i++) {
    for (let index = 1; index <= mouth[i] + start; index++) {
        if (start < index) {
            document.querySelector(".numberc").innerHTML += `<div>${index - start}</div>`;
        } else {
            document.querySelector(".numberc").innerHTML += `<div></div>`;
        }
    }
    start = 0;
    c += mouth[i];
}

console.log(c);
document.querySelector(".numberc").addEventListener('scroll', clickCircle);
var d = 0;
var p = 0;
var dd = 0;
var pp = 0;
function clickCircle(event) {

    if (pp == 0) {
        var k = ((c - 42) * document.querySelector(".numberc").scrollTop) / (document.querySelector(".numberc").scrollHeight - 300) + 21;
        var g = k - k % 1;
        var t = g - g % 7;
        for (let i = 0; i < 7; i++, k++) {
            document.querySelector(".numberc").querySelectorAll("div")[d + i].style.backgroundColor = "rgba(0, 0, 0, 0.294";
            document.querySelector(".numberc").querySelectorAll("div")[t + i].style.backgroundColor = "#fff";
        }
        d = t;
        setTimeout(clickCirьcle, 1000);
        dd++
    }
}

function clickCirьcle(event) {
    if (dd > 1) { console.log("мінус" + dd); dd--; return; }
    pp = 1;
    console.log("вап");
    var k = document.querySelector(".numberc").scrollTop;
    console.log(k - k % 1);
    console.log(k - k % 30);
    console.log(document.querySelector(".numberc").scrollTop);
    console.log("-");
    var ff = 30
    k = k - k % 1;
    if (k - k % 10 != k - k % 1) {
        if (k % ff < ff / 2) {
            for (let index = 0; index < k % ff; index++) {

                document.querySelector(".numberc").scrollTo(0, document.querySelector(".numberc").scrollTop - 1);
            }
            console.log(k % ff + "  менше  " + ff / 2);

        } else if (k % ff > ff / 2) {
            for (let index = 0; index < k % ff; index++) {

                document.querySelector(".numberc").scrollTo(0, document.querySelector(".numberc").scrollTop + 1);
            }
            console.log(k % ff + "  більше  " + ff / 2);
        }
    }
    event.preventDefault();
    dd = 0;
    setTimeout((() => pp = 0), 1000);

}