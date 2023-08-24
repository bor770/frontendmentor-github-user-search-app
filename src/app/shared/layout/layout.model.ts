export const widths = [`mobile`, `tablet`, `desktop`] as const;

export type Width = (typeof widths)[number];
