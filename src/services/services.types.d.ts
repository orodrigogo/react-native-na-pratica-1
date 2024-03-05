type IngredientResponse = {
  id: string
  name: string
  image: string
}

type PreparationsResponse = {
  id: string
  recipe_id: string
  description: string
  step: number
}

type RecipeResponse = {
  id: string
  name: string
  image: string
  minutes: number
}
