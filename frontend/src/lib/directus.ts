import { createDirectus, rest } from '@directus/sdk';

const directusUrl = import.meta.env.PUBLIC_DIRECTUS_URL;

export const directus = createDirectus(directusUrl).with(rest());