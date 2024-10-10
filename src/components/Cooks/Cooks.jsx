import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';

const Cooks = ({cooks,handleDelete}) => {
    


    return (
        <div className=" text-center  ">
            <h3 className='text-lg font-bold my-2' >Want to cook: {cooks.length}</h3>
            <hr />
            <div className="overflow-x-auto">
  <table className="table">
 
    <thead>
      <tr>
        <th>{} </th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    </table>
    </div>
   
    
            {
                cooks.map((cook,idx) => <Cook
                 key={cook.recipe_id} 
                 cook={cook} idx={idx} 
                 handleDelete ={handleDelete}
                 ></Cook>)
            }
        </div>
    );
};
Cooks.propTypes ={
    cooks:PropTypes.array,
    handleDelete:PropTypes.func

}
export default Cooks;