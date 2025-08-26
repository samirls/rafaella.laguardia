import "./App.css";
import { Box, Button, Image, Text, Link, Heading } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Carousel from "./components/Carousel";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Box display="flex" justifyContent="center" mt={-93}>
        <Box position="relative" maxW="500px" w="100%">
          <Image alt="logo" src="logo.png" w="100%" h="auto" />
          <Box
            position="absolute"
            top="90%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="120px"
            h="120px"
            borderRadius="full"
            overflow="hidden"
            outline="2px solid"
            outlineColor="pink.500"
            outlineOffset="2px"
          >
            <Image
              src="avatar.png"
              alt="avatar"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>
      <Box pt={10} px={10}>
        <Text
          textAlign="center"
          fontStyle="italic"
          fontFamily="'Playfair Display', serif"
          fontSize="1.2rem"
        >
          Médica, Mãe e Esposa. Minha missão é oferecer um atendimento único,
          acolhedor e humanizado, para que o maior orgulho do papai e da mamãe
          cresça feliz, saudável e sendo sempre o melhor que pode ser.
        </Text>
        <Text
          textAlign="center"
          fontStyle="italic"
          fontFamily="'Playfair Display', serif"
          fontSize="1.2rem"
        >
          Conte comigo!
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" paddingTop={5}>
        <Link
          href={"https://api.whatsapp.com/send?phone=5527996145531"}
          target="_blank"
          textDecoration="none"
        >
          <Button
            colorPalette="green"
            variant="surface"
            px={6}
            py={4}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <FaWhatsapp size={20} /> Agende Uma Consulta Agora Mesmo!
          </Button>
        </Link>
      </Box>
      <Box paddingTop={8}>
        <Heading
          as="h1"
          pb={6}
          px={6}
          display={{ base: "block", md: "flex" }}
          justifyContent={{ md: "center" }}
        >
          Serviços
        </Heading>
        <Carousel />
      </Box>
      <Box paddingTop={8} px={6}>
        <Heading
          as="h1"
          pb={6}
          display={{ base: "block", md: "flex" }}
          justifyContent={{ md: "center" }}
        >
          Me Acompanhe
        </Heading>
      </Box>
      <Box display="flex" justifyContent="center">
        <Link
          href={"https://www.instagram.com/dra.rafaellalaguardia/"}
          target="_blank"
          textDecoration="none"
        >
          <Button
            colorPalette="orange"
            variant="surface"
            px={6}
            py={4}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <FaInstagram size={20} /> Instagram
          </Button>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" paddingTop={5}>
        <Link
          href={"https://www.facebook.com/share/19JVXQ1uUr/?mibextid=wwXIfr"}
          target="_blank"
          textDecoration="none"
        >
          <Button
            colorPalette="orange"
            variant="surface"
            px={6}
            py={4}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <FaFacebook size={20} /> Facebook
          </Button>
        </Link>
      </Box>
      <Box paddingTop={10} px={6}>
        <Heading
          as="h1"
          pb={6}
          display={{ base: "block", md: "flex" }}
          justifyContent={{ md: "center" }}
        >
          Meu Consultório
        </Heading>
      </Box>
      <Box display="flex" justifyContent="center">
        <Link
          href={
            "https://www.google.com/maps/place/Unique+Mall/@-20.2526042,-40.2723591,17.29z/data=!3m1!5s0x9d94076e3355a7:0x627c634979d79d56!4m6!3m5!1s0xb81855c44fd1c5:0xb13e19437c27dd74!8m2!3d-20.2518882!4d-40.2721748!16s%2Fg%2F11g4dw78r_?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
          }
          target="_blank"
          textDecoration="none"
        >
          <Button
            colorPalette="orange"
            variant="surface"
            px={6}
            py={4}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <SiGooglemaps size={20} /> Localização
          </Button>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" paddingTop={5}>
        <Link
          href={"https://api.whatsapp.com/send?phone=5527996145531"}
          target="_blank"
          textDecoration="none"
        >
          <Button
            colorPalette="green"
            variant="surface"
            px={6}
            py={4}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <FaWhatsapp size={20} /> Agendar Consulta
          </Button>
        </Link>
      </Box>

      <Box
        paddingTop={3}
        marginTop={10}
        backgroundColor="#f2e7db"
        textAlign="center"
        height={{ base: "100px", md: "13vh" }}
      >
        <Box fontSize="0.9rem" fontWeight="semibold">
          Unique Mall
        </Box>
        <Box fontSize="0.8rem" px={10}>
          Av. Armando Duarte Rabello, 126 - Jardim Camburi, Vitória - ES,
          29092-280
        </Box>
      </Box>
    </>
  );
}

export default App;
