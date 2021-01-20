//Use the D3 library to read in samples.json
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

function getSampleData(id) {
    d3.json("samples.json").then((data) => {
        console.log(data);

      let metadata = data.metadata;
      // Filter the data by subject's id
      let idfilter = metadata.filter(item => item.id == id);
      
      let result = resultArray[0];
      
      // Use d3 to select the panel with id of `#sample-metadata`
      let PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });