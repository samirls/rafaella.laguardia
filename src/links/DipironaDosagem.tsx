import EndingTextComponent from "@/components/EndingTextComponent";
import { Box, Text, Heading, List, Link, Button } from "@chakra-ui/react";

const DipironaDosagem = () => {
  return (
    <>
      <EndingTextComponent />
      <Box
        maxWidth="800px"
        margin="0 auto"
        padding="20px"
        fontFamily="sans-serif"
      >
        <Heading as="h1" size="xl" marginBottom="20px" color="blue.700">
          Dipirona em crianças: entendendo a dosagem correta
        </Heading>

        <Text fontSize="lg" marginBottom="20px" lineHeight="1.6">
          Um dos medicamentos mais utilizados em pediatria, a dipirona gera
          muitas dúvidas entre pais e cuidadores. Esclarecer essas questões é
          fundamental para garantir a segurança e o bem-estar das crianças.
        </Text>

        <Heading
          as="h2"
          size="lg"
          marginTop="30px"
          marginBottom="15px"
          color="blue.600"
        >
          Febre: um sinal de alerta, não uma doença
        </Heading>

        <Text fontSize="md" marginBottom="20px" lineHeight="1.6">
          Antes de falarmos sobre medicamentos, é importante entender que a
          febre não é uma doença, mas sim um mecanismo de defesa do corpo. Ela
          indica que o organismo está combatendo algo que não está funcionando
          como deveria - geralmente uma infecção.
        </Text>

        <Heading
          as="h2"
          size="lg"
          marginTop="30px"
          marginBottom="15px"
          color="blue.600"
        >
          Quando e como usar dipirona em crianças
        </Heading>

        <Text fontSize="md" marginBottom="15px" lineHeight="1.6">
          A dipirona pode ser utilizada em crianças maiores de 3 meses ou que
          pesem mais de 5kg. No entanto, a dosagem deve ser cuidadosamente
          calculada para evitar subdosagem (que não terá o efeito desejado) ou
          superdosagem (que pode trazer riscos à saúde).
        </Text>

        <Box
          backgroundColor="blue.50"
          padding="20px"
          borderRadius="10px"
          marginBottom="25px"
        >
          <Heading as="h3" size="md" marginBottom="15px" color="blue.700">
            Calculando a dose correta:
          </Heading>

          <List.Root>
            <List.Item fontSize="md" lineHeight="1.6">
              A dose recomendada é de <strong>10 a 16mg por kg</strong> de peso
              da criança
            </List.Item>
            <List.Item fontSize="md" lineHeight="1.6">
              A apresentação em gotas geralmente contém{" "}
              <strong>500mg/ml</strong>
            </List.Item>
            <List.Item fontSize="md" lineHeight="1.6">
              Para uma criança de 10kg, a dose seria entre 100mg e 160mg
            </List.Item>
            <List.Item fontSize="md" lineHeight="1.6">
              Considerando que 1ml = 500mg, e que 1ml corresponde a
              aproximadamente 20 gotas
            </List.Item>
            <List.Item fontSize="md" lineHeight="1.6">
              Assim, para 10kg: <strong>4 a 7 gotas</strong> (não 10 gotas como
              muitos imaginam)
            </List.Item>
          </List.Root>
        </Box>

        <Text
          fontSize="md"
          marginBottom="20px"
          lineHeight="1.6"
          fontWeight="bold"
        >
          A regra de "1 gota por kg" pode funcionar em alguns casos, mas não é
          universal e pode levar a dosagens incorretas.
        </Text>

        <Heading
          as="h2"
          size="lg"
          marginTop="30px"
          marginBottom="15px"
          color="blue.600"
        >
          A importância da dosagem precisa
        </Heading>

        <Text fontSize="md" marginBottom="20px" lineHeight="1.6">
          A dosagem correta faz toda a diferença para a segurança e eficácia do
          medicamento. Dar uma dose significativamente maior do que a
          recomendada (como 10 gotas para uma criança de 10kg) significa
          administrar quase o dobro do que seria adequado.
        </Text>

        <Box
          backgroundColor="green.50"
          padding="20px"
          borderRadius="10px"
          marginBottom="25px"
        >
          <Heading as="h3" size="md" marginBottom="15px" color="green.700">
            Recomendação importante:
          </Heading>

          <Text fontSize="md" lineHeight="1.6">
            O ideal é sempre confirmar a dose com o pediatra do seu filho, que
            conhece o histórico de saúde da criança e pode fazer recomendações
            personalizadas. Cada criança é única, e fatores individuais podem
            influenciar na dosagem mais adequada.
          </Text>
        </Box>

        <Text
          fontSize="md"
          marginBottom="20px"
          lineHeight="1.6"
          fontStyle="italic"
        >
          Lembre-se: medicamentos são ferramentas importantes para o cuidado com
          a saúde, mas devem ser utilizados com conhecimento e responsabilidade,
          especialmente quando se trata de crianças.
        </Text>

        <Text fontSize="md" marginBottom="20px" lineHeight="1.6">
          Gostaria de ver um carrossel sobre o assunto? Fiz um especialmente
          para os meus seguidores do Instagram!
          <Link
            href="https://www.instagram.com/p/DObwzUoD57k/?img_index=5"
            ml={2}
            target="_blank"
            textDecoration="none"
          >
            <Button size="sm" variant="outline" colorPalette="green">
              Acesse agora mesmo
            </Button>
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default DipironaDosagem;
