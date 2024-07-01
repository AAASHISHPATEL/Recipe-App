import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../src/components/context';
import RecipeItem from '../src/components/RecipeItem';

function Home() {

  const {recipes,loading}=useContext(GlobalContext);
  const [allRecipe,setAllRecipe]=useState(null)

  // async function fetchAllRecipe(){
  //   const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/");
  //   const alldata=await res.json();
  //   setAllRecipe(alldata?.data)
  //   console.log(alldata);
  // }



  if(loading){
    return (
      <div>
        <h1 className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Loading...
        </h1>
      </div>
    );
  }

  // useEffect(()=>{
  //   fetchAllRecipe();
  // },[])


  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes && recipes.length > 0 ? (
        recipes.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>

        </div>
      )}
    </div>
  );
}

export default Home
