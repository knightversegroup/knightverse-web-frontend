<script lang="ts">
	import { onMount } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';
	import { Shield, Building2, TrendingUp, FlaskConical } from '@lucide/svelte';
	import { WheelControls } from '$lib/utils/wheelControls';

	let sliderRef: HTMLDivElement;
	let sliderInstance: InstanceType<typeof KeenSlider> | null = null;
	let currentSlide = $state(0);

	const solutions = [
		{
			category: 'ภาครัฐ',
			title: 'โซลูชัน AI สำหรับหน่วยงานภาครัฐ',
			description: 'ระบบ AI อัจฉริยะเพื่อการตัดสินใจที่มีประสิทธิภาพ',
			href: '/agentic-warfare',
			icon: 'shield'
		},
		{
			category: 'องค์กร',
			title: 'โซลูชัน AI สำหรับการเปลี่ยนแปลงองค์กร',
			description: 'ระบบ AI ที่เรียนรู้และปรับปรุงผลลัพธ์อย่างต่อเนื่อง',
			href: '/enterprise/agentic-solutions',
			icon: 'building'
		},
		{
			category: 'การวิเคราะห์',
			title: 'ระบบประเมินและจัดอันดับ AI',
			description: 'เปรียบเทียบประสิทธิภาพโมเดล AI ด้วยการประเมินจากผู้เชี่ยวชาญ',
			href: '/research/leaderboards',
			icon: 'chart'
		},
		{
			category: 'วิจัย',
			title: 'ระบบประเมินความเสี่ยงขั้นสูง',
			description: 'การประเมินความเสี่ยงสำหรับโครงสร้างพื้นฐานที่สำคัญ',
			href: '/research/fortress',
			icon: 'flask'
		}
	];

	onMount(() => {
		if (sliderRef) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {
				drag: true,
				rubberband: true,
				slides: {
					perView: 1.2,
					spacing: 16
				},
				breakpoints: {
					'(min-width: 640px)': {
						slides: { perView: 1.5, spacing: 24 }
					},
					'(min-width: 1024px)': {
						slides: { perView: 2, spacing: 32 }
					}
				}
			};
			sliderInstance = new KeenSlider(sliderRef, options, [
				WheelControls,
				(slider) => {
					slider.on('slideChanged', () => {
						currentSlide = slider.track.details.rel;
					});
				}
			]);
		}

		return () => {
			sliderInstance?.destroy();
		};
	});

	function goToSlide(index: number) {
		sliderInstance?.moveToIdx(index);
	}
</script>

<div class="flex flex-col items-center justify-center w-full bg-neutral-50 py-16 md:py-24">
	<div class="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-10">
		<div
			class="flex flex-col justify-center mb-10 md:mb-16 items-center mx-auto max-w-3xl text-center relative z-10"
		>
			<div class="flex flex-col">
				<div class="text-xs tracking-[1px] mb-5 uppercase font-mono text-neutral-500">
					<span>โซลูชัน AI</span>
				</div>
				<h2 class="font-medium leading-tight text-3xl md:text-4xl lg:text-5xl text-neutral-900">
					โซลูชันอัจฉริยะ
				</h2>
				<p class="mt-4 text-base lg:text-lg leading-relaxed text-neutral-600 font-normal w-full">
					เปลี่ยนข้อมูลและความเชี่ยวชาญของคุณให้เป็นโซลูชันอัจฉริยะที่พัฒนาต่อเนื่องผ่านการโต้ตอบกับมนุษย์
				</p>
			</div>
		</div>
	</div>

	<div class="w-full overflow-hidden">
		<div class="max-w-7xl mx-auto px-6 md:px-10">
			<div bind:this={sliderRef} class="keen-slider pb-20 !overflow-visible">
				{#each solutions as solution}
					<a class="keen-slider__slide" href={solution.href}>
						<div>
							<div
								class="pt-9 md:pt-12 pb-0 overflow-hidden max-h-[436px] lg:h-[540px] min-h-[450px] lg:min-h-[540px] z-10 text-neutral-900 bg-white border border-neutral-200 relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 rounded-2xl"
							>
								<p class="uppercase text-xs tracking-[1px] mb-4 lg:mb-6 z-10 relative font-mono text-neutral-500">
									{solution.category}
								</p>
								<h3
									class="text-xl md:text-2xl leading-tight mb-2 font-medium z-10 relative max-w-96"
								>
									{solution.title}
								</h3>
								<p class="text-sm z-10 mb-8 leading-relaxed md:mb-18 text-neutral-600">
									{solution.description}
								</p>
								<div class="absolute -right-12 -bottom-12 md:-right-16 md:-bottom-16 text-neutral-200">
									{#if solution.icon === 'shield'}
										<Shield size={200} strokeWidth={1} class="md:w-[280px] md:h-[280px]" />
									{:else if solution.icon === 'building'}
										<Building2 size={200} strokeWidth={1} class="md:w-[280px] md:h-[280px]" />
									{:else if solution.icon === 'chart'}
										<TrendingUp size={200} strokeWidth={1} class="md:w-[280px] md:h-[280px]" />
									{:else if solution.icon === 'flask'}
										<FlaskConical size={200} strokeWidth={1} class="md:w-[280px] md:h-[280px]" />
									{/if}
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Navigation Dots -->
	<div class="flex relative justify-center mx-auto -mt-14">
		{#each solutions as _, index}
			<button
				type="button"
				class="px-1 py-2 sm:px-2"
				aria-label={`Go to slide ${index + 1}`}
				onclick={() => goToSlide(index)}
			>
				<div
					class="h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-300 {currentSlide ===
					index
						? 'bg-neutral-900 w-4 sm:w-5 md:w-6'
						: 'bg-neutral-400 w-1 sm:w-1.5 md:w-2'}"
				></div>
			</button>
		{/each}
	</div>
</div>
