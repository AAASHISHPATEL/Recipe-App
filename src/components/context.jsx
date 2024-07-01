import  {createContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';

export  const GlobalContext= createContext(null);



export default function GlobalState({children}) {

  const [searchParam, setSearchParam]=useState("")
const [loading,setLoading]=useState(false);
const [recipes,setRecipe]=useState([]);
const [recipeDetail,setRecipeDetail]=useState(null);
const [favoritesList,setFavoritesList]=useState([]);
  const navigate=useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();

      if(data?.data?.recipes){
        setRecipe(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/")
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

// console.log(recipes);
 function handleFavoritesList(currentItem){
  
  let copyFavList=[...favoritesList];
  const index=copyFavList.findIndex(item=> item.id===currentItem.id);

  if(index===-1){
    copyFavList.push(currentItem);
  }
  else{
    copyFavList.splice(index)
  }
  setFavoritesList(copyFavList);
  
}
// console.log(favoritesList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipes,
        recipeDetail,
        setRecipeDetail,
        handleFavoritesList,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// export default GlobalState
