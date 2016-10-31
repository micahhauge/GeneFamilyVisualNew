/** Author: Micah Hauge
 *  This is a library to create a visual representation of nodes and edges within a Gene Family
 */

var i, j, k;



/** Graph object definition
 *  This object contains the exon and gene family data
 *  required to generate a visual graph.
 *  @param width : the width in pixels of the graph
 *  @param height : the height in pixels of the graph
 *  @param xGrid : the number of horizontal grid units that the graph should be broken up into
 *  @param yGrid: the number of vertical grid units that the graph should be broken up into
 *  @attribute exons : an array of exon objects
 *  @attribute geneFamilies: an array of geneFamily objects
 *  @method addExon : adds an exon to the graph
 *  @method addGeneFamily : adds a geneFamily to the graph
 */
function Graph (width, height, xGrid, yGrid) {
  this.exons = [];
  this.geneFamilies = [];
  this.width = width;
  this.height = height;

  this.addExon = function (x, y, graphicSize) {
    this.exons.push(new Exon(x, y, graphicSize));
  }

  this.addGeneFamily = function (exons, color) {
    this.geneFamilies.push(new GeneFamily(exons, color));
  }

  this.render = function () {
    renderGraph(this);
  }

  return this;
}


/** Exon object definition
 *  @param x : where the exon should be positioned horizontally (in grid units, not pixels)
 *  @param y : where the exon should be positioned vertically (in grid units, not pixels)
 *  @attribute familyList : a list of geneFamilies that this Exon appears in
 */
function Exon (x, y, graphicSize = 1) {

  this.x = x;
  this.y = y;
  this.graphicSize = graphicSize;
  this.familyList = [];
  return this;
}


/** GeneFamily object definition
 *  @param exonList : a list of all of the exons in the geneFamily
 */
function GeneFamily (exons, color) {
  this.exons = exons;
  this.familyColor = color;
  return this;
}


/**  Function to render the graph
 *   @param graph : the graph to render
 */
function renderGraph (graph) {
  var graphDataString = JSON.stringify(graph);

  // the code that actually renders the graph is on a different thread. The code
  // to be executed in the thread is in 'render.js'. because it is in a different context,
  // the graph data must be sent to it as a string
  var bonsaiContext = bonsai.run(
    document.getElementById('visual'),
    {
      url: 'render.js',
      width: screen.width * 3,
      height: 800}
  );

  // pass the rendering thread the node data in string form
  bonsaiContext.sendMessage('externalData', {
    nodeData: graphDataString
  });
}
