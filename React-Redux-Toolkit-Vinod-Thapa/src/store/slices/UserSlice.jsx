import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      console.log("inside remove user" + action.payload);
      // state.pop(action.payload);
      state.splice(action.payload, 1);
    },
    // removeAllUser(state, action) {
    //   console.log("Action Payload All Deltete: ");
    //   return [];
    // },

    // ❌ WRONG: extraReducers cannot be written here inside reducers
    // extraReducers(builder) {                                    // extraReducers() {
    //   builder.addCase(userSlice.actions.removeAllUser, () => {
    //     return [];
    //   });
    // }
    // }
  },

  // ✅ Correct placement of extraReducers : 
  // not depend on other slice 
  extraReducers: (builder) => {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  }
});

console.log(userSlice.actions);
export { userSlice };
export const { addUser, removeUser } = userSlice.actions;
