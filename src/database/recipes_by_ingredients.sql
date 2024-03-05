CREATE OR REPLACE FUNCTION recipes_by_ingredients(ids UUID[])
RETURNS setof recipes
AS $$
BEGIN
    RETURN QUERY
    SELECT
        recipes.id,
        recipes.name,
        recipes.minutes,
        recipes.image
    FROM
        recipes_ingredients
    INNER JOIN
        recipes ON recipes_ingredients.recipe_id = recipes.id
    WHERE
        recipes_ingredients.ingredient_id = ANY(ids)
    GROUP BY recipes.id;
END;
$$ LANGUAGE plpgsql;
