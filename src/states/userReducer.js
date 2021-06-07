import {
    createAction,
    createReducer,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";


export const postData = createAsyncThunk(
    "CREATE_USER",
    ({ mail, password, name, lastName, dni, cuil, bankName, phone, selectRegion, bankClass, cbu, province, city, zipCode, direction, workExperience, education }) => {
        return axios.post("localhost:3000", {
            mail: mail,
            password: password,
            name: name,
            lastName: lastName,
            dni: dni,
            phone: phone,
            selectRegion: selectRegion,
            cuil: cuil,
            bankName: bankName,
            bankClass: bankClass,
            cbu: cbu,
            province: province,
            city: city,
            zipCode: zipCode,
            direction: direction,
            education: education,
            workExperience: workExperience
        })
    }
);

const userReducer = createReducer([], {
    [postData.fulfilled]: (state, action) => action.payload,

});

export default userReducer;

