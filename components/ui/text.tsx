import { Text as RNText, TextProps } from "react-native";
import { cn } from "@/lib/utils";

type Props = TextProps & { className?: string; grow?: boolean; };
export const Text = ({ className, ...props }: Props) => {
    return <RNText className={cn("text-foreground", props.grow && "flex-1", className)} {...props} />;
}
