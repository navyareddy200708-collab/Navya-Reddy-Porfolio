/* =====================================================
   NEXT LEVEL PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".page-loader");

    const navbar =
        document.querySelector(".navbar");

    const heroContent =
        document.querySelector(".hero-content");

    const heroPhoto =
        document.querySelector(
            ".hero-photo-container"
        );


    setTimeout(() => {

        loader.classList.add("loaded");

        navbar.classList.add("loaded");

        heroContent.classList.add("loaded");

        heroPhoto.classList.add("loaded");

    }, 1600);

});



/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

const cursorGlow =
    document.querySelector(".cursor-glow");


let mouseX = 0;

let mouseY = 0;

let ringX = 0;

let ringY = 0;

let glowX = 0;

let glowY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        cursorDot.style.left =
            mouseX + "px";

        cursorDot.style.top =
            mouseY + "px";

    }
);


function animateCursor() {

    ringX +=
        (mouseX - ringX) * .12;

    ringY +=
        (mouseY - ringY) * .12;


    glowX +=
        (mouseX - glowX) * .06;

    glowY +=
        (mouseY - glowY) * .06;


    cursorRing.style.left =
        ringX + "px";

    cursorRing.style.top =
        ringY + "px";


    cursorGlow.style.left =
        glowX + "px";

    cursorGlow.style.top =
        glowY + "px";


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();



/* =====================================================
   CURSOR HOVER EFFECT
===================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button, input, textarea, .tilt-card"
    );


interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursorRing.classList.add(
                "cursor-hover"
            );

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            cursorRing.classList.remove(
                "cursor-hover"
            );

        }
    );

});



/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

const magneticElements =
    document.querySelectorAll(
        ".magnetic"
    );


magneticElements.forEach(element => {

    element.addEventListener(
        "mousemove",
        event => {

            const rect =
                element.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            element.style.transform =
                `translate(${x * .18}px,
                           ${y * .18}px)`;

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            element.style.transform =
                "translate(0,0)";

        }
    );

});



/* =====================================================
   3D TILT CARDS
===================================================== */

const tiltCards =
    document.querySelectorAll(
        ".tilt-card"
    );


tiltCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth < 850
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) /
                18;


            const rotateY =
                (centerX - x) /
                18;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );

});



/* =====================================================
   PHOTO PARALLAX
===================================================== */

const photoFrame =
    document.querySelector(
        ".photo-frame"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 850
        ) {
            return;
        }


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 80;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 80;


        photoFrame.style.transform =
            `perspective(1000px)
             rotateY(${x}deg)
             rotateX(${y}deg)`;

    }
);



/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText =
    document.getElementById(
        "typing-text"
    );


const words = [

    "Developer",

    "Problem Solver",

    "AI Enthusiast",

    "Tech Explorer"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const word =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            word.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            word.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;

        }

    } else {

        typingText.textContent =
            word.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (
            characterIndex === 0
        ) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}


typeEffect();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal-section, .reveal-left, .reveal-right, .reveal-card, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: .15
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   TIMELINE LINE
===================================================== */

const timeline =
    document.querySelector(
        ".timeline"
    );


const timelineObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        timeline.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: .2
        }

    );


timelineObserver.observe(
    timeline
);



/* =====================================================
   COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(
        ".stat h3"
    );


let countersStarted = false;


function startCounters() {

    if (
        countersStarted
    ) {

        return;

    }


    const stats =
        document.querySelector(
            ".stats-section"
        );


    const position =
        stats.getBoundingClientRect()
        .top;


    if (
        position <
        window.innerHeight - 100
    ) {

        countersStarted = true;


        counters.forEach(
            counter => {

                const target =
                    Number(
                        counter.dataset.target
                    );


                let current = 0;


                const increment =
                    target / 80;


                function updateCounter() {

                    current +=
                        increment;


                    if (
                        current <
                        target
                    ) {

                        counter.textContent =
                            Math.ceil(
                                current
                            );


                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target === 100 ?
                            "100%" :
                            target + "+";

                    }

                }


                updateCounter();

            }
        );

    }

}


window.addEventListener(
    "scroll",
    startCounters
);



/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar =
    document.getElementById(
        "navbar"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const top =
                    section.offsetTop - 250;


                if (
                    window.scrollY >= top
                ) {

                    current =
                        section.id;

                }

            }
        );


        navItems.forEach(
            item => {

                item.classList.remove(
                    "active"
                );


                if (
                    item.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


menuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-active"
        );

    }
);


navItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "mobile-active"
                );

            }
        );

    }
);



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const subject =
            document.getElementById(
                "subject"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (!name ||
            !email ||
            !subject ||
            !message
        ) {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color =
                "#e7a6a6";

            return;

        }


        formMessage.textContent =
            "Thank you! Your message has been received.";

        formMessage.style.color =
            "#a9d6b6";


        contactForm.reset();

    }
);



/* =====================================================
   SCROLL TO TOP
===================================================== */

const scrollTop =
    document.getElementById(
        "scrollTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 600
        ) {

            scrollTop.classList.add(
                "show"
            );

        } else {

            scrollTop.classList.remove(
                "show"
            );

        }

    }
);


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   PROJECT MOUSE EFFECT
===================================================== */

const projects =
    document.querySelectorAll(
        ".project"
    );


projects.forEach(
    project => {

        project.addEventListener(
            "mousemove",
            event => {

                const rect =
                    project.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const percentage =
                    (x / rect.width) * 100;


                project.style.setProperty(
                    "--mouse-x",
                    percentage + "%"
                );

            }
        );

    }
);