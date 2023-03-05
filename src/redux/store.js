import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
