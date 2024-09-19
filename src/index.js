function displayStory(response) {
  console.log(response.data);

  new Typewriter("#generated-story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateStory(event) {
  event.preventDefault();
  //Build APi URl
  let userInstructions = document.querySelector("#chat-input");
  let apiKey = "b8a2a2of6ef0b2dad8384b77f37302t6";
  let context = `You are a sunday school teacher, and love to write short stories from the bible books to help kids understand better.
  Your mission is to generate a short, engaging, and kid-friendly story based on a Biblical book given by user instructions. Format the story as follows:
  
  1. **Heading**: Bold and clear title using strong HTML tags.
  2. **Bible Verse**: Italicize using em HTML tags.
  3. **Story**: Use p HTML tags for paragraphs. Ensure readability and avoid long blocks of text.
  4. **Lessons Learned**: List lessons using ul and li HTML tags.
  
  Ensure proper spacing and formatting for easy readability.`;
  let prompt = `User Instructions: Generate ${userInstructions.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //Make a call to API
  axios.get(apiURL).then(displayStory);
  //Display generated story
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
