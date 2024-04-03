$(function() {
    $(".icon").click(openMenu);
    $("#overlay .icon").click(closeMenu)

});

function openMenu() {
    $("#overlay").css("display", "block");
}
function closeMenu() {
    $("#overlay").css("display", "none");

}
document.addEventListener('DOMContentLoaded', function() {
    for (var i = 1; i <= 4; i++) {
      var imageContainer = document.getElementById('imageContainer' + i);
      var textContainer = document.getElementById('textContainer' + i);

      // Image URL
      var imageUrl = './assets/images/person.jpeg'; // Replace 'your-image-url.jpg' with the image URL

      // Name and description
      var name = 'John Doe ' + i;
      var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

      // Create image element and set its attributes
      var image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'Person Image';

      // Create text elements
      var nameElement = document.createElement('h2');
      nameElement.textContent = name;

      var descriptionElement = document.createElement('p');
      descriptionElement.textContent = description;

      // Append elements to respective containers
      imageContainer.appendChild(image);
      textContainer.appendChild(nameElement);
      textContainer.appendChild(descriptionElement);
    }
  });