//make label array
export function labelArray(userItem) {
    // these days, you could replace this with a map and Object.keys, assuming i'm reading this right!
    
    return Object.keys(userItem).map(property => property.charAt(0).toUpperCase() + property.slice(1));
}

//generates data for p3 chart
export function dataArray(userItem) {
    // same here--good place for just Object.values, assuming i',m reading this right!
    return Object.values(userItem);
}
