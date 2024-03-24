import { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Job Category List</h1>
        <p className="my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-around">
        {categories.map((category) => {
          return <Category key={category.id} category={category}></Category>;
        })}
      </div>
    </div>
  );
};

export default CategoryList;
