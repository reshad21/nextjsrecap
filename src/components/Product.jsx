
const Product = ({ product }) => {
    const { title, price, features } = product;
    return (
        <div className="border border-green-500 rounded-md p-4 block">
            <h1>{title}</h1>
            <p>Price: {price}$</p>
            Features:<ul>
                {
                    features.map((feature) => <li key={feature}>{feature}</li>)
                }
            </ul>
        </div>
    );
};

export default Product;