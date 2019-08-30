function canvas() {
  const canvasEl = document.getElementById('canvas');
  if (canvasEl.getContext) {
    const ctx = canvasEl.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

canvas();
