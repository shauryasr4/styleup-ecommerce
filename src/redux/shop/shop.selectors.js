import { createSelector } from "reselect";

const selectShop = state => state.shop;

const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);

const selectCollectionForPreview = createSelector (
    [selectCollections], 
    collectionsObject => Object.keys(collectionsObject).map(function(collection) {
        return collectionsObject[collection];
    })
)

const selectCollection = collectionURLparam => createSelector(
    [selectCollections],
    collections =>  collections[collectionURLparam]
)

export {selectCollections, selectCollection, selectCollectionForPreview};
