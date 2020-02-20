function readMore(id) {
  var dots = document.getElementById(id + "_dots");
  var moreText = document.getElementById(id + "_more");
  var btn = document.getElementById(id);
  var btnText = document.getElementById(id + "_t");
  var btnArrow = document.getElementById(id + "_a");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnArrow.innerHTML = "⮟";
    btn.style.top = "-2rem";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
    moreText.style.transition = "all 2s ease";
  } else {
    console.log(btnText.id, btnArrow.id);
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    btnArrow.innerHTML = "⮝";

    btn.style.top = "-1rem";
    console.log(btnText.id, btnArrow.id);
    moreText.style.display = "inline";
  }
}
