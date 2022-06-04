import React, { useState } from 'react';
import './MainInput.css';

const MainInput = (props) => {
    let [cal, setCal] = useState(0);
    let [fat, setFat] = useState(0);
    let [carbs, setCarbs] = useState(0);
    let [protein, setProtein] = useState(0);
    let [listType, setListType] = useState("menu");

    function submitData(e){
        e.preventDefault();
        props.filterList({
            cal: cal,
            fat: fat,
            carbs: carbs,
            protein: protein,
            listType: listType
        })
    }
  return (
    <div className='mainInput'>
        <div className='mainInputShowAll'>
            <button className='allBtns' onClick={()=>{props.showAll()}}>Show all items</button>
        </div>
        <span>Enter your information below to get the best possible choices!</span>
        <button className='helpBtn allBtns' onClick={()=>{props.help()}}>?</button>
        <div className='mainInputSwitch'>
            <button className={listType === "menu" ? 'inputSwitchBtn radius-left allBtns checked' : 'inputSwitchBtn radius-left allBtns'} onClick={()=>{setListType("menu")}}>Menu</button>
            <button className={listType === "individual" ? 'inputSwitchBtn radius-right allBtns checked' : 'inputSwitchBtn radius-right allBtns'} onClick={()=>{setListType("individual")}}>Individual Items</button>
        </div>
        <form onSubmit={(e)=>{submitData(e)}} className="inputForm">
            <label>Calories/g (Cal)</label>
            <input type="number" min="0" step="0.01" max="10000" onChange={(e)=>{setCal(e.target.value)}} className="inputFormField" placeholder='Calories/kcal'></input>
            <label>Fat/g</label>
            <input type="number" min="0" step="0.01" max="10000" onChange={(e)=>{setFat(e.target.value)}} className="inputFormField" placeholder='Fat/g'></input>
            <label>Carbs/g</label>
            <input type="number" min="0" step="0.01" max="10000" onChange={(e)=>{setCarbs(e.target.value)}} className="inputFormField" placeholder="Carbs/g"></input>
            <label>Protein/g</label>
            <input type="number" min="0" step="0.01" max="10000" onChange={(e)=>{setProtein(e.target.value)}} className="inputFormField" placeholder="Protein/g"></input>
            <input type="submit" min="0" step="0.01" max="10000" value="Search!" className='inputSubmitBtn allBtns'></input>
        </form>
        {props.showTotalInfo &&
        <div className='inputTotalSummary'>
            <div>Total summary of all products:</div>
            <div>cals: {props.totalInfo.cal}g</div>
            <div>fat: {props.totalInfo.fat}g</div>
            <div>carbs: {props.totalInfo.carbs}g</div>
            <div>protein: {props.totalInfo.protein}g</div>
        </div>}
    </div>
  )
}

export default MainInput