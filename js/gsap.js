window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    const e1_1 = document.querySelector(".mv__title-item:nth-of-type(1) .mv__title-img");
    const e1_2 = document.querySelector(".mv__title-item:nth-of-type(2) .mv__title-img");
    const e1_3 = document.querySelector(".mv__title-item:nth-of-type(3) .mv__title-img");
    const e1_4 = document.querySelector(".mv__title-item:nth-of-type(4) .mv__title-img");
    const e1_5 = document.querySelector(".mv__title-item:nth-of-type(5) .mv__title-img");
    const e1_bg = document.querySelector(".mv");
    const e1_header = document.querySelector(".layout-header");
    const e1_fixed = document.querySelector(".b-bgi");

    tl.to(e1_1, { filter: "blur(0)", opacity: 1, duration: .6, }, "-=0.4")
        .to(e1_2, { filter: "blur(0)", opacity: 1, duration: .6, }, "-=0.4")
        .to(e1_3, { filter: "blur(0)", opacity: 1, duration: .6, }, "-=0.4")
        .to(e1_4, { filter: "blur(0)", opacity: 1, duration: .6, }, "-=0.4")
        .to(e1_5, { filter: "blur(0)", opacity: 1, duration: .6, }, "-=0.2")
        .add(() => {
            e1_bg.classList.remove('mv-black');
        })
        .to(e1_header, { opacity: 1, duration: 1 }, "+=0.4")
        .to(e1_fixed ,{ overflow: "visible",duration: 1 })
        
    return tl; 
});

