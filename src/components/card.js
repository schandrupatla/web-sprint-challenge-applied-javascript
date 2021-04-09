const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
// div card
const dCard = document.createElement("div");
dCard.classList.add("card");

//div headline
const dHeadline = document.createElement("div");
dHeadline.classList.add("headline");
dHeadline.textContent = article.headline;
console.log("Article-Headline :",article.headline);
dCard.appendChild(dHeadline);

//div author
const dAuthor = document.createElement("div");
dAuthor.classList.add("author");
dCard.appendChild(dAuthor);

//div img-container
const dImg = document.createElement("div");
dImg.classList.add("img-container");
dAuthor.appendChild(dImg);

//Img
const img = document.createElement("img");
img.setAttribute('src', article.authorPhoto );
dImg.appendChild(img);

//span
const span = document.createElement("span");
span.textContent =`By ${article.authorName}`;
dAuthor.appendChild(span);

//Click event on the card
dCard.addEventListener("click", (event)=>{
console.log("Article Headline ", article.headline);

})

console.log(dCard);
return dCard;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res)=>{
      const articleData = res.data.articles.javascript;
      articleData.forEach(article => {
      const newCard = Card(article);
      const entryPoint = document.querySelector(selector);
      console.log("Selector:", selector)
      entryPoint.appendChild(newCard);
    });

  })
  .catch((err)=>{
    console.log(err);
  })
}

export { Card, cardAppender }
