import { IPath } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

type TypeAction = {
    type: string;
    payload: IPath;
};

const initialState = {
    path: [{ name: "Dashboard", link: "/dashboard" }],
};

const pathSlice = createSlice({
    name: "path",
    initialState,
    reducers: {
        appendPath: (state, action: TypeAction) => {
            state.path.push(action.payload);
        },
        setPath: (state, action: TypeAction) => {
            state.path = [{ ...action.payload }];
        },
    },
});

export default pathSlice;
