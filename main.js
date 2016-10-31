var graph = new Graph(200, 1000);




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
graph.addExon(4, 5.5, 1.7);
graph.addExon(6, 2, 1.3);
graph.addExon(6, 4, 2);
graph.addExon(8, 4, 3);
graph.addExon(10, 4, 3);
graph.addExon(12, 4, 3);
graph.addExon(14, 4, 3);

graph.addGeneFamily([0, 4, 11, 14, 16, 17, 18, 19], 'blue');
graph.addGeneFamily([5, 11, 15, 16, 17, 18, 19], 'red');
graph.addGeneFamily([6, 12, 15, 16, 17, 18, 19], 'orange');
graph.addGeneFamily([1, 7, 12, 15, 16, 17, 18, 19], 'lightblue');
graph.addGeneFamily([2, 8, 12, 15, 16, 17, 18, 19], 'green');
graph.addGeneFamily([3, 9, 12, 15, 16, 17, 18, 19], 'brown');
graph.addGeneFamily([10, 13, 16], 'brown');



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
