const fs = require('fs');

const spritePrefix = './dist/eha-mapping';
const filePaths = [
  `${spritePrefix}.json`,
  `${spritePrefix}@2x.json`,
];

filePaths.forEach((filePath) => {
  const rawContent = fs.readFileSync(filePath);
  const jsonContent = JSON.parse(rawContent);

  Object.keys(jsonContent).forEach((key) => {
    jsonContent[key] = { ...jsonContent[key], sdf: true };
  });

  fs.writeFileSync(filePath, JSON.stringify(jsonContent));
});
