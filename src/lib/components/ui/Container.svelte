<script lang="ts">
	import { cn } from '$lib/utils/helper';

	let { children, class: className = '', ...rest } = $props();
</script>

<div class={cn('mx-auto w-full px-6 lg:w-9/12', className)} {...rest}>{@render children?.()}</div>
