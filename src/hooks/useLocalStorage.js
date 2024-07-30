import React from "react";

// _________ Custom Hooks___________

function useLocalStorage(itemName, initialValue){

    const [item,setItem]=React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);


    React.useEffect(()=>{

        setTimeout (()=>{
            try {

                // localStorage init___________________
            
                const localStorageItem = localStorage.getItem(itemName);
            
                let parsedItem;
        
                if(!localStorageItem){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }else{
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                }
            // localStorage END ________________________
        
            setLoading(false)
        
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        },2000);
    }, [])

    // ACTUALIZAR EL ESTADO Y EL LOCALSTORAGE
    
    const saveItem=(newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem);
    };
    
    return {
        item,
        saveItem,
        loading, 
        error
    };
    
    };

    export {useLocalStorage}