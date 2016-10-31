function renderGraph (graph) {
  bonsai.run(document.getElementById('visual'), {
    code: function() {
      new Rect(10, 10, 100, 100)
        .addTo(stage)
        .attr('fillColor', 'green');
    }
    width: screen.width,
    height: screen.height / 2
  });
}
