function getRandomFloat(minimum, maximum) {
  return Math.random() * (maximum - minimum) + minimum;
}

function getRandomInt(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function getRandomBool() {
  return Math.round(Math.random());
}

function getRandomColor () {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

document.getElementById('download').addEventListener("click", download);
// function to downlaod svg with id 'visual'
function download () {
  //get svg element.
  var svg = document.getElementById("visual");

  //get svg source.
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  //add name spaces.
  if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
      source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  //convert svg source to URI data scheme.
  var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

  //set url value to a element's href attribute.
  // var downloadButton = document.getElementById("download");

  var downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = "graph.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  // document.body.removeChild(downloadLink);
  //you can download svg file by right click menu.
}
