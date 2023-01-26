const nav = document.getElementById('nav-header2');
const over = document.getElementById('over');
const area = document.getElementById('area');
const li = document.getElementById('li-link');
const icon = document.getElementById('icon-nav');

nav.style.display = 'none';
nav.style.opacity = '0%';
nav.style.transition = '0.3s';
nav.style.marginTop = '30px';
let timeoutSet = false;
over.addEventListener('mouseover', () => {
    icon.style.transform = 'rotate(-180deg)';
    nav.style.display = 'block';
    over.style.color = 'var(--ah)';
    if (!timeoutSet) {
        setTimeout(() => {
            nav.style.opacity = '100%';
            nav.style.marginTop = '15px';
            timeoutSet = false;
        });
        timeoutSet = true;
    }
});

let timeoutId;
over.addEventListener('mouseover', () => {
    nav.style.display = 'block';
    if (!timeoutSet) {
        timeoutId = setTimeout(() => {
            nav.style.opacity = '100%';
            timeoutSet = false;
        }, 0);
        timeoutSet = true;
    }
});

let timeoutId2;
area.addEventListener('mouseleave', () => {
    over.style.color = 'var(--a)';
    icon.style.transform = 'rotate(0deg)';
    if (!timeoutSet) {
        timeoutId = setTimeout(() => {
            nav.style.opacity = '0%';
            nav.style.marginTop = '30px';
            timeoutSet = false;
        }, 0);
        setTimeout(() => {
            nav.style.display = 'none';
        }, 100);
        timeoutSet = true;
    }
});

over.addEventListener('mouseover', () => {
    clearTimeout(timeoutId, timeoutId2);
    timeoutSet = false;
});

/* 
INI: Menu mobile
*/

const nmob = document.getElementById('nav-mob');
const menu = document.getElementById('icon-mob');
let state = false;

nmob.style.display = 'none';

menu.addEventListener('click', () => {
    if (state == false) {
        state = !state;
    } else if (state == true) {
        state = !state;
    }

    if (state == true) {
        nmob.style.display = 'block';
    } else if (state == false) {
        nmob.style.display = 'none';
    }
});

const navmob = document.getElementById('nav-contact');
const limob = document.getElementById('li-mob');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
let state2 = false;

navmob.style.display = 'none';
minus.style.display = 'none';

limob.addEventListener('click', () => {
    if (state2 == false) {
        state2 = !state2;
    } else if (state2 == true) {
        state2 = !state2;
    }

    if (state2 == true) {
        navmob.style.opacity = '0%';
        navmob.style.display = 'block';
        minus.style.display = 'block';
        plus.style.display = 'none';
        setTimeout(() => {
            navmob.style.opacity = '100%';
        }, 0)
    } else if (state2 == false) {
        minus.style.display = 'none';
        plus.style.display = 'block';
        navmob.style.display = 'block';
        navmob.style.opacity = '0%';
        setTimeout(() => {
            navmob.style.display = 'none';
        }, 100)
    }
});

/* 
FIM: Menu mobile
*/

/* 
Evento do scrool
*/

const continf = document.querySelector('#opac');

continf.style.opacity = '0%';
continf.style.transition = '1s';
window.addEventListener('scroll', () => {
    const cont = document.querySelector('.containers');

    if (scrollY >=  570) {
        continf.style.opacity = '100%';
    }

    if (scrollY >= 290) {
        cont.style.opacity = '100%';
    } 
});

console.log(scrollY);