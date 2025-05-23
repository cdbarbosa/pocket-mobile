import { Image, Text, View } from "react-native";
import { LucideProps } from "lucide-react-native";
import { s } from "./styles";
import { colors } from "@/src/styles/colors";

interface StepProps {
  title: string;
  description: string;
  icon?: React.ComponentType<LucideProps>;
}

export function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <View style={s.container}>
      <View>{Icon && <Icon size={32} color={colors.red.base} />}</View>
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
