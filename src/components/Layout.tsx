import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav" "main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
