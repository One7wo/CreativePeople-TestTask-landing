const progress = () => {
    let value = $('.stripe').val();
    $('.stripe').css({ 'background': '-webkit-linear-gradient(left, #fee600 0%, #fee600 ' + value + '%, #e1e1e3 ' + value + '%, #e1e1e3 100%)' })
}
const progress2 = () => {
    let value = $('.stripe-1').val();
    $('.stripe-1').css({ 'background': '-webkit-linear-gradient(left, #fee600 0%, #fee600 ' + value + '%, #e1e1e3 ' + value + '%, #e1e1e3 100%)' })
}

