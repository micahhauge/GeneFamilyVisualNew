var graph = new Graph(200, 1000);




graph.addExon(1, 1);
graph.addExon(1, 4);

// graph.addGeneFamily([0, 1], 'blue');


// graph.addExon(1, 1);
// graph.addExon(1, 2);
// graph.addExon(1, 3);
// graph.addExon(2, 1);
// graph.addExon(3, 1);
// graph.addExon(4, 2);
// graph.addExon(6, 2);
// graph.addExon(7, 1);
// graph.addExon(9, 1);
// graph.addExon(3, 3);
// graph.addExon(5, 3);
// graph.addExon(8, 2);
//
// graph.addGeneFamily([0, 3, 4, 6, 7], 'blue');
// graph.addGeneFamily([0, 3, 4, 7, 8], 'yellow');
// graph.addGeneFamily([1, 4, 5, 6, 8], 'red');
// graph.addGeneFamily([2, 5, 6, 8], 'green');
// graph.addGeneFamily([2, 9, 10, 11, 8], 'orange');



graph.render();
