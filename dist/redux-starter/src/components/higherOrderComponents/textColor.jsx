const TextColor = (WrapperComponent) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'],
    interpolatedClass = `${colors[Math.floor(Math.random() * 5)]}-text`;
  return (
    props => (
      <WrapperComponent generatedClass={interpolatedClass} {...props} />
    )
  );
};

export default TextColor;
