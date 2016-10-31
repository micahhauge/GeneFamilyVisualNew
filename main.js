// creates a graph object
var graph = new Graph();

// adds an exon to the graph
// usage: graph.addExon(xpos, ypos, [size, ]);
graph.addExon(1, 1);
graph.addExon(1, 4);
graph.addExon(1, 5);
graph.addExon(1, 6);
graph.addExon(2, 1);
graph.addExon(2, 2);
graph.addExon(2, 3);
graph.addExon(2, 4);
graph.addExon(2, 5);
graph.addExon(2, 6);
graph.addExon(2, 7);
graph.addExon(4, 2, 1.3);
graph.addExon(4, 4, 1.7);
graph.addExon(4, 5.5, 1.9);
graph.addExon(6, 2, 1.9);
graph.addExon(6, 4, 2);
graph.addExon(8, 4, 3);
graph.addExon(10, 4, 3);
graph.addExon(12, 4, 3);
graph.addExon(14, 4, 3);
graph.addExon(16.5, 3, 2);
graph.addExon(17.5, 5.5, 2.5);
graph.addExon(18.5, 3, 2);
graph.addExon(19.5, 7, 2);
graph.addExon(21.5, 4, 3);

// adds a GeneFamily to the graph
// usage: graph.addGeneFamily([exonse in the family], 'color'); color can be hex code or a literal color
graph.addGeneFamily([0, 4, 11, 14, 16, 17, 18, 19, 20, 22, 24], 'blue');
graph.addGeneFamily([5, 11, 15, 16, 17, 18, 19, 20, 22, 24], 'red');
graph.addGeneFamily([6, 12, 15, 16, 17, 18, 19, 20, 22, 24], 'orange');
graph.addGeneFamily([1, 7, 12, 15, 16, 17, 18, 19, 21, 24], 'lightblue');
graph.addGeneFamily([2, 8, 12, 15, 16, 17, 18, 19, 21, 23, 24], 'green');
graph.addGeneFamily([3, 9, 12, 15, 16, 17, 18, 19, 21, 23, 24], 'brown');
graph.addGeneFamily([10, 13, 16], 'black');

graph.render();
