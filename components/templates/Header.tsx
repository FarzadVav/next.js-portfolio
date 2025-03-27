"use client";

import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import { Burger, Button, Container, Divider, Drawer, Group, ScrollArea } from "@mantine/core";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <>
      <header className="border-b">
        <Container h={60}>
          <Group justify="space-between" h="100%">
            <h1>لوگوی وبسایت</h1>

            <Group gap={"lg"} visibleFrom="sm">
              <Link href={"#"}>
                <Button variant="subtle">Home</Button>
              </Link>
              <Link href={"#"}>
                <Button variant="subtle">Learn</Button>
              </Link>
              <Link href={"#"}>
                <Button variant="subtle">Academy</Button>
              </Link>
            </Group>

            <Group visibleFrom="sm">
              <Button variant="default">
                <IconUser />
              </Button>
              <Button>سفارش پروژه</Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </Container>
      </header>

      <Drawer
        size="100%"
        padding="md"
        zIndex={100}
        hiddenFrom="sm"
        title="Navigation"
        onClose={closeDrawer}
        opened={drawerOpened}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#">Home</a>
          <a href="#">Learn</a>
          <a href="#">Academy</a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
