
export const addQuantityToProd = (items, id) => {
    return items.map(itm => {
        if(itm.prodId === id) itm.prodQuan = itm.prodQuan + 1;
        return itm;
    });
}

export const removeQuantityToProd = (items, id) => {
    return items.map(itm => {
        if(itm.prodId === id) itm.prodQuan = itm.prodQuan - 1;
        return itm;
    }).filter(itm => itm.prodQuan !== 0);
}

