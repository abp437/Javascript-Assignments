import PropTypes from 'prop-types';
import TextColor from './higherOrderComponents/textColor';

const Contact = (props) => {
  const { generatedClass, } = props;
  return (
    <div className={generatedClass}>
      <h4 className="center">Contact</h4>
      <p className="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur amet reprehenderit porro? Quas ipsum ipsam quisquam cumque, ad, corrupti voluptates
        quis ex sunt harum necessitatibus cum optio sed doloribus quos.
      </p>
    </div>
  );
};

Contact.propTypes = {
  generatedClass: PropTypes.string,
};

Contact.defaultProps = {
  generatedClass: '',
};

export default TextColor(Contact);
