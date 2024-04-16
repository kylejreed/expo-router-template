import { cn } from "@/lib/utils";
import { ScrollView, View, ViewProps } from "react-native";
import { Stack as RouterStack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = ViewProps & {
    gap?: number;
    grow?: boolean;
    justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
    align?: "start" | "end" | "center" | "between" | "around" | "evenly";
};

type BoxProps<T extends React.ElementType = typeof View> = Props & {
    as?: T;
};

const Box = <T extends React.ElementType>({ className, ...props }: BoxProps<T>) => {
    const Component = props.as ?? View;
    return <Component
        className={cn(
            props.grow && "flex-1",
            props.gap && `gap-${props.gap}`,
            props.justify && `justify-${props.justify}`,
            props.align && `items-${props.align}`,
            className,
        )}
        {...props}
    />;
};

export const Stack = ({ className, ...props }: Props) => {
    return <Box className={cn(className, "flex flex-col")} {...props} />;
};

export const Row = ({ className, ...props }: Props) => {
    return <Box className={cn(className, "flex flex-row")} {...props} />;
};

export const Spacer = () => {
    return <Box className="flex-1" />;
};

type ScreenProps = Omit<Props, "fill"> & {
    padding?: boolean | number;
    scrollable?: boolean;
    stackOptions?: {
        title?: string;
        headerShown?: boolean;
    };
};
export const Screen = ({ className, ...props }: ScreenProps) => {
    const showStackHeader = props.stackOptions?.headerShown ?? true;
    const needsSafeArea = !showStackHeader;
    return (
        <>
            {props.stackOptions && <RouterStack.Screen options={{ title: props.stackOptions.title, headerShown: showStackHeader }} />}
            <Box as={props.scrollable ? ScrollView : needsSafeArea ? SafeAreaView : undefined} className={cn(className, props.padding && "p-4", "flex-1 bg-background")} {...props} />
        </>
    );
}
