function generateStory(event) {
  event.preventDefault();
  new Typewriter("#generated-story", {
    strings: "Hello World",
    autoStart: true,
    delay: 1,
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
