const chartCliftonStrengths = document.getElementById('chartCliftonStrengths');
const chartjsCliftonStrengths = new Chart(chartCliftonStrengths, {
  type: 'doughnut',
  plugins: [{
    beforeDraw: chart => {
      var ctx = chart.ctx;
      ctx.save();
      var image = new Image();
      image.src = 'https://avatars.githubusercontent.com/u/15380237?v=4';
      const { top, left, width, height } = chart.chartArea;
      imageSize = (width) * 0.5;
      const x = left + width / 2 - imageSize / 2;
      const y = top + height / 2 - imageSize / 2;
      ctx.drawImage(image, x, y, imageSize, imageSize);
      ctx.restore();
    }
  }],
  data: {
    labels: [
      'Input',
      'Futuristic',
      'Maximizer',
      'Harmony',
      'Empathy',
    ],
    datasets: [{
      data: [5, 4, 3, 2, 1],
      backgroundColor: [
        getComputedStyle(chartCliftonStrengths).getPropertyValue('--bs-primary'),
        getComputedStyle(chartCliftonStrengths).getPropertyValue('--bs-secondary'),
        getComputedStyle(chartCliftonStrengths).getPropertyValue('--bs-success'),
        getComputedStyle(chartCliftonStrengths).getPropertyValue('--bs-info'),
        getComputedStyle(chartCliftonStrengths).getPropertyValue('--bs-warning'),
        getComputedStyle(chartCliftonStrengths).getPropertyValue('--bs-danger'),
      ],
      hoverOffset: 4
    }]
  },
  options: {
    events: [],
  },
});