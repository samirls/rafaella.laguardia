import EndingTextComponent from "@/components/EndingTextComponent";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function VacinaBronquiolite() {
  return (
    <>
      <EndingTextComponent />
      <Box py={10} px={4} maxW="800px" mx="auto">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Uma Novidade para as Futuras Mamães! 💙
        </Heading>

        <Text fontSize="lg" mb={4}>
          <strong>
            Chegou mais um marco para a saúde das gestantes e dos bebês no
            Brasil:{" "}
          </strong>
          a vacina contra o Vírus Sincicial Respiratório (VSR) será oferecida
          gratuitamente pelo SUS a partir de novembro de 2025!
        </Text>

        <Text fontSize="lg" textAlign="justify" mb={8}>
          É uma conquista enorme para a saúde pública e uma arma poderosa para
          proteger nossos pequenos desde os seus primeiros dias de vida.
        </Text>

        <Heading as="h2" size="lg" mt={8} mb={4}>
          O que é o VSR e por que devemos nos preocupar?
        </Heading>
        <Text fontSize="md" textAlign="justify" mb={4}>
          O Vírus Sincicial Respiratório (VSR) é o{" "}
          <strong>
            principal causador de bronquiolite e pneumonia em bebês
          </strong>
          . É muito comum e altamente contagioso. Para adultos e crianças mais
          velhas, ele geralmente se parece com um resfriado comum, mas para os
          bebês, especialmente os recém-nascidos, pode ser muito grave,
          frequentemente levando à hospitalização.
        </Text>
        <Text fontSize="md" textAlign="justify" mb={8}>
          Para as gestantes, pegar uma infecção por VSR também não é
          brincadeira. Durante a gravidez, o sistema imunológico muda, e uma
          infecção respiratória forte pode levar a complicações como pneumonia,
          maior desconforto respiratório e estresse, que todos queremos evitar
          nesse período tão especial.
        </Text>

        <Heading as="h2" size="lg" mt={8} mb={4}>
          A Vacina: Um Escudo de Amor em Dose Dupla! 💉
        </Heading>
        <Text fontSize="md" textAlign="justify" mb={4}>
          A grande novidade é que, a partir de <strong>novembro de 2025</strong>
          , todas as gestantes a partir de
          <strong> 28 semanas de idade gestacional</strong> poderão receber essa
          vacina <strong>gratuitamente pelo SUS</strong>.
        </Text>
        <Text fontSize="md" textAlign="justify" mb={8}>
          E o mais bonito disso tudo?{" "}
          <strong>
            Ao se vacinar, a mamãe não se protege apenas ela mesma. Ela está
            passando esse escudo protetor diretamente para o seu bebê!
          </strong>
        </Text>

        <Heading as="h2" size="lg" mt={8} mb={4}>
          Como funciona essa proteção dupla?
        </Heading>
        <Text fontSize="md" textAlign="justify" mb={4}>
          É pura ciência e amor de mãe! Quando a gestante é vacinada, seu
          organismo produz anticorpos contra o VSR. Esses anticorpos
          superpoderosos <strong>atravessam a placenta</strong> e chegam até o
          bebê, garantindo que ele já nasça com uma defesa natural contra o
          vírus.
        </Text>
        <Text fontSize="md" textAlign="justify" mb={8}>
          Isso significa que nos primeiros meses de vida, que são os mais
          críticos para uma infecção grave por VSR, o bebê estará protegido pela
          vacina que a mamãe tomou ainda na barriga. É o melhor presente de
          boas-vindas que ele poderia receber!
        </Text>

        <Heading as="h2" size="lg" mt={8} mb={4}>
          Por que é tão importante se vacinar?
        </Heading>
        <Box as="ul" pl={5} mb={8} fontSize="md">
          <Box as="li" mb={2}>
            <strong>Protege você:</strong> Evita que a gestante tenha uma
            infecção respiratória grave.
          </Box>
          <Box as="li" mb={2}>
            <strong>Protege seu bebê:</strong> Fornece a ele anticorpos
            essenciais para combater o VSR assim que ele nascer.
          </Box>
          <Box as="li" mb={2}>
            <strong>Reduz riscos:</strong> Diminui drasticamente as chances do
            seu pequeno desenvolver bronquiolite grave, pneumonia e precisar ser
            internado.
          </Box>
          <Box as="li">
            <strong>Tranquilidade:</strong> Permite que você curta os últimos
            momentos da gravidez e os primeiros meses do bebê com mais sossego e
            segurança.
          </Box>
        </Box>

        <Heading as="h2" size="lg" mt={8} mb={4}>
          Fique de olho no calendário!
        </Heading>
        <Text fontSize="md" textAlign="justify" mb={4}>
          Se você estiver grávida e completará{" "}
          <strong>28 semanas a partir de novembro de 2025</strong>, converse com
          o seu médico no pré-natal e fique atenta ao calendário de vacinação da
          sua cidade. Esta é uma oportunidade única de começar a cuidar do seu
          bebê antes mesmo do primeiro suspiro dele.
        </Text>
        <Text fontSize="md" textAlign="justify" mb={8}>
          Espalhe essa alegria! Compartilhe essa novidade com todas as futuras
          mamães que você conhece. Juntas, estamos construindo um começo de vida
          mais saudável e seguro para a próxima geração.
        </Text>
      </Box>
    </>
  );
}
