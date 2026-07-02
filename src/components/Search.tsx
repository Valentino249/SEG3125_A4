import { useState } from "react";

const Search = () => {

  const clothes = [
    { name: "T-Shirt", price: 20, color: "Black", type: "tops" },
    { name: "Jeans", price: 50, color: "Blue", type: "pants" },
    { name: "Dress", price: 70, color: "Red", type: "dresses" },
    { name: "Pants", price: 40, color: "Red", type: "pants" },
  ];
  
  let [filteredClothes, setFilteredClothes] = useState(clothes)

  const handleSubmit = (e:any) => {
      e.preventDefault()
      //modify filteredclothes
      const form = e.target
      const formData = new FormData(form)
      const query = formData.get("query")
      const selection = formData.get("options")
      console.log(formData.get("options"))
      alert(`you searched for '${query}' with category '${selection}'`)

      switch (selection) {
        case 'tops':
          setFilteredClothes(clothes.filter(cloth => cloth.type === 'tops'))
          console.log(filteredClothes)
        case 'pants':
          setFilteredClothes(clothes.filter(cloth => cloth.type === 'pants'))
          console.log(filteredClothes)
        case 'dresses':
          setFilteredClothes(clothes.filter(cloth => cloth.type === 'dresses'))
          console.log(filteredClothes)
        case 'baby':
          setFilteredClothes(clothes.filter(cloth => cloth.type === 'baby'))
          console.log(filteredClothes)
      }

  }


  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl font-bold text-black">
        Search Products
      </h1>
      
      <form onSubmit={handleSubmit} className="text-center  text-black">
        <select name="options" id="options">
          <option value="tops">Tops</option>
          <option value="pants">Pants</option>
          <option value="dresses">Dresses</option>
          <option value="baby">Baby</option>
        </select>
        <input name="query" className=" border-2"></input>
        <button type="submit" className="btn">Search</button>
      </form>


      <div style={{display: 'flex', gap: '1rem'}}>
        {filteredClothes.map((item: any, index: any) => (
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