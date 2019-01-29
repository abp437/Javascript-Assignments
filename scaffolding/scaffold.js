const fileSystem = require('fs'),
  args = process.argv.slice(2),
  replaceAll = (str, find, replace) => str.replace(new RegExp(find, 'g'), replace),
  fileName = args[0],
  objectName = args[1],
  fileContent = `const ${objectName} = () => {

};

export default ${objectName};
`;

fileSystem.readFile('index.js', (err, buffer) => {
  const indexFileContent = buffer.toString().split('\n'),
    indexOfImport = indexFileContent.indexOf('const ScaffoldWindowObject = {};\n'),
    stringOfImport = `import * as ${objectName} from './${fileName}';`,
    indexOfObject = indexFileContent.indexOf('window.ScaffoldWindowObject = ScaffoldWindowObject;\n'),
    stringOfObject = `ScaffoldWindowObject.${objectName} = ${objectName}.default;`;
  indexFileContent.splice(indexOfImport, 0, stringOfImport);
  indexFileContent.splice(indexOfObject + 1, 0, stringOfObject);

  fileSystem.writeFile('index.js', replaceAll(indexFileContent.join(''), ';', ';\n'), err => {
    if (err) {
      return console.log(err);
    }
    console.log('Contents inserted in "index.js" file');
    fileSystem.writeFile(`${fileName}.js`, fileContent, err => {
      if (err) {
        return console.log(err);
      }
      console.log('Scaffold File generated');
    });
  });
});
