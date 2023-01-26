import "./App.css";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import bgImage from "./resources/images/bici-bg.jpg";
import bgImageMobile from "./resources/images/bici-movile.jpg";

function AppBackup() {
	return (
		<Box h="40vh" bg="gray" bgRepeat="no-repeat" bgSize="cover" bgImage={[`url(${bgImageMobile})`, null, `url(${bgImage})`]}>
			<Flex p={["0 10%", null, "0 20%"]} bg="rgb(0 0 0 / 50%)" direction="column" alignItems="center" jutify="center" h="100%">
				<Heading variant="banner">Domina el terrero</Heading>
				<Stack w={["100%", null, "auto"]} direction={{ base: "column", md: "row" }} spacing="40px" mt="30px">
					<Button variant="outline" size="lg">
						Ver detalles
					</Button>
					<Button variant="outline" size="lg">
						Ver video
					</Button>
				</Stack>
			</Flex>
		</Box>
	);
}

export default AppBackup;
