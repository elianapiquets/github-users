import { Container, Info, Image, Content } from "./styled";

export function User({ user }) {
  if (!user) return null;
  const image = user.avatar_url
    ? user.avatar_url
    : "https://placehold.co/600x600";
  return (
    <Container>
      <Info>
        <Image src={image} data-testid="image" />
        <Content>
          <h3 data-testid="name">{user.name || "name"}</h3>
          <p data-testid="location">{user.location || "location"}</p>
        </Content>
      </Info>
    </Container>
  );
}

export default User;
