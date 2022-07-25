import {
	Box,
	Stack,
	HStack,
	Heading,
	Text,
	VStack,
	List,
	ListItem,
	ListIcon,
	Button,
} from "@chakra-ui/react"

function PriceWrapper({ children }) {
	return (
		<Box
			mb={4}
			shadow="base"
			borderWidth="1px"
			alignSelf={{ base: "center", lg: "flex-start" }}
			borderColor="gray.200"
			borderRadius={"xl"}
		>
			{children}
		</Box>
	)
}

export default function Pricing() {
	return (
		<Box>
			<VStack spacing={2} textAlign="center">
				<Heading color="#FFFFFF" as="h1" fontSize="4xl">
					Planes mensuales
				</Heading>
				<Text fontSize="lg" color="gray.300">
					Elegí el plan que más te guste y toma la primera clase 100% GRATIS.
				</Text>
			</VStack>
			<Stack
				direction={{ base: "column", lg: "row" }}
				textAlign="center"
				justify="center"
				spacing={{ base: 4, lg: 10 }}
				pt={10}
			>
				<PriceWrapper>
					<Box position="relative">
						<Box py={4} px={12}>
							<Text color="#FFFFFF" fontWeight="500" fontSize="2xl">
								Básico
							</Text>
							<HStack justifyContent="center">
								<Text color="#FFFFFF" fontSize="3xl" fontWeight="700">
									$
								</Text>
								<Text color="#FFFFFF" fontSize="5xl" fontWeight="700">
									4.999
								</Text>
								<Text fontSize="3xl" color="gray.200">
									/mes
								</Text>
							</HStack>
						</Box>
						<VStack py={4} borderBottomRadius={"xl"}>
							<List
								spacing={3}
								textAlign="start"
								px={12}
								display="flex"
								flexDirection="column"
								color="white"
							>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />1 clase semanal.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Material de estudio impreso.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Lorem ipsum dolor sit.
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Button
									w="full"
									variant="outline"
									as="a"
									href="https://api.whatsapp.com/send?phone=+5491161350049&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Curso%20B%C3%A1sico%20de%20INICIACI%C3%93N%20EN%20LA%20M%C3%9ASICA"
									color="#FFFFFF"
									_hover={{ bg: "transparent" }}
									_active={{ bg: "transparent" }}
									borderRadius="full"
									colorScheme="blue"
								>
									Inscribirme
								</Button>
							</Box>
						</VStack>
					</Box>
				</PriceWrapper>
				<PriceWrapper>
					<Box position="relative">
						<Box
							position="absolute"
							top="-16px"
							left="50%"
							style={{ transform: "translate(-50%)" }}
						>
							<Text
								textTransform="uppercase"
								bg="blue.500"
								px={3}
								py={1}
								color="white"
								fontSize="sm"
								fontWeight="600"
								rounded="full"
							>
								Más Popular
							</Text>
						</Box>
						<Box py={4} px={12}>
							<Text color="#FFFFFF" fontWeight="500" fontSize="2xl">
								Intermedio
							</Text>
							<HStack justifyContent="center">
								<Text color="#FFFFFF" fontSize="3xl" fontWeight="700">
									$
								</Text>
								<Text color="#FFFFFF" fontSize="5xl" fontWeight="700">
									7.999
								</Text>
								<Text fontSize="3xl" color="gray.200">
									/mes
								</Text>
							</HStack>
						</Box>
						<VStack py={4} borderBottomRadius={"xl"}>
							<List
								spacing={3}
								textAlign="start"
								px={12}
								display="flex"
								flexDirection="column"
								color="white"
							>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />1 clase semanal.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Material de estudio impreso.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Lorem ipsum dolor sit.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Lorem ipsum dolor sit.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Lorem ipsum dolor sit.
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Button
									w="full"
									as="a"
									href="https://api.whatsapp.com/send?phone=+5491161350049&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Curso%20B%C3%A1sico%20de%20INICIACI%C3%93N%20EN%20LA%20M%C3%9ASICA"
									bg="#0C15FF"
									_hover={{ bg: "#0C15FF" }}
									_active={{ bg: "#0C15FF" }}
									borderRadius="full"
									colorScheme="blue"
								>
									Inscribirme
								</Button>
							</Box>
						</VStack>
					</Box>
				</PriceWrapper>
				<PriceWrapper>
					<Box position="relative">
						<Box py={4} px={12}>
							<Text color="#FFFFFF" fontWeight="500" fontSize="2xl">
								Intensivo
							</Text>
							<HStack justifyContent="center">
								<Text color="#FFFFFF" fontSize="3xl" fontWeight="700">
									$
								</Text>
								<Text color="#FFFFFF" fontSize="5xl" fontWeight="700">
									9.999
								</Text>
								<Text fontSize="3xl" color="gray.200">
									/mes
								</Text>
							</HStack>
						</Box>
						<VStack py={4} borderBottomRadius={"xl"}>
							<List
								spacing={3}
								textAlign="start"
								px={12}
								display="flex"
								flexDirection="column"
								color="white"
							>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />1 clase semanal.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Material de estudio impreso.
								</ListItem>
								<ListItem display="inline-flex" gap="1">
									<ListIcon as={CheckCircle} />
									Online o precencial
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Button
									w="full"
									variant="outline"
									as="a"
									href="https://api.whatsapp.com/send?phone=+5491161350049&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Curso%20B%C3%A1sico%20de%20INICIACI%C3%93N%20EN%20LA%20M%C3%9ASICA"
									color="#FFFFFF"
									_hover={{ bg: "transparent" }}
									_active={{ bg: "transparent" }}
									borderRadius="full"
									colorScheme="blue"
								>
									Inscribirme
								</Button>
							</Box>
						</VStack>
					</Box>
				</PriceWrapper>
			</Stack>
		</Box>
	)
}

const CheckCircle = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5"
		viewBox="0 0 20 20"
		fill="#248824"
		height="24"
		w="24"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
			clipRule="evenodd"
		/>
	</svg>
)
