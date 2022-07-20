import { configureStore } from "@reduxjs/toolkit";
import {todos} from "./tools/reducers";

const rootReducer = {todos,};

export const store = configureStore({ reducer: rootReducer });