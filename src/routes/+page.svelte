<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import SolutionsSlider from '$lib/components/sections/SolutionsSlider.svelte';
	import FeaturesSection from '$lib/components/sections/FeaturesSection.svelte';
	import PressReleaseSlider from '$lib/components/sections/PressReleaseSlider.svelte';
</script>

<svelte:head>
	<title>KnightVerse Group – บริษัทพัฒนาซอฟต์แวร์ โซลูชั่นดิจิทัลสำหรับธุรกิจ</title>
	<meta
		name="description"
		content="บริษัท ไนท์ เวิร์ส กรุ๊ป จำกัด ผู้เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์ระบบ ซอฟต์แวร์จัดการฐานข้อมูล โปรแกรมประยุกต์เพิ่มประสิทธิภาพธุรกิจ พร้อมให้บริการ Digital Solutions ครบวงจร"
	/>
	<meta
		name="keywords"
		content="พัฒนาซอฟต์แวร์, software development, ซอฟต์แวร์ระบบ, ซอฟต์แวร์จัดการฐานข้อมูล, โปรแกรมสำเร็จรูป, digital solutions, บริษัทพัฒนาซอฟต์แวร์, KnightVerse Group, ไนท์เวิร์ส"
	/>
	<link rel="canonical" href="https://knightversegroup.com/" />

	<!-- OpenGraph -->
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="KnightVerse Group – บริษัทพัฒนาซอฟต์แวร์ โซลูชั่นดิจิทัลสำหรับธุรกิจ"
	/>
	<meta
		property="og:description"
		content="บริษัท ไนท์ เวิร์ส กรุ๊ป จำกัด ผู้เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์ระบบ ซอฟต์แวร์จัดการฐานข้อมูล โปรแกรมประยุกต์เพิ่มประสิทธิภาพธุรกิจ"
	/>
	<meta property="og:url" content="https://knightversegroup.com/" />
	<meta property="og:site_name" content="KnightVerse Group" />
	<meta
		property="og:image"
		content="https://knightversegroup.com/api/og?title=KnightVerse%20Group"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="th_TH" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="KnightVerse Group – บริษัทพัฒนาซอฟต์แวร์ โซลูชั่นดิจิทัลสำหรับธุรกิจ"
	/>
	<meta
		name="twitter:description"
		content="บริษัท ไนท์ เวิร์ส กรุ๊ป จำกัด ผู้เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์ระบบ ซอฟต์แวร์จัดการฐานข้อมูล โปรแกรมประยุกต์เพิ่มประสิทธิภาพธุรกิจ"
	/>
	<meta
		name="twitter:image"
		content="https://knightversegroup.com/api/og?title=KnightVerse%20Group"
	/>
</svelte:head>

<HeroSection />
<SolutionsSlider />
<FeaturesSection />
<PressReleaseSlider />
