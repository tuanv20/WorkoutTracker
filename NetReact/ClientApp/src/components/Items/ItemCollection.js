import { useEffect, useState} from 'react';
import Item from './Item';
export default function ItemCollection() {

    let [itemList, setItems] = useState([]);
    useEffect(() => {
        fetch('item/GetByID/7').then((response) => {
            return response.json();
        }).then((results) => {
            setItems(results);
        })
    }, [])

    return (
        <div>
            {
                itemList.map((item) =>
                    <Item item={item} />
                )}
        </div>
    )
}