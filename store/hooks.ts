import { TypedUseSelectorHook,useSelector, useDispatch } from "react-redux";
import { AppDispatch,RootState } from "./store";

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppselector:TypedUseSelectorHook<RootState>=useSelector;