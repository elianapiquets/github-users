import { Home as HomeContent } from "../components/Home";
import Nav from "../components/Nav";

const users = [
  "elianapiquets",
  "GrahamCampbell",
  "fabpot",
  "weierophinney",
  "rkh",
  "josh",
];

export default function Home() {
  return (
    <>
      <main>
        <Nav isHome={true} />
        <HomeContent users={users} />
      </main>
    </>
  );
}
