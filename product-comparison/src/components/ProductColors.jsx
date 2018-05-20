export const ProductColors = props => {
  return (
    <div className='available-colors mb-4 d-flex justify-content-center'>
      {
        props.availableColors.map(item => {
          return <span className={`bg-${item}`}></span>
        })
      }
    </div>
  );
};
