const Category = ({ category }) => {
  const { logo, availability, category_name } = category;
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="" className="mb-4" />
      <h1 className="font-bold">{category_name}</h1>
      <p>availability : {availability}</p>
    </div>
  );
};

export default Category;
