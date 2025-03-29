import Button from "root/components/ui/Button";

const HomePage = () => {
  return (
    <>
      <h1 className="vazir-black text-5xl">Farzad vav</h1>
      <h2 className="vazir-bold text-2xl">Farzad vav</h2>
      <h3>Farzad vav</h3>

      <div className="flex gap-3">
        <Button className="mt-12">Sign up</Button>
        <Button variant="ghost" color="danger" size="sm" rounded="full">
          Login
        </Button>
        <Button variant="soft" color="success" size="lg">
          Logout
        </Button>
      </div>
    </>
  );
};

export default HomePage;
