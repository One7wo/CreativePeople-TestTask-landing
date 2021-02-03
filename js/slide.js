const next = () => {
    let posX = document.getElementsByClassName('slider-sc__screen-box')[0].offsetLeft;
    const step = 250;
      if(posX<=20 && posX> -730 ){
      document.getElementsByClassName('slider-sc__screen-box')[0].style.cssText = `
        transition: all 0.9s ease;
        left: ${posX-step}px;
      `}
      if(posX<= -700){
        document.getElementsByClassName('slider-sc__screen-box')[0].style.cssText = `
        transition: all 0.9s ease;
        left: -750px;
      `
      }
  }
  
  const prev = () => {
    let posX = document.getElementsByClassName('slider-sc__screen-box')[0].offsetLeft;
    const step = 250;
      if(posX<20 && posX>= -750){
      document.getElementsByClassName('slider-sc__screen-box')[0].style.cssText = `
        transition: all 0.3s ease;
        left: ${posX+step}px;
      `}
      if(posX>= 0){
        document.getElementsByClassName('slider-sc__screen-box')[0].style.cssText = `
        transition: all 0.9s ease;
        left: 20px;
      `
      }
      
  }
  