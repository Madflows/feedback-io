import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Stat } from "./Stat";
const stats = [
  {
    label: "Total Feedbacks",
    value: "71,887",
  },
  {
    label: "Response Rate",
    value: "91.32%",
  },
  {
    label: "Avg. Click Rate",
    value: "95.87%",
  },
];

export const StatGrid = () => (
  <Box
    as="section"
    py={{
      base: "4",
      md: "8",
    }}
  >
    <Container>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        gap={{
          base: "5",
          md: "6",
        }}
      >
        {stats.map(({ label, value }) => (
          <Stat key={label} label={label} value={value} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);
