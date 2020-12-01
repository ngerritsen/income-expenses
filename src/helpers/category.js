import { CATEGORIES } from '../constants';

export function getCategoryName(id) {
  return CATEGORIES.find((category) => category.id === id).name;
}
