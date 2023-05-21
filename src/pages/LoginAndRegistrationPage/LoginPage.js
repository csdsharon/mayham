import Button from "../../components/Button/Button";
const LoginPage = () => {
  const handleClick = () => {
    console.log("Login page button clicked");
  };

  return (
    <>
      <h1>LoginPage Page</h1>
      <Button label="explore" className="explore-btn" onclick={handleClick} />
    </>
  );
};

export default LoginPage;
