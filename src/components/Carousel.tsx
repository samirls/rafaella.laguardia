import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Image, Text } from "@chakra-ui/react";

register();

export default function Carousel() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <Box position="relative">
            <Image
              src="babysize2.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Acompanhamento do Crescimento e Desenvolvimento
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Consultas regulares para garantir que seu filho cresça saudável em cada fase da vida.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="vacinnation.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Vacinação em Dia
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Orientação e aplicação de vacinas com carinho e segurança.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="babylunch.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Nutrição Infantil
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Dicas práticas para uma alimentação equilibrada desde os primeiros anos.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="babysize3.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Orientação Para Pais de Primeira Viagem
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Apoio nos primeiros cuidados com o bebê, sono, amamentação e rotina.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="child.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Saúde Escolar
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Avaliação da saúde física e emocional para melhor rendimento nos estudos.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="morebaby.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Prevenção de Doenças
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Acompanhamento para evitar problemas respiratórios, alergias, infecções...
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="babyhug.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Atendimento Humanizado
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Cada consulta é feita com paciência, escuta ativa e acolhimento da criança e da família.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="babymilk.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Suporte em Amamentação
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Auxílio para superar dificuldades no aleitamento materno.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="teens.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Atenção Especial ao Adolescente
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Consultas que cuidam da saúde física e emocional nessa fase de tantas mudanças.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box position="relative">
            <Image
              src="kidsmile.png"
              alt="Sorriso saudável"
              borderRadius="lg"
              w="100%"
            />
            <Text
              as="h2"
              position="absolute"
              top={2}
              left={2}
              bg="whiteAlpha.500"
              color="gray.900"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
            >
              Pronto Atendimento Para o Dia a Dia
            </Text>
            <Text
              position="absolute"
              bottom={0}
              left={0}
              w="100%"
              bg="blackAlpha.300"
              color="white"
              textAlign="center"
              fontSize="sm"
              p={2}
            >
              Quando surgem febres, tosse ou dúvidas inesperadas, você pode contar com apoio rápido.
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
