import Button from "../../components/Button/Button";
const HomePage = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <>
      <h1>Home Page</h1>
      <Button label="explore" className="explore-btn" onClick={handleClick} />
    </>
  );
};

export default HomePage;
