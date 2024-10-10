import PropTypes from 'prop-types';
import Dook from '../Dook/Dook';

const DeletedCook = ({ deletedCook }) => {
  console.log(deletedCook);
  
  
  

  return (
    <div className="text-center">
      <h3 className="text-lg font-bold my-2">Currently Cooking: {deletedCook.length}</h3>
      <hr />
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
         
        </table>
      </div>
      
           
           {deletedCook.map((dook, idx) => (
             <Dook key={dook.recipe_id} dook={dook} idx={idx} />
           ))}
         

    </div>
  );
};

DeletedCook.propTypes = {
  deletedCook: PropTypes.arrayOf(PropTypes.object), 
};

export default DeletedCook;
