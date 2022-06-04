import React, {useState} from 'react';
import './Main.css';
import MainInput from './MainInput/MainInput';
import MainScreen from './MainScreen/MainScreen';
import { data } from "../Data/Food";
import Swal from 'sweetalert2';

const Main = () => {
    let [foodData, setFoodData] = useState(data);
    let [totalInfo, setTotalInfo] = useState({
        cal: 0.0,
        fat: 0.0,
        carbs: 0.0,
        protein: 0.0
    });
    let [showTotalInfo, setShowTotalInfo] = useState(false);


    function filterList(input){
        let tempFoodData = [];
        setTotalInfo({
            cal: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        });
        let tempInfo = {
            cal: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        };
        if(input.listType === "menu"){
            console.log("menu")
            let totalData = {
                cal: input.cal,
                fat: input.fat,
                carbs: input.carbs,
                protein: input.protein
            };
            let copyData = data.sort( () => .5 - Math.random() );
            copyData.map((food)=>{
                food.calBold = false;
                food.fatBold = false;
                food.carbsBold = false;
                food.proteinBold = false;
                if(totalData.cal !==0 || totalData.fat !==0 || totalData.carbs !==0 || totalData.protein !==0){
                    /* console.log(`${totalData.cal} : ${totalData.fat} : ${totalData.carbs} :${totalData.protein} `); */
                    tempInfo.cal = parseFloat(tempInfo.cal) + parseFloat(food.cal);
                    totalData.cal = subtractAndEqualize(totalData.cal, food.cal);
                    tempInfo.fat = parseFloat(tempInfo.fat) + parseFloat(food.fat);
                    console.log(food.fat);
                    console.log(tempInfo.fat);
                    totalData.fat = subtractAndEqualize(totalData.fat, food.fat);
                    tempInfo.carbs = parseFloat(tempInfo.carbs) + parseFloat(food.carbs);
                    totalData.carbs = subtractAndEqualize(totalData.carbs, food.carbs);
                    tempInfo.protein = parseFloat(tempInfo.protein) + parseFloat(food.protein);
                    totalData.protein = subtractAndEqualize(totalData.protein, food.protein);
                    tempInfo.cal = tempInfo.cal.toFixed(1);
                    tempInfo.fat = tempInfo.fat.toFixed(1);
                    tempInfo.carbs = tempInfo.carbs.toFixed(1);
                    tempInfo.protein = tempInfo.protein.toFixed(1);
                    tempFoodData.push(food);
                }
            });
            setTotalInfo(tempInfo);
            setShowTotalInfo(true);
            setFoodData(tempFoodData);
        }else if(input.listType === "individual"){
            let tempFoodData = [];
            setShowTotalInfo(false);
            let copyData = data.sort( () => .5 - Math.random() );
            copyData.map((food)=>{
                food.calBold = false;
                food.fatBold = false;
                food.carbsBold = false;
                food.proteinBold = false;
                let valid = false;
                if(food.cal === input.cal){
                    valid = true;
                    food.calBold = true;
                }if(food.fat === input.fat){
                    valid = true;
                    food.fatBold = true;
                }
                if(food.carbs === input.carbs){
                    valid = true;
                    food.carbsBold = true;
                }
                if(food.protein === input.protein){
                    valid = true;
                    food.proteinBold = true;
                }
                if(valid){
                    tempFoodData.push(food);
                }
            });
            setFoodData(tempFoodData);
            console.log("the list is individual");
        }
    }

    function subtractAndEqualize(sum, amount){
        sum -= amount;
        if(sum <0){
            sum = 0;
        };
        return sum;
    }

    function help(){
        Swal.fire({
            text: 'When you search with the "Menu" switch turned on, the program tries to give you all the available ingredients up to the Cal/fat/etc point that you set, and gives you the total under the form. When you search with the "Individual item" switch on, the program finds items that are 100% match to atleast one of your desired inputs(Cal/Protein/Fat/etc)',
            confirmButtonText: 'Cool'
          });
    }

    function showAll(){
        setFoodData(data);
        setTotalInfo({
            cal: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        });
        setShowTotalInfo(false);
        data.forEach((food)=>{
            food.calBold = false;
            food.fatBold = false;
            food.carbsBold = false;
            food.proteinBold = false;
        });
    }
  return (
    <main >
        <MainInput filterList={filterList} totalInfo={totalInfo} showTotalInfo={showTotalInfo} help={help} showAll={showAll}/>
        <MainScreen data={foodData} totalInfo={totalInfo} showTotalInfo={showTotalInfo}/>
    </main>
  )
}

export default Main