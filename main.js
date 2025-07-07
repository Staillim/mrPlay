setInterval(function () {
    const start = new Date();
    debugger;
    const end = new Date();
    if (end - start > 100) {
      alert("¡DevTools detectado!");
    }
  }, 1000);
  