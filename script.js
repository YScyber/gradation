const select = document.querySelector("select");
const iframe = document.querySelector("iframe");

select.addEventListener("change", setIframe)

function setIframe() {
    const choice = select.value;

    if (choice === "linear/gradation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "700px";
    } else if (choice === "linear/repeat/index.html") {
        iframe.src = this.value;
        iframe.style.height = "700px";
    } else if (choice === "linear/animation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "1150px";
    } else if (choice === "radial/gradation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "700px";
    } else if (choice === "radial/repeat/index.html") {
        iframe.src = this.value;
        iframe.style.height = "700px";
    } else if (choice === "radial/animation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "1300px";
    } else if (choice === "conic/gradation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "700px";
    } else if (choice === "conic/repeat/index.html") {
        iframe.src = this.value;
        iframe.style.height = "700px";
    } else if (choice === "conic/animation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "1300px";
    } else if (choice === "image/index.html") {
        iframe.src = this.value;
        iframe.style.height = "850px";
    } else {
        iframe.src = "";
    }
}