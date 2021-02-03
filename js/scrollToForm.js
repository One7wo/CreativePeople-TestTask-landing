const scrollToPoint = () => {
    const point = document.getElementsByClassName('point')[0].offsetTop;
    window.scroll({
        top: point,
        left: 0,
        behavior: 'smooth'
    })
}
