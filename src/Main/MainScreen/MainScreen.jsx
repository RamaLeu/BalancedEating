import React from 'react';

const MainScreen = (props) => {
  return (
    <div className='mainScreen'>
        {props.data.map((food)=>(
            <div className='mainSingleFoodItem'>
                <span>Name: {food.name}</span>
                <span className={`singleFoodData ${food.calBold && "bolded"}`}>Calories: {food.cal}g</span>
                <span className={`singleFoodData ${food.fatBold && "bolded"}`}>Fat: {food.fat}g</span>
                <span className={`singleFoodData ${food.carbsBold && "bolded"}`}>Carbs: {food.carbs}g</span>
                <span className={`singleFoodData ${food.proteinBold && "bolded"}`}>Protein: {food.protein}g</span>
            </div>
        ))}
    </div>
  )
}

export default MainScreen