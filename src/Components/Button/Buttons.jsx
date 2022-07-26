import Container from "../Container/Container";
import Title from "../Title/Title";
import Button from "./Button";

const Buttons = () => {
  return (
    <section>
      <Title level={1} color="coral" marginBottom="1rem" align="center">
        Buttons
      </Title>
      <Container display="flex" styles="gap:1rem">
        <Button>Button</Button>
        <Button outlined borderRadius="0.5rem">
          Outlined Button
        </Button>
        <Button href="https://abhisawant.me">Link</Button>
        <Button outlined paddingInline="2rem" href="https://abhisawant.me">
          Outlined Link
        </Button>
      </Container>
    </section>
  );
};

export default Buttons;
