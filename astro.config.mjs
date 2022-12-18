import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [tailwind(), partytown(), svelte()]
});