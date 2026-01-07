<script lang="ts">
	import { SpellCheck, ListTree, WrapText } from '@lucide/svelte';

	let activeFeatureTab = $state(0);

	const features = [
		{
			icon: 'spell-check',
			title: 'พัฒนาซอฟต์แวร์ตามความต้องการ',
			description: 'โซลูชันที่ออกแบบมาเฉพาะสำหรับความต้องการทางธุรกิจของคุณ',
			image: '/brands/iconv-1.webp'
		},
		{
			icon: 'list-tree',
			title: 'ระบบจัดการฐานข้อมูล',
			description: 'สถาปัตยกรรมข้อมูลที่มีประสิทธิภาพเพื่อการดำเนินงานที่ราบรื่น',
			image: '/brands/iconv-2.webp'
		},
		{
			icon: 'wrap-text',
			title: 'แอปพลิเคชันองค์กร',
			description: 'แอปพลิเคชันที่ปรับขนาดได้ เติบโตไปพร้อมกับธุรกิจของคุณ',
			image: '/brands/iconv-3.webp'
		}
	];
</script>

<div class="flex flex-col items-center justify-center w-full bg-white py-16 md:py-24">
	<div class="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-10">
		<div class="grid w-full grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-16">
			<!-- Left Column - Text & Tabs -->
			<div class="flex flex-col gap-8">
				<div class="flex flex-col">
					<div class="text-xs tracking-[1px] mb-5 uppercase font-mono text-neutral-500">
						<span>ความเชี่ยวชาญ</span>
					</div>
					<h2 class="font-medium leading-tight text-3xl md:text-4xl lg:text-5xl text-neutral-900">
						สร้างด้วยความใส่ใจสูงสุด
					</h2>
					<p class="mt-4 text-base lg:text-lg leading-relaxed text-neutral-600 font-normal">
						ทุกฟีเจอร์ถูกออกแบบมาเพื่อยกระดับมาตรฐาน สิ่งที่น้อยกว่านี้ไม่คุ้มค่าที่จะสร้าง
					</p>
				</div>

				<!-- Tab Buttons -->
				<div
					role="tablist"
					aria-orientation="vertical"
					class="w-full flex flex-col gap-3"
				>
					{#each features as feature, index}
						<button
							type="button"
							role="tab"
							aria-selected={activeFeatureTab === index}
							tabindex={activeFeatureTab === index ? 0 : -1}
							onclick={() => (activeFeatureTab = index)}
							class="w-full rounded-xl px-5 py-4 flex items-start gap-4 border transition-all duration-300 text-left
								{activeFeatureTab === index
									? 'border-neutral-300 bg-neutral-100 shadow-sm'
									: 'border-transparent hover:bg-neutral-50'}"
						>
							<span class="shrink-0 mt-0.5 text-neutral-700">
								{#if feature.icon === 'spell-check'}
									<SpellCheck size={20} />
								{:else if feature.icon === 'list-tree'}
									<ListTree size={20} />
								{:else if feature.icon === 'wrap-text'}
									<WrapText size={20} />
								{/if}
							</span>
							<div class="flex flex-col">
								<h3 class="text-base text-neutral-900 font-medium mb-1">
									{feature.title}
								</h3>
								<p class="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
							</div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Right Column - Tab Panel -->
			<div class="h-full">
				{#each features as feature, index}
					{#if activeFeatureTab === index}
						<div
							role="tabpanel"
							tabindex="-1"
							class="w-full h-full rounded-2xl overflow-hidden bg-[#BFBFBB]"
						>
							<img
								alt={feature.title}
								loading="lazy"
								width="800"
								height="500"
								class="w-full h-full select-none object-cover object-center"
								src={feature.image}
							/>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
