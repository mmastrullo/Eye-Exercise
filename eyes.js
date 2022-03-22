const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  //get horizontal coord*100
  const x = (event.clientX * 100) / window.innerWidth + '%';
  console.log(event.clientX*100);
  console.log(window.innerHeight);
  console.log(x);
  //get verticial coord*100
  const y = (event.clientY * 100) / window.innerHeight + '%';
  for (let i = 0; i<=1; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    console.log(balls[i].transform);
  }
};
