var index = 0;
show_image(index);

function show_image(i) {
  index += i;

  var images = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");

  for (var j = 0; j < images.length; j++) {
    images[j].style.display = "none";
  }

  for (var k = 0; k < dots.length; k++) {
    dots[k].className = dots[k].className.replace(" active", "");
  }

  if (index > images.length - 1) {
    index = 0;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  images[index].style.display = "block";
  dots[index].className += " active";
}
