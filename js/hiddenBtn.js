const onScrollStopped = (domElem, callback, delay = 200) => {
    domElem.addEventListener('scroll', () => {
        document.getElementsByClassName('fixed-btn-mob')[0].style.cssText = `
        transition: all 0.2s ease;
        bottom: -55px;`

        clearTimeout(callback.delay);
        callback.delay = setTimeout(callback, delay);
    });
}

onScrollStopped(window, () => {
    if(window.pageYOffset < document.getElementsByClassName('point')[0].offsetTop
    || window.pageYOffset > document.getElementsByClassName('point')[0].offsetTop+document.getElementsByClassName('point')[0].offsetHeight/2){
    document.getElementsByClassName('fixed-btn-mob')[0].style.cssText = `
        transition: all 0.2s ease;
        bottom: 0px;
    `   }
    })

