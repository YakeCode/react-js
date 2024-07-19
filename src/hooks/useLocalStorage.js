import React from "react";

// _________ Custom Hooks___________

function useLocalStorage(itemName,initialValue){

// localStorage init___________________
    
    const localStorageItem = localStorage.getItem(itemName);
    
    let parsedItem;
    
    if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        parsedItem=initialValue;
    }else{
        parsedItem=JSON.parse(localStorageItem);
    }
    
    // localStorage END ________________________
    
    const [item,setItem]=React.useState(parsedItem);
    
    // ACTUALIZAR EL ESTADO Y EL LOCALSTORAGE
    
    const saveItem=(newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem);
    };
    
    return[item,saveItem];
    };

    export {useLocalStorage}