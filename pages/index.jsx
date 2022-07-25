import Head from "next/head"

import { Box, Button, Heading, Stack, Text, Image } from "@chakra-ui/react"

import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer"
import { Image as NextImage } from "next/image.js"
import Pricing from "../components/Pricing.jsx"
import Testimonial from "../components/Testimonial.jsx"

export default function Home() {
	return (
		<Box
			as="div"
			backgroundImage="url('/hero.webp')"
			backgroundAttachment="fixed"
			h="full"
			w="full"
			bgSize="cover"
			bgRepeat="no-repeat"
			bgPosition={{ base: "right", md: "center" }}
		>
			<Head>
				<title>Iniciación a la Música con profejuli</title>
				<meta name="description" content="Aquí el título" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Box as="main">
				<Stack mx="auto" maxW="container.lg" px="6">
					<Stack as="section" justify="center" h="full" py="56" id="inicio" mt="-100px">
						<Text color="#FFFFFF" fontSize="2xl">
							Clases personalizadas de
						</Text>
						<Heading color="#FFFFFF" fontWeight={700} fontSize="5xl" lineHeight={1} as="h1">
							Iniciación musical
						</Heading>
						<Text pb="4" fontSize="2xl" color="#FFFFFF">
							para todas las edades
						</Text>
						<Button
							bg="#0C15FF"
							w="fit-content"
							_hover={{ bg: "#0C15FF" }}
							_active={{ bg: "#0C15FF" }}
							borderRadius="full"
							colorScheme="blue"
							px="8"
							py="4"
							fontSize={18}
							as="a"
							href="#planes"
						>
							Quiero una clase de prueba
						</Button>
					</Stack>
				</Stack>
				<Stack
					bg="#FFFFFF"
					as="section"
					justify="center"
					h="full"
					align="center"
					py="24"
					id="sobre-mi"
				>
					<Stack
						mx="auto"
						maxW="container.lg"
						px="6"
						align="center"
						justify="center"
						direction={{ base: "column", md: "row" }}
					>
						<Image
							as={NextImage}
							src="/profesor.jpeg"
							alt="Profesor Julian Pedevilla"
							height="300"
							width="300"
							mr={{ md: "24" }}
							objectFit="contain"
							borderRadius="full"
						/>
						<Stack color="#000000" justify="center">
							<Heading
								mt={{ base: "12", md: "0" }}
								fontWeight={700}
								fontSize="5xl"
								lineHeight={1}
								textAlign={{ base: "center", md: "left" }}
							>
								Sobre mí
							</Heading>
							<Text fontSize="lg" textAlign={{ base: "center", md: "left" }} color="#000000">
								Soy Julián, músico y profesor sit amet consectetur adipisicing elit. Excepturi modi
								obcaecati itaque unde quisquam omnis culpa optio nesciunt, magni minima numquam
								voluptate eveniet nulla impedit,{" "}
								<strong>iste natus tempore distinctio reprehenderit</strong>, asperiores quam. Illo
								corporis adipisci, fugit consequuntur quidem cum accusantium.
								<br /> <br />
								Vení a estudiar dolor sit amet, consectetur adipisicing elit. Sequi quidem id
								asperiores. Lorem ipsum dolor sit amet!
							</Text>
						</Stack>
					</Stack>
				</Stack>
				<Stack
					backgroundImage="url('/pricing.webp')"
					backgroundAttachment="fixed"
					h="full"
					w="full"
					bgSize="cover"
					bgRepeat="no-repeat"
					bgPosition={{ base: "right", md: "center" }}
					as="section"
					id="planes"
				>
					<Stack bg="#000000dd" py="24" justify="center">
						<Stack mx="auto" maxW="container.lg" px="6" align="center" justify="center" w="full">
							<Pricing />
						</Stack>
					</Stack>
				</Stack>
				<Stack bg="#FFFFFF" as="section" justify="center" h="full" py="24" id="estudiantes">
					<Stack mx="auto" maxW="container.lg" px="6" align="center" justify="center">
						<Testimonial />
					</Stack>
				</Stack>
			</Box>
			<Footer />
		</Box>
	)
}
