import PropTypes from 'prop-types';

const Cookings = ({ Cookings }) => {
  if (!Cookings) {
    return null; // If there's no deleted cook, render nothing
  }

  const { recipe_id, recipe_name, preparing_time, calories } = Cookings;

  return (
    <div>
      <h2>Deleted Cook</h2>
      <p>Recipe ID: {recipe_id}</p>
      <p>Recipe Name: {recipe_name}</p>
      <p>Preparing Time: {preparing_time}</p>
      <p>Calories: {calories}</p>
    </div>
  );
};

Cookings.propTypes = {
  Cookings: PropTypes.object // Ensure deletedCook prop is an object
};

export default Cookings;
