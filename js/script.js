/******************************************
Treehouse FSJS Techdegree: James Vongampai
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
 const quotes = [
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    source: "Walt Disney",
    citation: "Facebook",
    year: "1991",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    source: "Mark Twain",
    citation: "Twitter",
    year: "1984",
  },
  {
    quote: "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’",
    source: "Leah Busque",
    citation: "",
    year: "1946",
  },
  {
    quote: "Whatever you are, be a good one.",
    source: "Abraham Lincoln",
    citation: "",
    year: "",
  },
  {
    quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    source: "Neil Gaiman",
    citation: "",
    year: '',
  }
];
/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]; // returns an element between quotes[0-4]
}

/***
 * `printQuote` function
 * 1) querySelects quote box
 * 2) get random quote Object element from quotes array
 * 3) begin htmlString for concatenation
 * 4) check for conditions to see which object properties exist
 ***/
function printQuote() {
  const htmlString = document.querySelector("#quote-box");
  const randomQuote = getRandomQuote(); // stores random quote as variable
  let newQuote = "";

  newQuote += `<p class="quote">${randomQuote.quote}</p>`;

  //Check for source(s)

  newQuote += `<p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    newQuote += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    newQuote += `<span class="year">${randomQuote.year}</span>`;
  }
  newQuote += "</p>";
  htmlString.innerHTML = newQuote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);
