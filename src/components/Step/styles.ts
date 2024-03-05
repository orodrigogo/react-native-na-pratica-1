import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
  step: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.bold,
    color: theme.colors.black,
  },
  description: {
    flex: 1,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
  },
})
