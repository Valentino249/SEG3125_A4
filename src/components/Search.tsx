const clothes = [
    { name: "T-Shirt", price: 20, color: "Black" },
    { name: "Jeans", price: 50, color: "Blue" },
    { name: "Dress", price: 70, color: "Red"},
    { name: "Pants", price: 40, color: "Red"},
];

const handleSubmit = (e:any) => {
    e.preventDefault()

}


const Search = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl font-bold text-black">
        Search Products
      </h1>
      
      <form onSubmit={handleSubmit} className="text-center  text-black">
        <input name="query"></input>
        <button type="submit" className="btn">Search</button>
      </form>


      <div style={{display: 'flex', gap: '1rem'}}>
        {clothes.map((item: any, index: any) => (
            <div
                key={index}
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '1rem',
                    width: '150px',
                    boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
                }}
            >
                <h3>{item.name}</h3>
                <p>Color: {item.color}</p>
                <p>Price: ${item.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Search;