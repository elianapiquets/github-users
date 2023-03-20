import { Container, Button, List } from "./styled";

export function Home({ users }) {
  if (!users) return null;
  return (
    <Container>
      <h2>Top 5 GitHub Users</h2>
      <p>Tap the username to see more information</p>

      <List>
        {users.map((user) => {
          return (
            <Button
              href={`/user/${user}`}
              key={user}
              data-testid={`user-${user}`}
            >
              {user}
            </Button>
          );
        })}
      </List>
    </Container>
  );
}

export default Home;
