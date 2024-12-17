/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {};

// Step 1: Locate all the heart elements on the page
const articleHearts = document.querySelectorAll(".like-glyph");
console.log(articleHearts); // Verify elements are selected

// Step 2: Mock server communication
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let randomFailure = Math.random() < 0.2;
      if (randomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Add event listeners to the heart icons
articleHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Toggle the "activated-heart" class to update DOM
        if (heart.classList.contains("activated-heart")) {
          heart.classList.remove("activated-heart");
        } else {
          heart.classList.add("activated-heart");
        }
      })
      .catch((error) => {
        // Handle server error with an alert
        alert("Something went wrong: " + error);
      });
  });
});
