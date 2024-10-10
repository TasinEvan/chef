import { useEffect } from "react";
import { useState } from "react";
import Foo from "../Foo/Foo";
import PropTypes from 'prop-types'


const Foods = ({handleFoods}) => {
    const [foods ,setFoods] = useState([])

    useEffect(()=>{
        fetch("food.json")
        .then( res => res.json())
        .then( data => setFoods(data))
    },[])
    return (
        <div className="md:w-2/3"  >
            
            
           <div className="grid grid-cols-2 gap-5 ">
           {
                foods.map(foo  => <Foo 
                    key={foo.recipe_id}
                     foo={foo}
                     handleFoods = {handleFoods}
                      ></Foo>)
            }
           </div>
        </div>
    );
};

Foods.propTypes={
    handleFoods: PropTypes.func
}

export default Foods;