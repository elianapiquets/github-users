import { Container, Back, PageName } from "./styled";
import { useRouter } from "next/router";

export function Nav() {
  const router = useRouter();
  return (
    <Container>
      <Back onClick={() => router.back()}>← Back</Back>

      <PageName>Home</PageName>
    </Container>
  );
}

export default Nav;
