//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach(createCard);
}

function createCard(episode) {
  console.log(episode.name);
  console.log(episode.image.medium);
  console.log(episode.season);
  console.log(episode.number);
   console.log(episode.summary);
}


window.onload = setup;
