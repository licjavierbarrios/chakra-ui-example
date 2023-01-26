import './App.css';
import { Box, Button } from '@chakra-ui/react';

function App() {
	return (
		<div className="App">
			<Box bg="brand.primary">Hola Mundo</Box>
			<Button>Boton 1</Button>
			<Button m={2} colorScheme="teal" size="lg">
				Boton 2
			</Button>
			<Button variant="outline" m={2} colorScheme="teal" size="lg">
				Boton 3
			</Button>
			<Button variant="cta" m={2} colorScheme="teal" size="lg">
				Boton 4
			</Button>
		</div>
	);
}

export default App;
