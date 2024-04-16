import { Button, Row, Screen, Text } from "@/components/ui";
import { useExampleStore } from "@/stores/example";

export default function StoreExample() {
    const { count, increment, decrement, clear } = useExampleStore();
    return (
        <Screen padding justify="center" align="center" stackOptions={{ title: "Zustand store Example" }}>
            <Text>Counter: {count}</Text>
            <Row>
                <Button title="Inc" onPress={increment} />
                <Button title="Dec" onPress={decrement} />
                <Button title="Clear" onPress={clear} />
            </Row>
        </Screen>
    );
}
