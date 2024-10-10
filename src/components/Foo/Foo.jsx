import PropTypes from 'prop-types'
import { BsStopwatch  } from "react-icons/bs";
import { PiBowlFood } from "react-icons/pi";





const Foo = ( {foo, handleFoods }) => {
const {image , recipe_name ,description, ingredients, preparing_time , calories} = foo
    return (
        <div className='my-7'>
            <div className="card w-auto  shadow-xl h-[650px] bg-slate-50">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center md:items-start  md:text-left    ">
    <h2 className=" card-title">{recipe_name}</h2>
    <p>{description}</p>
    <h4 className=" text-lg text-gray-800 font-semibold  ">Ingredients : {ingredients.length}</h4>
    <ul className='text-gray-600 text-sm font-semibold '>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <div className="flex gap-6 my-3">

<p className='flex gap-1 items-center'><BsStopwatch></BsStopwatch> <span>{preparing_time}</span> Minutes </p>
 <p className='flex gap-1 items-center'><PiBowlFood></PiBowlFood> <span>{calories}</span> Calories </p> 
        
      </div>
    <div className="card-actions">
    
      <button onClick={()=>handleFoods(foo)} className="rounded-3xl  btn bg-green-500">Want to cook</button>
    </div>
  </div>
</div>
            
        </div>
    );
};
Foo.propTypes ={
    foo:PropTypes.object.isRequired,
    handleFoods:PropTypes.func
    
}
export default Foo;