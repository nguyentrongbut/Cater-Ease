export function groupDishesByCategory<T extends { categoryName?: string }>(
    dishes: T[]
): Record<string, T[]> {
    return dishes.reduce((acc, dish) => {
        const category = dish.categoryName || "Unknown";
        if (!acc[category]) acc[category] = [];
        acc[category].push(dish);
        return acc;
    }, {} as Record<string, T[]>);
}