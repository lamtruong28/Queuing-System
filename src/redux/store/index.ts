import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import deviceSlice from "../slices/deviceSlice";
import numericalSlice from "../slices/numericalSlice";
import pathSlice from "../slices/pathSlice";
import roleSlice from "../slices/roleSlice";
import serviceSlice from "../slices/serviceSlice";
import UserSlice from "../slices/UserSlice";

const store = configureStore({
    reducer: {
        path: pathSlice.reducer,
        users: UserSlice.reducer,
        devices: deviceSlice.reducer,
        services: serviceSlice.reducer,
        numericalList: numericalSlice.reducer,
        role: roleSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
