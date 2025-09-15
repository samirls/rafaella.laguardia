import { CloseButton, Button, Drawer, Portal, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function DrawerLinks() {
  return (
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner padding="2">
        <Drawer.Content rounded="md" bg="#fdf9f5">
          <Drawer.Header>
            <Drawer.Title>Dicas para Mamães</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body display="flex" flexDir="column">
            <Link
              mt={5}
              as={RouterLink}
              to="/vacina-bronquiolite"
            >
              Vacina Contra Bronquiolite
            </Link>
            <Link
              mt={5}
              as={RouterLink}
              to="/como-utilizar-o-ibuprofeno"
            >
              Como Utilizar o Ibuprofeno
            </Link>
            <Link
              mt={5}
              as={RouterLink}
              to="/dipirona-dosagem"
            >
              Dipirona: Uma Gota Por Kg?
            </Link>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger asChild>
              <Button variant="outline">Voltar</Button>
            </Drawer.ActionTrigger>
          </Drawer.Footer>
          <Drawer.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  );
}
