import type {
  ProductAcitonsType,
  ProductStateContextType,
} from '../../types/contexts/productsReducerContext';

export default function productsReducer(
  store: ProductStateContextType,
  action: ProductAcitonsType,
): ProductStateContextType {
  const { type } = action;
  switch (type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':
      return [action.payload, ...store];
    case 'DELETE_PRODUCT':
      return store.filter((product) => product.id !== action.payload);
    case 'DELETE_ALL_PRODUCTS':
      return [];
    default:
      return store;
  }
}
