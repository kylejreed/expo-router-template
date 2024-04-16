import { Row, Stack, Text } from "@/components/ui";

export const ComponentSystemExample = () => {
    return (
        <Stack gap={8}>
            <Stack gap={8}>
                <Text>Row</Text>
                <Row gap={8}>
                    <Cell1 fill />
                    <Cell2 fill />
                    <Cell3 fill />
                </Row>
                <Row gap={8}>
                    <Cell1 fill />
                    <Cell2 />
                    <Cell3 fill />
                </Row>

            </Stack>

            <Stack gap={4}>
                <Text>Stack</Text>
                <Stack gap={8}>
                    <Cell1 />
                    <Cell2 />
                    <Cell3 />
                </Stack>
            </Stack>
        </Stack>
    );
};

type CellProps = { fill?: boolean; };
const Cell1 = (props: CellProps) => <Stack grow={props.fill} className="bg-green-500 p-2"><Text className="text-black">1</Text></Stack>;
const Cell2 = (props: CellProps) => <Stack grow={props.fill} className="bg-pink-200 p-2"><Text className="text-black">2</Text></Stack>;
const Cell3 = (props: CellProps) => <Stack grow={props.fill} className="bg-cyan-300 p-2"><Text className="text-black">3</Text></Stack>;
