import { Box, Image, Link, Button, Drawer } from "@chakra-ui/react";
import { FaWhatsapp, FaHeart, FaHome } from "react-icons/fa";
import DrawerLinks from "./DrawerLinks";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EndingTextComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={{ base: -93, md: -190 }}
        >
          <Box position="relative" maxW="500px" w="100%">
            <Image alt="logo" src="logo.png" w="100%" h="auto" />
            <Box
              position="absolute"
              top="85%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="140px"
              h="140px"
              borderRadius="full"
              overflow="hidden"
              outline="2px solid"
              outlineColor="pink.500"
              outlineOffset="2px"
            >
              <Image
                src="rafa-capa.jpg"
                alt="avatar"
                objectFit="cover"
                transform="scale(1.2)"
              />
            </Box>
          </Box>
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
              size="sm"
            >
              <FaWhatsapp size={20} /> Agendar Consulta
            </Button>
          </Link>
        </Box>

        <Box display="flex" justifyContent="center" pt={2}>
          <Drawer.Root key={"start"} placement={"start"}>
            <Drawer.Trigger asChild>
              <Button
                colorPalette="orange"
                variant="surface"
                px={6}
                py={4}
                borderRadius="xl"
                display="flex"
                alignItems="center"
                gap={2}
                size="sm"
              >
                <FaHeart size={20} /> Mais Dicas para Mamães
              </Button>
            </Drawer.Trigger>
            <DrawerLinks />
          </Drawer.Root>
        </Box>

        <Box display="flex" justifyContent="center" pt={2} pb={3}>
          <Button
            colorPalette="orange"
            variant="surface"
            px={6}
            py={4}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            gap={2}
            as={RouterLink}
            to="/"
            size="sm"
          >
            <FaHome size={20} /> Voltar para Home
          </Button>
        </Box>
      </Box>

      {isVisible && (
        <Button
          onClick={scrollToTop}
          position="fixed"
          bottom="10px"
          right="10px"
          zIndex="1000"
          backgroundColor="blue.500"
          color="white"
          boxShadow="0 4px 12px rgba(0,0,0,0.15)"
          _hover={{
            backgroundColor: "blue.600",
            transform: "scale(1.05)",
          }}
          aria-label="Voltar ao topo"
          size="sm"
        >
          Voltar ao Topo
        </Button>
      )}
    </>
  );
}
