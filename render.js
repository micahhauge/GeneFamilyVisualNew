stage.on('message:externalData', function(data) {
  var i, j, k;
  var graph = JSON.parse(data.nodeData)
  var visual = new GraphVisual(graph);


  function GraphVisual (graph) {
    this.exonGraphics = [];
    this.familyGraphics = [];
    this.edges = [];

    // create exonGraphics
    for (i = 0; i < graph.exons.length; i++) {
      this.exonGraphics.push(new ExonGraphic(graph.exons[i], i));
    }

    // create geneFamilyGraphics
    for (var i = 0; i < graph.geneFamilies.length; i++) {
      this.familyGraphics.push(new FamilyGraphic(graph.geneFamilies[i], this.exonGraphics));
    }

    // render genegFamilyGraphics
    for (var i = 0; i < this.familyGraphics.length; i++) {
      this.familyGraphics[i].familyPath.addTo(stage);
    }

    // render exonGraphics
    for (var i = 0; i < this.exonGraphics.length; i++) {
      this.exonGraphics[i].graphic.addTo(stage);
      this.exonGraphics[i].info.addTo(stage);
    }

    return this;
  }


  function FamilyGraphic (family, exonGraphics) {
    var genOffset = -15;
    this.familyPath = new Path();
    this.familyPath.moveTo(exonGraphics[family.exons[0]].centerX, exonGraphics[family.exons[0]].centerY + genOffset);


    // connect all of the exons in the family
    for (var i = 0; i < family.exons.length; i++) {
      exonGraphics[family.exons[i]].familyCount += 1;

      var lineOffset = exonGraphics[family.exons[i]].familyCount + (exonGraphics[family.exons[i]].graphicSize * -.03);

      if (i > 1) {
        this.familyPath.moveTo(exonGraphics[family.exons[i-1]].centerX, exonGraphics[family.exons[i-1]].centerY + (7 * lineOffset));
      }
      this.familyPath.lineTo(exonGraphics[family.exons[i]].centerX, exonGraphics[family.exons[i]].centerY + (7 * lineOffset));
    }
    this.familyPath.stroke(family.familyColor, 3);
    return this;
  }


  function ExonGraphic (exon, text) {
    // padding between nodes
    var padding = 50;
    var margin = 10;
    var roundness = .5;
    var stroke = 1.5;
    var nodeSize = 40;

    this.graphicSize = nodeSize * exon.graphicSize;
    graphicSize = nodeSize * exon.graphicSize;

    this.familyCount = 0;
    this.graphic = new Rect(exon.x*(nodeSize + padding) + margin, exon.y*(nodeSize + padding) + margin - (.5 * graphicSize), this.graphicSize, this.graphicSize, graphicSize * roundness);
    this.graphic.fill('#cceeff');
    this.graphic.stroke('#000000', stroke)
    this.centerX = exon.x*(nodeSize + padding) + margin + .5 * this.graphicSize;
    this.centerY = exon.y*(nodeSize + padding) + margin;

    this.info = new Text(text).attr({
      x: this.centerX-6,
      y: this.centerY-7,
      fontFamily: 'Futura, Arial, sans-serif',
      fontSize: '18',
      textStrokeWidth: 1
    });

    // ligt up the node when the mouse hovers over it
    this.graphic.on('pointermove', function(e) {
      this.fill('lightgreen');
      console.log('mouse over node');
    });

    return this;
  }
});
