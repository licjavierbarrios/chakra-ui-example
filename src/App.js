import "./App.css";
import { Box, Divider, Heading, HStack, Image, Link, Tag, Text, VStack } from "@chakra-ui/react";
import HeroImage from "./resources/images/heroImage.jpg";

const App = () => {
	return (
		<>
			<Box as="header" textAlign="center" py="10px">
				<strong>Logo</strong>
			</Box>
			<Box as="main">
				<Image src={HeroImage} alt="Hero Image" objectFit="cover" boxSize="100vw" />
				<Box px="40px">
					<Heading as="h1" size="lg" my="20px">
						Avengers: Endgame
					</Heading>
					<Text fontSize="sm">
						En el final épico de la Saga del Infinito, los Avengers se enfrentan a Thanos. Cuando eventos devastadores arrasan con la mitad
						de la población mundial y fracturan sus filas, los héroes restantes luchan por avanzar. Pero deben unirse para restaurar el
						orden y la armonía en el universo y traer de vuelta a sus seres queridos.
					</Text>
					<HStack my="25px">
						<Tag variant="solid" colorScheme="purple">
							Ciencia Ficción
						</Tag>
						<Tag variant="solid" colorScheme="purple">
							Fantasía
						</Tag>
						<Tag variant="solid" colorScheme="purple">
							Super Héroes
						</Tag>
					</HStack>
					<Heading variant="primary" py="10px">
						Dónde Encontrarla
					</Heading>
					<HStack mt="20px" mb="40px" spacing="20px">
						<Link href="https://amazon.com" isExternal>
							<Image
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfBaSrn3JZlFslyUvmvYfvozefrIUSWQRU70c6PoNi8CQDDRCpaorcEZyJpx2Ov86l4I&usqp=CAU"
								alt="amazon"
								boxSize="90px"
								objectFit="cover"
								h="50px"
								borderRadius="5px"
							/>
						</Link>
						<Link href="https://disney.com" isExternal>
							<Image
								src="https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=s128-h480"
								alt="disney"
								boxSize="90px"
								objectFit="cover"
								h="50px"
								borderRadius="5px"
							/>
						</Link>
					</HStack>
					<Heading variant="primary" py="10px">
						Información
					</Heading>
					<VStack align="flex-start" mt="20px" mb="40px">
						<Text>
							<strong>Directores</strong>
							<Box as="span" m="10px">
								Joe Russo, Anthony Russo
							</Box>
						</Text>
						<Divider />
						<Text>
							<strong>Año</strong>
							<Box as="span" m="10px">
								2019
							</Box>
						</Text>
						<Divider />
					</VStack>
				</Box>
			</Box>
		</>
	);
};
export default App;
