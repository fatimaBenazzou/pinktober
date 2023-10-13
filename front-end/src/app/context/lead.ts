import { createSlice, createAsyncThunk, SliceCaseReducers } from "@reduxjs/toolkit";
import axios from "axios";
interface LeadI {
    isLoading: boolean;
    leads: unknown[];
}
export const getLeadsContent = createAsyncThunk("/leads/content", async () => {
    const response = await axios.get("/api/users?page=2", {});
    return response.data;
});

export const leadsSlice = createSlice<LeadI, SliceCaseReducers<LeadI>, "leads">({
    name: "leads",
    initialState: {
        isLoading: false,
        leads: [],
    },
    reducers: {
        addNewLead: (state, action) => {
            const { newLeadObj } = action.payload;
            state.leads = [...state.leads, newLeadObj];
        },

        deleteLead: (state, action) => {
            const { index } = action.payload;
            state.leads.splice(index, 1);
        },
    },
});

export const { addNewLead, deleteLead } = leadsSlice.actions;

export default leadsSlice.reducer;
