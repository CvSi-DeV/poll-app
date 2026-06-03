import type { Choice } from "../types/Poll";

export const INITIAL_CHOICES: Choice[] = [
    { id: 1, label: "React", votes: 0 },
    { id: 2, label: "Vue", votes: 0 },
    { id: 3, label: "Angular", votes: 0 },
    { id: 4, label: "Svelte", votes: 0 }
];

export const INITIAL_QUESTION: string = "Quel est ton framework préféré ?"