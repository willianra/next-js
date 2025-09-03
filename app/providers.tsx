"use client"

import { persistor,store } from "@/store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import {  } from '../store/store';

export function Providers({children}:{children:React.ReactNode}){
    return(
        <Provider store={store}>
        <PersistGate loading={<div> cargando ...</div>} persistor={persistor}>
         {children}
        </PersistGate>
   
        </Provider>

    )
}