var cube = document.getElementById("cube")
document.onclick = (e) => {
  alert(e.target.id)
  switch (e.target.id) {
    case 'top':
      cube.style.transform = "rotateX(90deg) translateY(50vmin)";
      break;
    case 'bottom':
      cube.style.transform = "rotateX(90deg)";
      break;
    case 'left':
      cube.style.transform = "rotateY(90deg)";
      break;
    case 'right':
      cube.style.transform = "rotateY(-90deg)";
      break;
    case 'front':
      cube.style.transform = "rotateX(-90deg)";
      break;
    case 'back':
      cube.style.transform = "rotateX(180deg)";
      break;
  }
}