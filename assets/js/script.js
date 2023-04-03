gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.saveStyles(".mobile, .desktop");
ScrollTrigger.matchMedia({

    "(min-width: 768px)": function () {

        gsap.set('.sec1 .deco', {
            width: "random(30,80)px",
            filter: "blur(random(-5,5)px)"
        });

        sectionList = document.querySelectorAll('.hori-inner section')


        const horiAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: ".hori-inner",
                start: "0% 0%",
                end: "1000%",
                // markers:true,
                scrub: 1,
                pin: true,
                onUpdate: function (self) {
                    curr = Math.round(self.progress * 100);
                    currEl = document.querySelector('.fix-num');
                    var img = document.createElement("img");

                    if (curr == 100) {
                        curr = '감사합니다';
                        img.src = "../images/hear.png";
                    } else if (curr >= 80 && curr <= 99) {
                        curr = `${curr}%`
                        img.src = "../images/luck.png";
                    } else if (curr >= 60 && curr <= 79) {
                        curr = `${curr}%`
                        img.src = "../images/ho.png";
                    } else if (curr >= 40 && curr <= 59) {
                        curr = `${curr}%`
                        img.src = "../images/th.png";
                    } else if (curr >= 15 && curr <= 39) {
                        curr = `${curr}%`
                        img.src = "../images/la.png";
                    } else if (curr >= 1 && curr <= 14) {
                        curr = `${curr}%`
                        img.src = "../images/horr.png";
                    } else if (curr == 0) {
                        curr = '안녕하세요';
                        img.src = "../images/hello.png";
                    } else {
                        curr = `${curr}%`
                        img.style.display = 'none'

                    }

                    img.style.width = "70px";
                    img.style.height = "70px";

                    currEl.innerHTML = `${curr}`;
                    currEl.appendChild(img);
                }
            },
        })
        horiAnimation
            .addLabel('a')
            .to('.hori-inner section', {
                ease: "none",
                xPercent: -100 * (sectionList.length - 1)
            }, 'a')
            .to('.guage .curr', {
                width: '100%'
            }, 'a')


        sectionList.forEach(element => {

            if (element.children[0] !== undefined) {
                gsap.to(element.children[0], {
                    ease: "none",
                    xPercent: -15,
                    scrollTrigger: {
                        trigger: element,
                        containerAnimation: horiAnimation,
                        start: "0% 100%",
                        end: "100% 0%",
                        //   markers:true,
                        scrub: 1,
                    }
                });

            };

        });

        sectionList.forEach((section) => {
            const title = section.querySelector('.title-wrap');
            gsap.from(title, {
                opacity: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: horiAnimation,
                    start: '40% 60%',
                    end: '60% 60%',
                    scrub: true
                }
            });


        });

        decoList = document.querySelectorAll('.sec1 .deco');

        decoList.forEach(element => {
            xVal = element.dataset.x
            rVal = element.dataset.r

            gsap.to(element, {
                scrollTrigger: {
                    trigger: '.sec1',
                    containerAnimation: horiAnimation,
                    start: "0% 0%",
                    end: "100% 0%",
                    //   markers:true,
                    scrub: 1,
                },
                ease: "none",
                xPercent: xVal,
                rotation: rVal
            });
        });


    },

    "(max-width: 768px)": function () {
        gsap.set('.sec1 .deco', {
            width: "random(10,50)px",
            filter: "blur(random(-5,5)px)"
        });

        decoList = document.querySelectorAll('.sec1 .deco');

        gsap.to(decoList, {
            scrollTrigger: {
                trigger: '.sec1',
                start: "0% 100%",
                end: "100% 0%",
                // markers: true,
                scrub: 1,
            },
            rotation: 360,
            duration: 2,
            ease: "none",
        });

        sectionList = document.querySelectorAll('.hori-inner section')
        sectionList.forEach(element => {

            if (element.children[0] !== undefined) {
                gsap.to(element.children[0], {
                    ease: "none",
                    scale: 1.2,
                    scrollTrigger: {
                        trigger: element,
                        start: "0% 100%",
                        end: "100% 0%",
                        //   markers:true,
                        scrub: 1,
                    }
                });

            };

        });

        sectionList.forEach((section) => {
            const title = section.querySelector('.title-wrap');
            gsap.from(title, {
                opacity: 0,
                duration: 2,
                xPercent: 30,
                scrollTrigger: {
                    trigger: section,
                    start: '40% 60%',
                    end: '60% 60%',
                    scrub: true
                }
            });


        });
    },

    "all": function () {

    },



});