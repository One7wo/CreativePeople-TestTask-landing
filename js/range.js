
const calc = () => {
    value = document.getElementsByClassName('slider-value')[0].textContent.split(' ')[0];
    time = document.getElementsByClassName('slider-value-1')[0].textContent.split(' ')[0];
    return (+value + (value * 0.11)) / time
}
    
const progress = () => {
    trackElem = document.getElementsByClassName('stripe')[0];
    valueElem = document.getElementsByClassName('slider-value')[0];
    let value = trackElem.value;

    trackElem.style = `background: -webkit-linear-gradient(left, #fee600 0%, #fee600 ${(value - 90000) / 19100}%, #e1e1e3 ${(value - 90000) / 19100}%, #e1e1e3 100%)`;
    valueElem.textContent = value + ' ₽';
    document.getElementsByClassName('calculated')[0].textContent = Math.round(calc(), 0) + ' ₽';
}

const progress2 = () => {
    trackElem = document.getElementsByClassName('stripe-1')[0];
    valueElem = document.getElementsByClassName('slider-value-1')[0];
    let value = trackElem.value;

    trackElem.style = `background: -webkit-linear-gradient(left, #fee600 0%, #fee600 ${(value - 13) / 0.47}%, #e1e1e3 ${(value - 13) / 0.47}%, #e1e1e3 100%)`;
    valueElem.textContent = value + ' мес.';
    document.getElementsByClassName('calculated')[0].textContent = Math.round(calc(), 0) + ' ₽';
}
    