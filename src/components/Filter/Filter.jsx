import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ value, toFilter }) => {
  return (
    <Label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" value={value} onChange={toFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  toFilter: PropTypes.func.isRequired,
};
