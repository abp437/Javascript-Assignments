import PropTypes from 'prop-types';
import TextColor from './higherOrderComponents/textColor';

const About = (props) => {
  const { generatedClass, title, } = props;
  return (
    <div className={generatedClass}>
      <h4 className="center">{title}</h4>
      <p className="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur amet reprehenderit porro? Quas ipsum ipsam quisquam cumque, ad, corrupti voluptates
        quis ex sunt harum necessitatibus cum optio sed doloribus quos.
      </p>
    </div>
  );
};

About.propTypes = {
  generatedClass: PropTypes.string,
  title: PropTypes.string,
};

About.defaultProps = {
  generatedClass: '',
  title: '',
};

export default TextColor(About);
