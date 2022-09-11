let indexValue = 1;

function showImg(e) {
    const img = document.querySelectorAll('.images img');
    const slider = document.querySelectorAll('.btm-slider span');

    if(e > img.length) {
        indexValue = 1;
    }

    if(e < 1) {
        indexValue = img.length;
    }

    for(let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    img[indexValue-1].style.display = "block";

    for(let i = 0; i < slider.length; i++) {
        slider[i].style.background = "rgba(100, 100, 100, 0.5)";
    }

    slider[indexValue-1].style.background = "white";

}

showImg(indexValue);

function btm_slide(e) {
    showImg(indexValue = e);
}

function side_slide(e) {
    showImg(indexValue += e);
}


