import { Container, Info, Image, Content } from "./styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function User({ user = "elianapiquets" }) {
  const [githubData, setGithubData] = useState([]);
  const router = useRouter();

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${router.query.name}`, {
      headers: {
        Authorization: "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",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const image =
    githubData && githubData.id
      ? `https://avatars.githubusercontent.com/u/${githubData.id}?s=400&u=e918ea709e846e2b53b390694a93e7e5d70e9098&v=4`
      : "https://placehold.co/600x600";
  return (
    <Container>
      <Info>
        <Image src={image} />
        <Content>
          <h3>{githubData.name || "name"}</h3>
          <p>{githubData.location || "location"}</p>
        </Content>
      </Info>
    </Container>
  );
}

export default User;
