//You can edit ALL of the code here
const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
 
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach(createCard);
}

function createCard(episode) {
  console.log(episode.name);
  console.log(episode.image.medium);
  console.log(episode.season);
  console.log(episode.number);
   console.log(episode.summary);

   let card = document.createElement("span");
   let cardTitle = document.createElement("h3");
   cardTitle.innerText = episode.name;
   card.appendChild(cardTitle);

   let cardImage = document.createElement("img");
   cardImage.src = episode.image.medium;
   card.appendChild(cardImage);
   
   let cardSummary = document.createElement("div");
   cardSummary.innerHTML = episode.summary;
   card.appendChild(cardSummary);

   rootElem.appendChild(card);

}


window.onload = setup;
