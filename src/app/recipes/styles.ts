import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 12,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
  },
  recipes: {
    padding: 32,
  },
  recipesContent: {
    gap: 16,
  },
  empty: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
  },
})
