const fs = require('fs');

const inputData = require('../data/index.json')

// Function to transform the input data into the desired format
function transformData(inputData) {
    const groupedArray = {};

    inputData.forEach(item => {
        if (item.bypass) return
        
        const { artist } = item;

        if (item.fifi) {
            if (!groupedArray[artist]) {
                groupedArray[artist] = { artist, items: [] };
            }
            groupedArray[artist].items.push(item);
        }
    });

    // Sort the groupedArray alphabetically by surname
    const sortedData = Object.values(groupedArray).sort((a, b) => a.artist.localeCompare(b.artist));
    
    return Object.values(sortedData);
}

// Write the transformed data to a new file
function writeToFile(data, outputPath) {
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
}

// Specify the output file path
const outputFilePath = '../data/indexByArtist.json';

// Transform the data
const transformedData = transformData(inputData);

// Write the transformed data to the output file
writeToFile(transformedData, outputFilePath);

console.log(`Data has been transformed and written to ${outputFilePath}`);