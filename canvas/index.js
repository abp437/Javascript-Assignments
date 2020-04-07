const canvasData = [
  {
    optionText: 'Ja',
    voteCount: 122,
  },
  {
    optionText: 'Nein',
    voteCount: 23,
  },
  {
    optionText: 'Heil',
    voteCount: 672,
  }
];

const generateColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('herr-aadolf');
  const canvasContext = canvasElement.getContext('2d');

  canvasElement.width = 600;
  canvasElement.height = 600;

  const totalVotes = canvasData.reduce((total, pollOption) => {
    const { voteCount } = pollOption;
    return total + voteCount;
  }, 0);

  let startAngle = 0;
  const radius = 100;
  const centerXAxis = canvasElement.width / 2;
  const centerYAxis = canvasElement.height / 2;

  // The arcs of the circle are calculated in Radians
  canvasData.forEach((pollOption) => {
    const { voteCount } = pollOption;
    // Set the style before beginPath()
    canvasContext.fillStyle = generateColor();
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = '#64c486';

    // BeginPath is actually the place where you can start drawing the Chart Arc
    canvasContext.beginPath();

    // Draw the Pie Wedges
    let endAngle = ((voteCount / totalVotes) * (Math.PI * 2) + startAngle);

    canvasContext.moveTo(centerXAxis, centerYAxis);
    canvasContext.arc(centerXAxis, centerYAxis, radius, startAngle, endAngle, false);
    canvasContext.lineTo(centerXAxis, centerYAxis);
    canvasContext.fill();
    canvasContext.stroke();
    canvasContext.closePath();

    startAngle = endAngle;
  });
});
