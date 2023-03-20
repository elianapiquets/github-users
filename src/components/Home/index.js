import { Container, Button, List } from "./styled";
import { useEffect, useState } from "react";

const users = [
  "elianapiquets",
  "GrahamCampbell",
  "fabpot",
  "weierophinney",
  "rkh",
  "josh",
];
export function Home() {
  const githubData = [];
  const githubDataFake = [
    {
      name: "GrahamCampbell",
    },
    {
      name: "fabpot",
    },
    {
      name: "weierophinney",
    },
    {
      name: "rkh",
    },
    {
      name: "josh",
    },
  ];

  // Rate LIMIt issue, wrong token??
  const fetchData = async () => {
    for (let i = 0; i < users.length; i++) {
      fetch(`https://api.github.com/users/${users[i]}`, {
        headers: {
          Authorization: "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",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h2>Top 5 GitHub Users</h2>
      <p>Tap the username to see more information</p>

      <List>
        {githubDataFake.map((user) => {
          return (
            <Button href={`/user/${user.name}`} key={user.name}>
              {user.name}
            </Button>
          );
        })}
      </List>
    </Container>
  );
}

export default Home;
