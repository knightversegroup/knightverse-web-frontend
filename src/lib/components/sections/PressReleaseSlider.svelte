<script lang="ts">
	import { onMount } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';
	import { WheelControls } from '$lib/utils/wheelControls';

	let pressSliderRef: HTMLDivElement;
	let pressSliderInstance: InstanceType<typeof KeenSlider> | null = null;

	const pressReleases = [
		{
			category: 'พาร์ทเนอร์',
			title: 'KnightVerse ร่วมมือกับองค์กรชั้นนำพัฒนาโซลูชัน AI',
			href: '/blog/partnership',
			image: '/brands/iconv-1.webp',
			isNavigator: false
		},
		{
			category: 'กรณีศึกษา',
			title: 'ความสำเร็จในการพัฒนาระบบแปลเอกสารอัตโนมัติ',
			href: '/blog/case-study-dooform',
			image: '/brands/iconv-2.webp',
			isNavigator: false
		},
		{
			category: 'บทความ',
			title: 'เทรนด์เทคโนโลยี AI ที่จะเปลี่ยนแปลงธุรกิจในปี 2568',
			href: '/blog/ai-trends-2025',
			image: '/brands/iconv-3.webp',
			isNavigator: false
		},
		{
			category: 'ข่าวสาร',
			title: 'KnightVerse เปิดตัวบริการใหม่สำหรับองค์กรขนาดใหญ่',
			href: '/blog/enterprise-launch',
			image: '/brands/iconv-4.webp',
			isNavigator: false
		},
		{
			category: 'ดูทั้งหมด',
			title: 'อ่านบทความและข่าวสารเพิ่มเติม',
			href: '/blog',
			image: '',
			isNavigator: true
		}
	];

	onMount(() => {
		if (pressSliderRef) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const pressOptions: any = {
				drag: true,
				rubberband: true,
				slides: {
					perView: 1.2,
					spacing: 16
				},
				breakpoints: {
					'(min-width: 640px)': {
						slides: { perView: 2, spacing: 24 }
					},
					'(min-width: 1024px)': {
						slides: { perView: 3, spacing: 32 }
					}
				}
			};
			pressSliderInstance = new KeenSlider(pressSliderRef, pressOptions, [WheelControls]);
		}

		return () => {
			pressSliderInstance?.destroy();
		};
	});
</script>

<div class="w-full bg-white py-16 md:py-24">
	<div class="max-w-7xl mx-auto px-6 md:px-10">
		<div class="flex flex-col justify-center mb-10 md:mb-16 items-center mx-auto max-w-3xl text-center">
			<div class="text-xs tracking-[1px] mb-5 uppercase font-mono text-neutral-500">
				<span>ข่าวสารและบทความ</span>
			</div>
			<h2 class="font-medium leading-tight text-3xl md:text-4xl lg:text-5xl text-neutral-900">
				กรณีศึกษาและแหล่งข้อมูล
			</h2>
			<p class="mt-4 text-base lg:text-lg leading-relaxed text-neutral-600 font-normal">
				เราทำงานร่วมกับทีม AI ชั้นนำของโลกมาหลายปี และส่งมอบข้อมูลคุณภาพสูงมากกว่าใครอื่น
			</p>
		</div>
	</div>

	<div class="w-full overflow-hidden">
		<div class="max-w-7xl mx-auto px-6 md:px-10">
			<div bind:this={pressSliderRef} class="keen-slider !overflow-visible cursor-grab">
				{#each pressReleases as press}
					<a class="keen-slider__slide" href={press.href}>
						{#if press.isNavigator}
							<div class="aspect-[389/243] rounded-2xl relative bg-neutral-900 overflow-hidden flex flex-col items-center justify-center group hover:bg-neutral-800 transition-colors duration-300">
								<div class="text-white text-center px-6">
									<p class="text-sm font-medium text-neutral-400 mb-2">{press.category}</p>
									<h3 class="text-xl font-medium leading-tight">
										{press.title}
									</h3>
									<span class="inline-block mt-4 text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
								</div>
							</div>
						{:else}
							<div class="aspect-[389/243] rounded-2xl relative bg-neutral-100 overflow-hidden">
								<img
									alt={press.title}
									loading="lazy"
									class="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-300"
									src={press.image}
								/>
							</div>
							<div class="pt-5">
								<p class="text-sm font-medium text-[#3B82F6]">{press.category}</p>
								<h3 class="line-clamp-2 text-xl font-medium leading-tight mt-2 text-neutral-900">
									{press.title}
								</h3>
							</div>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
