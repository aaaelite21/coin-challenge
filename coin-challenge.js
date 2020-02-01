const faces = {
  heads: 0,
  tails: 1
};
class Coin {
  constructor(face1, face2) {
    this.faces = [face1, face2];
  }

  flip() {
    return this.faces[Math.round(Math.random())];
  }
}

let i = 0;
let coins = [
  new Coin(faces.heads, faces.heads),
  new Coin(faces.tails, faces.tails),
  new Coin(faces.heads, faces.tails)
];

let heads_after_two_heads = 0,
  tails_after_two_heads = 0;

while (i < 10000) {
  let selectedCoin = coins[Math.floor(3 * Math.random())];
  let flip1 = selectedCoin.flip();
  let flip2 = selectedCoin.flip();
  let flip3 = selectedCoin.flip();

  if (flip1 === faces.heads && flip2 === faces.heads) {
    if (flip3 === faces.heads) heads_after_two_heads++;
    else tails_after_two_heads++;
  }
  i++;
}

let percent_heads_after_two_heads =
  (100 * heads_after_two_heads) /
  (heads_after_two_heads + tails_after_two_heads);

console.log(
  `Two Heads in A Row: ${tails_after_two_heads + heads_after_two_heads}`
);
console.log(
  `3rd head is flipped ${percent_heads_after_two_heads.toFixed(3)}% of the time`
);
