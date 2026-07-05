import { useState } from "react";
import CL1 from "../assets/baby.jpg"
import CL2 from "../assets/blue_button_shirt.jpg"
import CL3 from "../assets/blue_dress.jpg"
import CL4 from "../assets/camo_pants.jpg"

interface Item {
  name: string;
  price: number;
  color: string;
  type: string;
  image: string;
}

const Search = () => {

  const items: Item[] = [
  {
    name: "Baby Overalls",
    price: 50,
    color: "Orange",
    type: "baby",
    image: CL1,
  },
  {
    name: "Blue Buttoned Shirt",
    price: 25,
    color: "Blue",
    type: "tops",
    image: CL2,
  },
  {
    name: "Blue Dress",
    price: 70,
    color: "Blue",
    type: "dresses",
    image: CL3,
  },
  {
    name: "Camo-Pants",
    price: 50,
    color: "Brown",
    type: "pants",
    image: CL4,
  },
];

  const clothes = [
    { name: "T-Shirt", price: 20, color: "Black", type: "tops" },
    { name: "Jeans", price: 50, color: "Blue", type: "pants" },
    { name: "Dress", price: 70, color: "Red", type: "dresses" },
    { name: "Pants", price: 40, color: "Red", type: "pants" },
  ];
  
  let [filteredClothes, setFilteredClothes] = useState(clothes)

  let [filteredItems, setFilteredItems] = useState(items)

  const handleSubmit = (e:any) => {
      e.preventDefault()
      //modify filteredclothes
      const form = e.target
      const formData = new FormData(form)
      const query = formData.get("query")
      const selection = formData.get("options")
      console.log(formData.get("options"))
      console.log(String(query))

      if (selection === "none"){
        setFilteredItems(items.filter(cloth => cloth.name.toLowerCase().includes(String(query).toLowerCase())))
      }else {
        setFilteredItems(items.filter(cloth => cloth.type === selection && cloth.name.toLowerCase().includes(String(query).toLowerCase())))
      }
  }


  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl font-bold text-black">
        Search Products
      </h1>
      
      <form onSubmit={handleSubmit} className="text-center  text-black">
        <select name="options" id="options">
          <option value="none">None</option>
          <option value="tops">Tops</option>
          <option value="pants">Pants</option>
          <option value="dresses">Dresses</option>
          <option value="baby">Baby</option>
        </select>
        <input name="query" className=" border-2"></input>
        <button type="submit" className="btn">Search</button>
      </form>


      {/* <div style={{display: 'flex', gap: '1rem'}}>
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
      </div> */}

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredItems.map((item, index) => (
    <div
      key={index}
      className="rounded-lg border shadow bg-white overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p>CA ${item.price}</p>
        <p>{item.color}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Search;