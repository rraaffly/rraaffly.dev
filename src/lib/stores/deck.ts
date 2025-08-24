import { writable } from 'svelte/store';

export const DECKS = ['cover', 'project', 'skill', 'something'] as const;
export type DeckName = (typeof DECKS)[number];

export const deckOrder = DECKS as unknown as DeckName[];
export const idx = writable(0);

export const titleMap: Record<DeckName, string> = {
	cover: '...',
	project: 'projects',
	skill: 'tools',
	something: 'something else'
};
