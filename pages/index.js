import { Button, Flex } from "@chakra-ui/react";
import { useAuth } from "lib/auth";

function HomePage() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <Button onClick={(e) => auth.signout()}>Sign Out</Button>
    </div>
  ) : (
    <Flex maxW={"360px"} gap={"1rem"}>
    <Button onClick={(e) => auth.signinWithGitHub()}>Sign In with Github</Button>
    <Button onClick={(e) => auth.signinWithGoogle()}>Sign In with Google</Button>

    </Flex>
  );
}

export default HomePage
