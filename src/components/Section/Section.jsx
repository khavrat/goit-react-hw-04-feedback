import PropTypes from 'prop-types';
import { SectionStyle, SectionTitle } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionStyle>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
