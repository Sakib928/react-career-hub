const Category = ({ category }) => {
  const { logo, availability } = category;
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="" className="mb-4" />
      <p>availability : {availability}</p>
    </div>
  );
};

export default Category;
