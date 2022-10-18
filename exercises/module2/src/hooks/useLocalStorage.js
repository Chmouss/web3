import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    let localStorageValue = (JSON.parse(localStorage.getItem(key)))
    if(!localStorageValue){
        localStorage.setItem(key, initialValue)
        localStorageValue = initialValue
    }

    return (useState(localStorageValue))

}

export default useLocalStorage