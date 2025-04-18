document.addEventListener('click', function (event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
  
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: x, y: y }
    });
  });
  window.addEventListener("load", function () {
    function updateHiddenMessage() {
      let zoom = window.outerWidth / window.innerWidth;
      let opacity = Math.min((zoom - 1) * 2, 1);
      document.getElementById("hidden-message").style.opacity = opacity;
    }
  
    updateHiddenMessage();
    window.addEventListener("resize", updateHiddenMessage);
  });
  
  document.getElementById("secret-zone").addEventListener("click", function () {
    document.getElementById("hidden-message").style.opacity = 1;
  });
    