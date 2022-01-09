import { action } from 'typesafe-actions';

export const add = (title: string) => action('cart/ADD', { completed: false });