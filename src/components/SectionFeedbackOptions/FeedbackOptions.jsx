import PropTypes from 'prop-types';
import { FeedbackBtnList, FeedbackBtn } from './FeedbackOptions.styled';

function FeedbackOptions({ options, handleFeedback }) {
  return (
    <FeedbackBtnList>
      {options.map(option => (
        <li key={option}>
          <FeedbackBtn type="button" onClick={() => handleFeedback(option)}>
            {option}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackBtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
