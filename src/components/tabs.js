import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

 // div topics
const dTopics = document.createElement("div");
dTopics.classList.add("topics");

// div tab
const dTab = document.createElement("div");
dTab.classList.add("tab");
dTab.textContent = topics[0];
dTopics.appendChild(dTab);

// div tab-2
const dTab2 = document.createElement("div");
dTab2.classList.add("tab");
dTab2.textContent = topics[1];
dTopics.appendChild(dTab2);

// div tab-3
const dTab3 = document.createElement("div");
dTab3.classList.add("tab");
dTab3.textContent = topics[2];
dTopics.appendChild(dTab3);

//Not sure , as per instructions, only 3 tabs are asked. I am adding other two tabs to match the png file

// div tab-4
const dTab4 = document.createElement("div");
dTab4.classList.add("tab");
dTab4.textContent = topics[3];
dTopics.appendChild(dTab4);
// div tab-5
const dTab5 = document.createElement("div");
dTab5.classList.add("tab");
dTab5.textContent = topics[4];
dTopics.appendChild(dTab5);

console.log(dTopics);
return dTopics;


}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res)=>{
    const topicsData = res.data.topics;
    //console.log("TOPICS-DATA :",topicsData);
    const newTab = Tabs(topicsData);
    const entryPoint = document.querySelector(selector);
    entryPoint.appendChild(newTab);

  })
  .catch((err)=>{
    console.log(err);
  })
}

export { Tabs, tabsAppender }
