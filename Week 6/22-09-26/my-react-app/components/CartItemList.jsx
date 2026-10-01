export function CartItemList() {
    const cartitems = [
        { id: 1, name: "Abbey Road - The Beatles", price: 22.98 },
        { id: 2, name: "Voodoo - D'Angelo", price: 39.99 },
        { id: 3, name: "Channel Orange - Frank Ocean", price: 69.00 }
    ];

    return (
        <ul>
            {cartitems.map(item => 
                <li key={item.id}>
                    {item.name} - ${item.price.toFixed(2)}
                </li>
            )}
        </ul>
    );
}