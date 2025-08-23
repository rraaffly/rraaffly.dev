import type { Device } from '$lib/utils/types';

export const projects: Array<{
	img: string;
	title: string;
	description: string;
	device: Device[];
}> = [
	{
		img: 'https://dummyimage.com/800x600/000/fff',
		title: 'ShutterLab',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis dolor nostrum, quos beatae magni iusto libero dolorem architecto quidem!',
		device: ['web']
	},
	{
		img: 'https://dummyimage.com/800x600/000/fff',
		title: 'ShutterLab Node Agent',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis dolor nostrum, quos beatae magni iusto libero dolorem architecto quidem!',
		device: ['shell', 'web']
	},
	{
		img: 'https://dummyimage.com/800x600/000/fff',
		title: 'NutriMom',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis dolor nostrum, quos beatae magni iusto libero dolorem architecto quidem!',
		device: ['mobile']
	}
];
