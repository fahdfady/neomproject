const bannerBlob = document.querySelectorAll(".blob");

// onmousemove = (MouseEvent) => {
//     let divide = 40;

//     let x = MouseEvent.clientX / divide;
//     let y = MouseEvent.clientY / divide;

//     let x2 = -MouseEvent.clientX / divide;
//     let y2 = -MouseEvent.clientY / divide;

//     for (let i = 0; i < bannerBlob.length; i++) {};

//     bannerBlob[0].style.transform = "translate3d(" + x2 + 'px,' + y2 + 'px, 0px)';
//     bannerBlob[1].style.transform = "translate3d(" + x + 'px,' + y2 + 'px, 0px)';
//     bannerBlob[2].style.transform = "translate3d(" + x + 'px,' + y + 'px, 0px)';
// };

const nav = document.querySelector("nav");
const header = document.querySelector("header");

const navLink = document.querySelectorAll("nav ul li a");
const navLinkDropdown = document.querySelectorAll("nav ul li a+*");



for (let i = 0; i < navLink.length; i++) {
    navLink[i].onmouseover = () => {
        // navLinkDropdown.forEach((item) => {
        //     item.classList.remove('is-open');
        // })
        // navLinkDropdown[i].classList.add('is-open');.


        navLinkDropdown.forEach((item) => {
            item.classList.remove('active');
            item.classList.remove("is-open")
        });

        navLinkDropdown[i].classList.add("is-open");
        setTimeout(() => {
            navLinkDropdown[i].classList.add('active');
        }, 1);

        nav.onmouseover = () => {
            nav.classList.add("active");
        }

        nav.onmouseleave = () => {
            nav.classList.remove('active')

            navLinkDropdown.forEach((item) => {
                item.classList.remove('active');
                setTimeout(() => {
                    item.classList.remove("is-open");
                }, 100);
            });
        }
    };

    navLinkDropdown[i].style.bottom = -navLinkDropdown[i].clientHeight - 40;  
};