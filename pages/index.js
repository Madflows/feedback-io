import { Button, Flex, Box, Image } from "@chakra-ui/react";
import DashboardShell from "components/DashboardShell";
import HeroSection from "components/Hero";
import { StatGrid } from "components/StatGrid";
import { useAuth } from "lib/auth";

function HomePage() {
  const auth = useAuth();

  return (
    <Box>
      <HeroSection />
      <StatGrid />
    </Box>
  );
}

export default HomePage;
