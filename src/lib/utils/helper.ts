import type { ClassValue } from 'clsx';
import type { Platform } from '$lib/utils/types';
import type { Tool } from '$data/projects';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const tools: Record<Tool, string> = {
	react: 'logos:react',
	django: 'logos:django-icon',
	fastapi: 'logos:fastapi-icon',
	python: 'logos:python',
	svelte: 'logos:svelte-icon',
	typescript: 'logos:typescript-icon',
	postgresql: 'logos:postgresql',
	mysql: 'logos:mysql-icon',
	firebase: 'logos:firebase-icon',
	xray: 'logos:xray-for-jira',
	katalon: 'logos:katalon-icon',
	redhat: 'logos:redhat-icon',
	sqlite: 'logos:sqlite'
};

export const platforms: Record<Platform, string> = {
	web: 'mdi:web',
	mobile: 'mdi:mobile-phone',
	desktop: 'mdi:desktop-windows',
	shell: 'mdi:terminal-line',
	api: 'mdi:api'
};
