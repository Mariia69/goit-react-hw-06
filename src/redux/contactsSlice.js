import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items:[]
        }
    },
    reducers: {
        addContact:
        {
            reducer: (state, action) => {
                state.contacts.items.push(action.payload.contact)
            },
            prepare: (newContact) => {
              const id = crypto.randomUUID();
                return {
                    payload: {
                        contact: {newContact,id}
                    }
                };
            }
        },

        deleteContact: (state, action) => {
               state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
        }
    }
    
});

export const { addContact, deleteContact } = slice.actions;

export const contactsList = state => state.contacts.contacts.items;
export const filter = state => state.filters.filters.name;

export default slice.reducer;