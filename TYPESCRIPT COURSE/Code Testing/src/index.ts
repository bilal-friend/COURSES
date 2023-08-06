enum GameCoins {
  Apple = 2,
  snake = -3,
  water = 1,
}
let score = 0;
let handleMovement = (movement: string) => {
  if (movement === "apple") return GameCoins.Apple;
  else if (movement === "snake") return GameCoins.snake;
  else return GameCoins.water;
};

score += handleMovement("snake");
console.log(score); // -3
score += handleMovement("apple");
console.log(score); // -1
score += handleMovement("apple");
console.log(score); // 1
score += handleMovement("water");
console.log(score); // 2
