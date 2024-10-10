import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Cooks from "./components/Cooks/Cooks"
import Foods from "./components/Foods/Foods"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import DeletedCook from "./components/DeletedCook/DeletedCook"

function App() {
  const [cooks, setCooks] = useState([]);
  const [deletedCook, setDeletedCook] = useState([]) 

  const handleFoods = (foo) => {
    const isExist = cooks.find((cook) => cook.recipe_id === foo.recipe_id)

    if (!isExist) {
      const newCooks = [...cooks, foo];
      setCooks(newCooks);
    } else {
      toast.error("This recipe is already added.")
    }
  };

  const handleDelete = (id) => {
    const deletedCookItem = cooks.find((cook) => cook.recipe_id === id)
    if (deletedCookItem) {
      const newCooks = cooks.filter((cook) => cook.recipe_id !== id)
      setCooks(newCooks);
      setDeletedCook([...deletedCook, deletedCookItem]); 
    }
  };

  return (
    <main className="w-[1100px] mx-auto">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Recipes></Recipes> 
      </div>
      <div className="md:flex gap-4 ">
    <Foods handleFoods ={ handleFoods } ></Foods>
    
    
    <div className="flex flex-col w-1/2"> 
    <Cooks cooks={cooks} handleDelete ={handleDelete} ></Cooks>
    <ToastContainer></ToastContainer> 
    
  <div><DeletedCook deletedCook={deletedCook}></DeletedCook> </div>
    </div>
    </div>
    </main>
  );
}

export default App;
