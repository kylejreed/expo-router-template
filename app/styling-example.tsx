import { ComponentSystemExample } from "@/components/ComponentSystemExample";
import { Screen } from "@/components/ui";

export default function StylingExampleScreen() {
    return (
        <Screen padding stackOptions={{ title: "Component System" }}>
            <ComponentSystemExample />
        </Screen>
    );
}
