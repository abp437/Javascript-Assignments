import PropTypes from 'prop-types';

const Ninja = (props) => {
  const { belt, } = props;
  return (
    <div>
      <span>{belt}</span>
    </div>
  );
};

Ninja.propTypes = {
  belt: PropTypes.string,
};

Ninja.defaultProps = {
  belt: 'White',
};

export default Ninja;
