import { action } from 'typesafe-actions';

export const add = (title: string) => action('app/ADD', { title, completed: false });