import { createSelector } from "reselect";

const getVisibilityClients = state => state.filterReducer;
const getClients = state => state.myReducer;

export const getVisibleClients = createSelector(
  [getVisibilityClients, getClients],
  (filter, clients) => {
        return clients.filter(item  => {
           return item.name.toLowerCase().includes(filter);
        })
      
      }
);