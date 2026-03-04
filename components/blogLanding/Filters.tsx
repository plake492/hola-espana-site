import Container from '../Container';
import Button from '../Button';

export default function Filters() {
  return (
    <Container className="px-4 py-24 md:px-8">
      <Button variant="sand" className="text-sm">
        All Posts
      </Button>
    </Container>
  );
}
