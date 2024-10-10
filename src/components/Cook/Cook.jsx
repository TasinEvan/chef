import PropTypes from 'prop-types';

const Cook = ({cook,idx,handleDelete}) => {
    
   
    const {recipe_name ,preparing_time,calories} = cook
    return (
        <div>
  
   <div className=" bg-slate-100 rounded-xl overflow-x-auto flex">
   <div className='pl-3 pt-2 font-bold'> <p>{idx+1}</p></div> 
  <table className="table">
    
    
    <tbody>
     
      <tr>
        <th></th>
        <td> {recipe_name}</td>
        <td> {preparing_time} </td>
        <td> {calories}</td>
        
      </tr>
      
    </tbody>
  </table>
  <button onClick={()=>handleDelete(cook.recipe_id)} className="rounded-3xl h-3 w-20  btn bg-green-500">Preparing</button>
</div>

        </div>
    );
};
Cook.propTypes ={
    cook:PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handleDelete:PropTypes.func
}
export default Cook;