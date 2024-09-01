import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
          // localStorage init___________________
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 1000);
    }, []);

    // ACTUALIZAR EL ESTADO Y EL LOCALSTORAGE
    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        }catch (error) {
            setError(true);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };