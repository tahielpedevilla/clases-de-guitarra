import {
	Collapse,
	Flex,
	Heading,
	Icon,
	IconButton,
	Link,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure()

	const router = useRouter()

	return (
		<Flex bg="transparent" w="full" direction="column" align="flex-end">
			<Stack
				maxW="container.lg"
				px="6"
				py={{ base: "4", md: "8" }}
				mx="auto"
				color="#FFFFFF"
				direction="row"
				w="full"
				justify="space-between"
				align="center"
			>
				<Heading fontSize="3xl">profejuli</Heading>
				<IconButton
					colorScheme="blackAlpha"
					display={{ base: "flex", md: "none" }}
					onClick={onToggle}
					icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
					variant="unstyled"
					aria-label={"Toggle Navigation"}
					size="sm"
					color="white"
				/>
				<Stack
					as="nav"
					direction="row"
					gap="8"
					fontWeight={700}
					display={{ base: "none", md: "flex" }}
					fontSize="lg"
				>
					<Link
						color="#FFFFFFdb"
						_hover={{ textDecoration: "none", color: "#FFFFFF" }}
						onClick={() => {
							router.push({
								pathname: "/",
								hash: "sobre-mi",
							})
						}}
					>
						Sobre mí
					</Link>
					<Link
						onClick={() => {
							router.push({
								pathname: "/",
								hash: "planes",
							})
						}}
						color="#FFFFFFdb"
						_hover={{ textDecoration: "none", color: "#FFFFFF" }}
					>
						Planes
					</Link>
					<Link
						onClick={() => {
							router.push({
								pathname: "/",
								hash: "estudiantes",
							})
						}}
						color="#FFFFFFdb"
						_hover={{ textDecoration: "none", color: "#FFFFFF" }}
					>
						Estudiantes
					</Link>
				</Stack>
			</Stack>
			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Flex>
	)
}

const MobileNav = () => {
	return (
		<Stack bg="#000000" p={2} display={{ md: "none" }} borderRadius="lg" mr="6">
			<MobileNavItem label="Sobre mí" href="sobre-mi" />
			<MobileNavItem label="Planes" href="planes" />
			<MobileNavItem label="Estudiantes" href="estudiantes" />
		</Stack>
	)
}

const MobileNavItem = ({ label, href }) => {
	return (
		<Stack spacing={4} minW="200px">
			<Flex
				py="2"
				px="4"
				as={Link}
				borderRadius="md"
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					bg: "#0C15FF",
					textDecoration: "none",
				}}
			>
				<Link
					href={href}
					fontWeight={700}
					color="gray.200"
					_hover={{
						textDecoration: "none",
					}}
				>
					{label}
				</Link>
			</Flex>
		</Stack>
	)
}

const HamburgerIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
	</svg>
)

const CloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>
)
