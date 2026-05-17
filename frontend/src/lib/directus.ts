// src/lib/directus.ts
import { createDirectus, rest } from '@directus/sdk';
import { DIRECTUS_URL } from './config';

export const directus = createDirectus(DIRECTUS_URL).with(rest());