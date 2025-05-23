import { Text, View } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
import { MapPinIcon, QrCodeIcon, TicketIcon } from "lucide-react-native";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>veja como funciona:</Text>

      <Step
        icon={MapPinIcon}
        title="Encontre estabelecimentos"
        description="veja locais perto de você que são parceiros da Nearby"
      />
      <Step
        icon={QrCodeIcon}
        title="Ative o cupom com QR code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />

      <Step
        icon={TicketIcon}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos"
      />
    </View>
  );
}
