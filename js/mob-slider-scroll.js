const reactDots = () => {
    document.getElementsByClassName('slider-sc')[0].addEventListener('scroll', () => {
        if(document.getElementsByClassName('slider-sc')[0].scrollLeft<=180){
            if(!document.getElementsByClassName('dot')[0].classList[1]){
            document.getElementsByClassName('dot')[0].classList.add('active')
            document.getElementsByClassName('dot')[1].classList.remove('active')
            }
        }
        if(document.getElementsByClassName('slider-sc')[0].scrollLeft>180 && document.getElementsByClassName('slider-sc')[0].scrollLeft<=360){
            if(!document.getElementsByClassName('dot')[1].classList[1]){
            document.getElementsByClassName('dot')[1].classList.add('active')
            document.getElementsByClassName('dot')[0].classList.remove('active')
            document.getElementsByClassName('dot')[2].classList.remove('active')
            }
        }
        if(document.getElementsByClassName('slider-sc')[0].scrollLeft>360 && document.getElementsByClassName('slider-sc')[0].scrollLeft<=540){
            if(!document.getElementsByClassName('dot')[2].classList[1]){
            document.getElementsByClassName('dot')[2].classList.add('active')
            document.getElementsByClassName('dot')[1].classList.remove('active')
            document.getElementsByClassName('dot')[3].classList.remove('active')
        }
        }
        if(document.getElementsByClassName('slider-sc')[0].scrollLeft>540 && document.getElementsByClassName('slider-sc')[0].scrollLeft<=720){
            if(!document.getElementsByClassName('dot')[3].classList[1]){
            document.getElementsByClassName('dot')[3].classList.add('active')
            document.getElementsByClassName('dot')[2].classList.remove('active')
            document.getElementsByClassName('dot')[4].classList.remove('active')
            }
        }
        if(document.getElementsByClassName('slider-sc')[0].scrollLeft>720 && document.getElementsByClassName('slider-sc')[0].scrollLeft<=900){
            if(!document.getElementsByClassName('dot')[4].classList[1]){
            document.getElementsByClassName('dot')[4].classList.add('active')
            document.getElementsByClassName('dot')[3].classList.remove('active')
            document.getElementsByClassName('dot')[5].classList.remove('active')
            }
        }
        if(document.getElementsByClassName('slider-sc')[0].scrollLeft>900 && document.getElementsByClassName('slider-sc')[0].scrollLeft<=1080){
            if(!document.getElementsByClassName('dot')[5].classList[1]){
            document.getElementsByClassName('dot')[5].classList.add('active')
            document.getElementsByClassName('dot')[4].classList.remove('active')
            document.getElementsByClassName('dot')[6].classList.remove('active')
            }
        }
        if(document.getElementsByClassName('slider-sc')[0].scrollLeft>1080 && document.getElementsByClassName('slider-sc')[0].scrollLeft<=1255){
            if(!document.getElementsByClassName('dot')[6].classList[1]){
            document.getElementsByClassName('dot')[6].classList.add('active')
            document.getElementsByClassName('dot')[5].classList.remove('active')
            }
        }
    })
}
