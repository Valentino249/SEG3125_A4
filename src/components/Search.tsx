import { useState } from "react";
import CL1 from "../assets/baby.jpg"
import CL2 from "../assets/blue_button_shirt.jpg"
import CL3 from "../assets/blue_dress.jpg"
import CL4 from "../assets/camo_pants.jpg"
import CL5 from "../assets/dark_blue_button_shirt.jpg"
import CL6 from "../assets/denim_jacket.jpg"
import CL7 from "../assets/jeans_1.jpg"
import CL8 from "../assets/knitted_sweater.jpg"
import CL9 from "../assets/light_blue_b_s.jpg"
import CL10 from "../assets/pink_dress.jpg"
import CL11 from "../assets/pink_pants.jpg"
import CL12 from "../assets/purple_pants.jpg"
import CL13 from "../assets/red_sweater.jpg"
import CL14 from "../assets/trenchcoat.jpg"
import CL15 from "../assets/white_button_shirt.jpg"
import CL16 from "../assets/white_t.jpg"
import CL17 from "../assets/white_top.jpg"

interface Item {
  name: string;
  price: number;
  color: string;
  type: string;
  image: string;
}

interface SearchProps {
  onNavigate: (page: string) => void;
}

const Search = ({ onNavigate }: SearchProps) => {

  const items: Item[] = [
  {
    name: "Baby Overalls",
    price: 50,
    color: "Orange",
    type: "baby",
    image: CL1,
  },
  {
    name: "Gray Buttoned Shirt",
    price: 25,
    color: "Gray",
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
  {
    name: "Dark Blue Buttoned Shirt",
    price: 20,
    color: "Blue",
    type: "tops",
    image: CL5,
  },
  {
    name: "Blue Buttoned Shirt",
    price: 40,
    color: "Blue",
    type: "tops",
    image: CL6,
  },
  {
    name: "Jeans",
    price: 50,
    color: "Blue",
    type: "pants",
    image: CL7,
  },
  {
    name: "Knitted Sweater",
    price: 20,
    color: "Pink",
    type: "tops",
    image: CL8,
  },
  {
    name: "Light Blue Buttoned Shirt",
    price: 20,
    color: "Blue",
    type: "tops",
    image: CL9,
  },
  {
    name: "Pink Dress",
    price: 50,
    color: "Pink",
    type: "dresses",
    image: CL10,
  },
  {
    name: "Pink Pants",
    price: 40,
    color: "Pink",
    type: "pants",
    image: CL11,
  },
  {
    name: "Purple Pants",
    price: 50,
    color: "Purple",
    type: "pants",
    image: CL12,
  },
  {
    name: "Red Sweater",
    price: 50,
    color: "Red",
    type: "tops",
    image: CL13,
  },
  {
    name: "Trenchcoat",
    price: 100,
    color: "Beige",
    type: "tops",
    image: CL14,
  },
  {
    name: "White Buttoned Shirt",
    price: 20,
    color: "White",
    type: "tops",
    image: CL15,
  },
  {
    name: "White Tee",
    price: 10,
    color: "White",
    type: "tops",
    image: CL16,
  },
  {
    name: "White Top",
    price: 20,
    color: "White",
    type: "tops",
    image: CL17,
  },
];

  let [filteredItems, setFilteredItems] = useState(items)
  let [cartItems, setCartItems] = useState<Item[]>([])

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

  const handleClick = (item:any) => {
    console.log(item)
    setCartItems(cartItems => [...cartItems, item])
  }

  const handleRemove = (indexOfItem: number) => {
    setCartItems(cartItems => 
    cartItems.filter((_, index) => index !== indexOfItem)
  );
  }


  return (
    <div className="mb-3 mt-3 min-h-screen">
      <h1 className="mb-3 text-center text-5xl font-bold text-black">
        Search Products
      </h1>
      
      <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 mb-3 text-black">
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
  <div className="cart-items">
    {cartItems.map((item: any, index) => (
      <div className="flex gap-2 items-center justify-center mb-1">
        <p className="text-center mb-1">{item.name} ${item.price}</p><button className="btn" onClick={() => handleRemove(index)}>Remove</button>
      </div>
    ))}

    {filteredItems.length === 0 && 
    <div>
      <h3 className="mb-3 text-center text-3xl font-bold text-black">
        No results found. Try changing your search!
      </h3>
      </div>}

    {!(cartItems.length === 0) && 
    <div className="flex gap-2 items-center justify-center mb-3">
      <button className="btn" onClick={() => onNavigate("checkout")}>Checkout</button>
      </div>}
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <button className="btn mt-2" onClick={() => handleClick(item)}>Add Item to Cart +</button>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Search;