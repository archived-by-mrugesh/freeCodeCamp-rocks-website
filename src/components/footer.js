import React from "react";

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr />
        <Flex>
          <Box m={0} is="p" ml="auto">
            Powered by <a href="https://rdhub.in/">&lt; rdhub /&gt;</a>
          </Box>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
