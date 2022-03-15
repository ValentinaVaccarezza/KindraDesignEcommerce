import React from "react";
import {Item} from './Item.jsx';

export const ItemList  = ({items}) => {
    return (
        <div className="item-list" id="cuadros">
            {
                items.map((item) => <Item {...item} key={item.id}/> )
            }
        </div>
    )
}