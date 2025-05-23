import { colors, fontFamily } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100],
    fontSize: 16,
  },
});
