import Button from "root/components/ui/Button";

const HomePage = () => {
  return (
    <>
      <p>خانه</p>
      <Button>Sign up</Button>
      <Button variant="ghost" color="danger" size="sm" rounded="full">
        Login
      </Button>
      <Button variant="soft" color="success" size="lg">
        Logout
      </Button>
    </>
  );
};

export default HomePage;
