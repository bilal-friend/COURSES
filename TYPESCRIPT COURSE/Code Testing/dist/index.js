"use strict";
var GameCoins;
(function (GameCoins) {
    GameCoins[GameCoins["Apple"] = 2] = "Apple";
    GameCoins[GameCoins["snake"] = -3] = "snake";
    GameCoins[GameCoins["water"] = 1] = "water";
})(GameCoins || (GameCoins = {}));
let score = 0;
let handleMovement = (movement) => {
    if (movement === "apple")
        return GameCoins.Apple;
    else if (movement === "snake")
        return GameCoins.snake;
    else
        return GameCoins.water;
};
score += handleMovement("snake");
console.log(score);
score += handleMovement("apple");
console.log(score);
score += handleMovement("apple");
console.log(score);
score += handleMovement("water");
console.log(score);
