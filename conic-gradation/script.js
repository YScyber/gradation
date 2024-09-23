const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const repeat = document.getElementById("repeat");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const repeatHtmlSolution = `<h2>繰り返し扇形グラデーション</h2>

<div class="box repeat"></div>
`;
const repeatCssSolution = `div.box {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border: 1px solid #ddd;
    border-radius: 10px;
}

div.repeat {
    background: repeating-conic-gradient(
        orange 0deg 10deg,
        darkblue 10deg 20deg);
}
`;

let repeatHtmlSolutionEntry = repeatHtmlSolution;
let repeatCssSolutionEntry = repeatCssSolution;

repeat.addEventListener("click", () => {
    if (repeat.value === "繰り返し扇形グラデーションに変更") {
        textareaHTML.value = repeatHtmlSolutionEntry;
        textareaCSS.value = repeatCssSolutionEntry;
        repeat.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeat.value = "繰り返し扇形グラデーションに変更";
    }
    fillCode();
});

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    repeat.value = "繰り返し扇形グラデーションに変更";
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);