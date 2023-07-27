import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled'

const Section = ({title, children}) => {
  return (
    <StyledSection>
      {title && <h2 className = "h2">{title}</h2>}
      {children}
    </StyledSection>
  )
}
Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}
export default Section