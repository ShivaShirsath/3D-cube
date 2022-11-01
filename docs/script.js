var cube = document.getElementsByTagName("div")

document.onclick = (e) => {
  switch (e.target) {
    case cube[1]:
      alert(1)
      break;
    case cube[2]:
      alert(2)
      break;
    case cube[3]:
      alert(3)
      break;
    case cube[4]:
      alert(4)
      break;
    case cube[5]:
      alert(5)
      break;
    case cube[6]:
      alert(6)
      break;
  }
}