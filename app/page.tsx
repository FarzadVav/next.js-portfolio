import Button from "root/components/ui/Button";

const HomePage = () => {
  return (
    <>
      <h1 className="vazir-black text-5xl mt-6">Farzad vav</h1>
      <h2 className="vazir-bold text-2xl">Farzad vav</h2>
      <h3>Farzad vav</h3>

      <div className="flex items-center justify-between gap-3 mt-6">
        <Button>Fill</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="background">Background</Button>
        <Button color="foreground">Foreground</Button>
      </div>

      <div className="flex items-center justify-between gap-3 mt-6">
        <Button shape="ghost">Ghost</Button>
        <Button shape="ghost" color="secondary">
          Secondary
        </Button>
        <Button shape="ghost" color="danger">
          Danger
        </Button>
        <Button shape="ghost" color="success">
          Success
        </Button>
        <Button shape="ghost" color="warning">
          Warning
        </Button>
        <Button shape="ghost" color="background">
          Background
        </Button>
        <Button shape="ghost" color="foreground">
          Foreground
        </Button>
      </div>

      <div className="flex items-center justify-between gap-3 mt-6">
        <Button shape="outline">Outline</Button>
        <Button shape="outline" color="secondary">
          Secondary
        </Button>
        <Button shape="outline" color="danger">
          Danger
        </Button>
        <Button shape="outline" color="success">
          Success
        </Button>
        <Button shape="outline" color="warning">
          Warning
        </Button>
        <Button shape="outline" color="background">
          Background
        </Button>
        <Button shape="outline" color="foreground">
          Foreground
        </Button>
      </div>

      <div className="flex items-center justify-between gap-3 mt-6">
        <Button shape="soft">Soft</Button>
        <Button shape="ghost" color="secondary">
          Secondary
        </Button>
        <Button shape="ghost" color="danger">
          Danger
        </Button>
        <Button shape="ghost" color="success">
          Success
        </Button>
        <Button shape="ghost" color="warning">
          Warning
        </Button>
        <Button shape="ghost" color="background">
          Background
        </Button>
        <Button shape="ghost" color="foreground">
          Foreground
        </Button>
      </div>
    </>
  );
};

export default HomePage;
