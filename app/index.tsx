import { Icon, Text, Row, Screen } from "@/components/ui";
import { useColorScheme } from "@/hooks/useColorScheme";
import { cn } from "@/lib/utils";
import { AllRoutes, useRouter } from "expo-router";
import { FlatList, Pressable, View } from "react-native";

const screens: { href: AllRoutes; title: string; icon?: React.JSX.Element; }[] = [
    { href: "/theme-example", title: "Theme" },
    { href: "/styling-example", title: "Component system" },
    { href: "/store-example", title: "Zustand Example" },
];

export default function MainScreen() {
    const { isDarkMode } = useColorScheme();
    return (
        <Screen stackOptions={{ title: "Main", headerShown: false }}>
            <FlatList
                data={screens}
                keyExtractor={screen => screen.href}
                renderItem={({ item }) => <ListItem to={item.href} title={item.title} icon={item.icon} />}
                ItemSeparatorComponent={() => <View className={cn("h-hairline", isDarkMode ? "bg-gray-700" : "bg-gray-300")} />}
            />
        </Screen>
    );
}

type ListItemProps = {
    to: AllRoutes;
    title: string;
    icon?: React.JSX.Element;
};
const ListItem = ({ to, title, icon }: ListItemProps) => {
    const router = useRouter();
    return (
        <Pressable onPress={() => router.push(to)}>
            <Row className="px-3 py-4 " justify="between">
                <Row grow gap={4} align="center">
                    {icon}
                    <Text>{title}</Text>
                </Row>
                <Icon.ChevronRight className="color-gray-500" size={18} />
            </Row>
        </Pressable>
    );
}

