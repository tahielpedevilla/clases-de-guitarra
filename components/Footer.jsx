import { Link, Stack, Text } from "@chakra-ui/react"

export default function Footer() {
	const year = +new Date().getFullYear()

	return (
		<Stack bg="#000000">
			<Stack as="footer" maxW="container.lg" mx="auto" py="4" w="full" px="6">
				<Stack justify="space-between" w="full" direction={{ base: "column", md: "row" }}>
					<Text color="white">© Copyright {year} - Todos los derechos reservados</Text>
					<Stack direction="row">
						<Text color="white" display="inline-block">
							Hecho con ❤️ por
						</Text>
						<Link
							color="#FFFFFF"
							isExternal
							href="https://github.com/tahielpedevilla"
							target="_blank"
							rel="noopener noreferrer"
							_hover={{ textDecoration: "none" }}
						>
							Tahiel
						</Link>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
}
