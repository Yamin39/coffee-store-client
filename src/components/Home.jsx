import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const [coffees, setCoffee] = useState([]);

  const getCoffees = () => {
    fetch("https://coffee-store-server-beta-khaki.vercel.app/coffee")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffee(data);
      });
  };

  useEffect(() => {
    getCoffees();
  }, []);

  console.log(coffees);
  return (
    <div>
      <h1 className="text-center mb-10 text-6xl font-bold">Coffee Store Espresso Emporium</h1>
      <h2 className="text-2xl font-semibold text-center">Coffees: {coffees.length}</h2>
      <div className="flex gap-6 flex-wrap justify-center items-center">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} getCoffees={getCoffees} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
