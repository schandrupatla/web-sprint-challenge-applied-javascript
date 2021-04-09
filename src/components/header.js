const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

//header
const dHeader = document.createElement("div");
dHeader.classList.add("header");
//span
const span = document.createElement("span");
span.classList.add("date");
span.textContent = date;
dHeader.appendChild(span);
//h1
const h1 = document.createElement("h1");
h1.textContent = title;
dHeader.appendChild(h1);
//span
const span2 = document.createElement("span");
span2.classList.add("temp");
span2.textContent = temp;
dHeader.appendChild(span2);
 //console.log(dHeader);
return dHeader;
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const createHeader = Header("Lambda Times","April 9th 2021", "45deg");
  const nodeEP = document.querySelector(selector);
  nodeEP.append(createHeader);
  return nodeEP;
}

export { Header, headerAppender }
