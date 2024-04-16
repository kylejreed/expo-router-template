import { ChevronRight, Moon, Sun, LucideIcon } from "lucide-react-native";
import { cssInterop } from "nativewind";

interopIcon(ChevronRight);
interopIcon(Moon);
interopIcon(Sun);

export const Icon = {
    ChevronRight,
    Moon,
    Sun
};

function interopIcon(icon: LucideIcon) {
    cssInterop(icon, {
        className: {
            target: 'style',
            nativeStyleToProp: {
                color: true,
                opacity: true,
            },
        },
    });
}
