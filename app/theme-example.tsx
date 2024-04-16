import { Icon, Row, Screen, Spacer, Stack, Text } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function ThemeExample() {
    const { isDarkMode: isDarkColorScheme, toggleColorScheme } = useColorScheme();

    const ThemeIcon = isDarkColorScheme ? Icon.Moon : Icon.Sun;
    return (
        <Screen padding stackOptions={{ title: "Theme" }}>
            <Text className="text-2xl font-bold text-center">
                Color Palette
            </Text>

            <Stack gap={8} className=" p-4">
                <Row align="center">
                    <Text grow>Theme</Text>
                    <ThemeIcon className="color-foreground h-10 mr-2" />
                </Row>
                <Row align="center">
                    <Text grow>Primary</Text>
                    <Stack className="h-10 w-10 rounded-sm bg-primary" />
                </Row>
                <Row align="center">
                    <Text grow>Secondary</Text>
                    <Stack className="h-10 w-10 rounded-sm bg-secondary" />
                </Row>
                <Row align="center">
                    <Text grow>Accent</Text>
                    <Stack className="h-10 w-10 rounded-sm bg-accent" />
                </Row>
                <Row align="center">
                    <Text grow>Destructive</Text>
                    <Stack className="h-10 w-10 rounded-sm bg-destructive" />
                </Row>
                <Row align="center">
                    <Text grow>Muted</Text>
                    <Stack className="h-10 w-10 rounded-sm bg-muted" />
                </Row>

            </Stack>

            <Spacer />
            <Button title="Toggle Theme" onPress={toggleColorScheme} />
        </Screen>
    );
}
