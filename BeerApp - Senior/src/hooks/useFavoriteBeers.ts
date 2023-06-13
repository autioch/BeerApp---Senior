import { Beer } from '../types';
import { useLocalStorage } from './useLocalStorage';

export function useFavoriteBeers() {
  return useLocalStorage<Record<Beer['id'], boolean>>('favoriteBeers', {});
}