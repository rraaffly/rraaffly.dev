<script lang="ts">
	import { cn } from '$lib/utils/helper';

	let { children, class: className = '', ...rest } = $props();
</script>

<section class={cn('mx-auto max-w-6xl', className)} {...rest}>{@render children?.()}</section>
