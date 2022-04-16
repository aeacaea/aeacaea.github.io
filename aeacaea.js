
window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#21b6a8", "#a3ebb1", "#ff0266"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#21b6a8", "#a3ebb1", "#ff0266"],
        maxParticles: 60,
        connectParticles: true
      }
    }
  ]
});