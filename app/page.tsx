import { CaretRightIcon } from "@radix-ui/react-icons"
import { Button, Container } from "@radix-ui/themes"

const HomePage = () => {
  return (
    <Container className="p-6">
      <Button>
        <CaretRightIcon />
        <span>Just do it</span>
      </Button>
    </Container>
  )
}

export default HomePage
