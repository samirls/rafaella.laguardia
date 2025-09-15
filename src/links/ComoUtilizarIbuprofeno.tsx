import EndingTextComponent from "@/components/EndingTextComponent";
import { Box, Text, Heading, List } from "@chakra-ui/react";

const ComoUtilizarIbuprofeno = () => {
  return (
    <>
      <EndingTextComponent />
      <Box maxWidth="800px" margin="0 auto" padding="40px 20px">
        <Heading as="h1" size="xl" marginBottom="30px" color="blue.700">
          Ibuprofeno: Entenda as diferentes apresentações e sua importância na
          dosagem
        </Heading>

        <Text fontSize="lg" marginBottom="24px" lineHeight="1.6">
          Muitas pessoas não sabem, mas o <strong>#ibuprofeno</strong> está
          disponível em diversas apresentações no mercado farmacêutico, o que
          frequentemente gera dúvidas tanto na prescrição médica quanto na
          administração do medicamento.
        </Text>

        <Box
          backgroundColor="blue.50"
          padding="25px"
          borderRadius="12px"
          marginBottom="28px"
        >
          <Heading as="h2" size="md" marginBottom="18px" color="blue.600">
            ➡️ A apresentação mais utilizada: ibuprofeno 100mg/ml
          </Heading>

          <Text marginBottom="16px" lineHeight="1.6">
            Entre as diversas concentrações disponíveis, o ibuprofeno 100mg/ml
            se destaca por ser a apresentação que mais se aproxima da dose
            padrão de <strong>1 gota por kg de peso corporal</strong>.
          </Text>

          <Text lineHeight="1.6">
            Esta informação é especialmente valiosa no âmbito pediátrico, onde o
            cálculo preciso da dosagem é fundamental para assegurar tanto a
            eficácia terapêutica quanto a segurança do paciente.
          </Text>
        </Box>

        <Box
          backgroundColor="red.50"
          padding="25px"
          borderRadius="12px"
          marginBottom="28px"
        >
          <Heading as="h2" size="md" marginBottom="18px" color="red.600">
            ⚠️ Atenção aos riscos do uso inadequado
          </Heading>

          <Text marginBottom="16px" lineHeight="1.6">
            Apesar de ser um medicamento amplamente conhecido e utilizado, o{" "}
            <strong>#ibuprofeno</strong> não está isento de riscos. Quando
            administrado em doses incorretas ou sem orientação adequada, pode
            desencadear diversos efeitos adversos:
          </Text>

          <List.Root marginLeft="25px">
            <List.Item>Irritação gástrica e desconforto abdominal</List.Item>
            <List.Item>
              Complicações renais, especialmente em pacientes predispostos
            </List.Item>
            <List.Item>
              Interferência no processo de coagulação sanguínea
            </List.Item>
            <List.Item>Reações alérgicas e de hipersensibilidade</List.Item>
          </List.Root>
        </Box>

        <Box
          backgroundColor="green.50"
          padding="25px"
          borderRadius="12px"
          marginBottom="28px"
        >
          <Heading as="h2" size="md" marginBottom="18px" color="green.600">
            💡 Recomendações importantes para uso seguro
          </Heading>

          <Text marginBottom="16px" lineHeight="1.6">
            Para evitar complicações e garantir a eficácia do tratamento, é
            fundamental seguir estas orientações:
          </Text>

          <List.Root marginLeft="25px">
            <List.Item>
              Nunca administre o medicamento "de olho" ou por conta própria
            </List.Item>
            <List.Item>
              A dosagem deve ser sempre calculada com base no peso corporal
            </List.Item>
            <List.Item>
              Siga rigorosamente a prescrição e orientação do médico
            </List.Item>
            <List.Item>
              Utilize sempre o dispositivo de medição fornecido com o
              medicamento
            </List.Item>
            <List.Item>
              Respeite os intervalos entre as doses recomendadas
            </List.Item>
          </List.Root>
        </Box>

        <Text fontSize="lg" lineHeight="1.6" marginBottom="30px">
          No vídeo exclusivo disponível em meu instagram e youtube, explico de
          forma prática como funcionam as diferentes apresentações de
          ibuprofeno, assista:
        </Text>

        <Box
          position="relative"
          paddingBottom="56.25%"
          height="0"
          overflow="hidden"
          marginBottom="30px"
          borderRadius="12px"
          boxShadow="lg"
        >
          <iframe
            src="https://www.youtube.com/embed/38ebDAunePM"
            title="Vídeo sobre apresentações do Ibuprofeno"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>

        <Text fontStyle="italic" color="gray.600">
          Lembre-se: em caso de dúvidas, sempre consulte o seu médico.
        </Text>
      </Box>
    </>
  );
};

export default ComoUtilizarIbuprofeno;
