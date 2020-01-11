import {createSelector} from 'reselect';

export const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser], function(user) {
    return user.currentUser;
}) 
