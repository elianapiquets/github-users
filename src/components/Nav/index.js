import { Container, Back, PageName } from "./styled";
import { useRouter } from "next/router";

export function Nav({ isHome, ...props }) {
  const router = useRouter();
  return (
    <Container>
      {!isHome && <Back onClick={() => router.back()}>← Back</Back>}

      <PageName>Home</PageName>
    </Container>
  );
}

export default Nav;
