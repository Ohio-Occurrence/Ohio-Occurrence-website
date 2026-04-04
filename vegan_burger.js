closeNavWhenClickingOutside(); // Add the listeners

/**
 * Listener to close nav by clicking outside it when it is open.
 */
function closeNavWhenClickingOutside(){
        document.addEventListener('click', function(event) {
            if (!document.body.classList.contains('nav-open')) {
                return;
            }
            if (event.target.closest('nav')) {
                return;
            }

            closeBurger();
        });
}

/**
 * Opens the vegan burger menu.
 */
function openBurger() {
    document.querySelector('.nav-links').classList.add('open');
    document.body.classList.add('nav-open');
    document.querySelectorAll('.hero a, main a, footer a').forEach(link => {
        link.style.pointerEvents = 'none';
    });
}

/**
 * Closes the vegan burger menu.
 */
function closeBurger() {
    document.querySelector('.nav-links').classList.remove('open');
    document.body.classList.remove('nav-open');
    document.querySelectorAll('.hero a, main a, footer a').forEach(link => {
        link.style.pointerEvents = '';
    });
}

/**
 * Toggles the state of the vegan burger menu.
 */
function toggleNavigation() {
    if (document.body.classList.contains('nav-open')) {
        closeBurger();
    } else {
        openBurger();
    }
}