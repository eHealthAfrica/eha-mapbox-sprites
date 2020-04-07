const fs = require('fs');

let sprite = fs.readFileSync('./sprites/sprite.json');
let sprite2x = fs.readFileSync('./sprites/sprite@2x.json');

let spriteJSON = JSON.parse(sprite);
let sprite2xJSON = JSON.parse(sprite2x);

Object.keys(sprite2xJSON).forEach(key => {
  spriteJSON[key] = { ...spriteJSON[key], sdf: true }
  sprite2xJSON[key] = { ...sprite2xJSON[key], sdf: true }
})

fs.writeFileSync('./sprites/sprite.json', JSON.stringify(spriteJSON));
fs.writeFileSync('./sprites/sprite@2x.json', JSON.stringify(spriteJSON));