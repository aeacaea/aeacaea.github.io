
window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#54086b", "#00bec5", "#ff0bac"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#54086b", "#00bec5", "#ff0bac"],
        maxParticles: 60,
        connectParticles: true
      }
    }
  ]
});