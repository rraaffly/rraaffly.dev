import type { Platform } from '$lib/utils/types';

export type Tool =
	| 'svelte'
	| 'react'
	| 'django'
	| 'fastapi'
	| 'python'
	| 'typescript'
	| 'postgresql'
	| 'firebase'
	| 'xray'
	| 'katalon'
	| 'mysql'
	| 'redhat'
	| 'sqlite';

export type ProjectType =
	| 'Web App Development'
	| 'Mobile App Development'
	| 'Desktop App Development'
	| 'API'
	| 'Automation Testing';

export type ProjectData = {
	img: string;
	title: string;
	type: ProjectType;
	description: string;
	platform: Platform[];
	tool: Tool[];
};

export const projects: ProjectData[] = [
	{
		img: 'https://dummyimage.com/800x600/000/fff',
		title: 'HCMS 4.0',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis dolor nostrum, quos beatae magni iusto!',
		platform: ['web'],
		tool: ['katalon', 'mysql', 'redhat', 'xray'],
		type: 'Automation Testing'
	},
	{
		img: 'https://dummyimage.com/800x600/000/fff',
		title: 'Genetic Algorithm',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis dolor nostrum, quos beatae magni iusto!',
		platform: ['api'],
		tool: ['python', 'fastapi', 'sqlite'],
		type: 'API'
	},
	{
		img: 'https://dummyimage.com/800x600/000/fff',
		title: 'NutriMom',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis dolor nostrum, quos beatae magni iusto!',
		platform: ['mobile'],
		tool: ['typescript', 'react', 'firebase'],
		type: 'Mobile App Development'
	}
];
