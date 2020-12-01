import { DEFAULT_CATEGORY } from '../constants';

export function getGroupedItems(items, itemType, responsible) {
  return items
    .filter(
      (item) => item.responsible === responsible && item.itemType === itemType
    )
    .sort((a, b) => b.amount - a.amount)
    .reduce((categories, item) => {
      const id = item.category || DEFAULT_CATEGORY;
      const currentCategory = categories.find((category) => id === category.id);

      if (!currentCategory) {
        return [...categories, { id, items: [item] }];
      }

      return categories
        .map((category) =>
          category.id === id
            ? { id, items: [...category.items, item] }
            : category
        )
        .sort((a, b) => totalCost(b) - totalCost(a));
    }, []);
}

function totalCost(category) {
  return category.items.reduce((total, item) => item.amount + total);
}
