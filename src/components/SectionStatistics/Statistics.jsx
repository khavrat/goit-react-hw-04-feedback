import PropTypes from 'prop-types';
import { StatisticList, StatisticItem, SpanItem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }){
  return (
    <div>
      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
      </StatisticList>
      <StatisticList>
        <StatisticItem>
          Total: <SpanItem>{total}</SpanItem>
        </StatisticItem>
        <StatisticItem>
          Positive feedback:{' '}
          <SpanItem>
            {isNaN(positivePercentage) ? 0 : positivePercentage}%
          </SpanItem>
        </StatisticItem>
      </StatisticList>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
