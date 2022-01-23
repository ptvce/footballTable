const players = [
  {
    _id: "11",
    name: "a",
    score: 0,
  },
  {
    _id: "22",
    name: "b",
    score: 0,
  },
];

export function getPlayers() {
  return players;
}

export function savePlayers(key, players) {
  //ToDo: Save DB
  localStorage.setItem(key, JSON.stringify(players));
}

export function getPlayersScore() {
  let temp = [];
  let old = {};
  for (let i = 1; i <= 20; i++) {
    old = JSON.parse(localStorage.getItem(i));
    if (old != undefined || old != null)
      if (temp.length) temp.push(old);
      else temp.push(JSON.parse(localStorage.getItem(i)));
  }
  return temp;
}

export function getMaxScore() {
  var maxScores = [];
  let objPlayersScore = getPlayersScore();
  for (let obj in objPlayersScore) {
    let playersScore = objPlayersScore[obj];
    let maxScore = 0;
    for (let i = 0; i < playersScore.length; i++) {
      if (playersScore[i].score > maxScore) maxScore = playersScore[i].score;
      maxScores.push(maxScore);
    }
  }

  return maxScores;
}
