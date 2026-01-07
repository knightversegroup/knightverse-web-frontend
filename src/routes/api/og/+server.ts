import { Resvg, initWasm } from '@resvg/resvg-wasm';
import satori from 'satori';
import type { RequestHandler } from './$types';

// @ts-expect-error - importing wasm file
import resvgWasm from '@resvg/resvg-wasm/index_bg.wasm?url';

let wasmInitialized = false;

export const GET: RequestHandler = async ({ url, fetch, platform }) => {
	// Initialize WASM if not already done
	if (!wasmInitialized) {
		try {
			const wasmResponse = await fetch(resvgWasm);
			const wasmBuffer = await wasmResponse.arrayBuffer();
			await initWasm(wasmBuffer);
			wasmInitialized = true;
		} catch (e) {
			// WASM might already be initialized
			wasmInitialized = true;
		}
	}

	// Get title parameter
	const title = url.searchParams.get('title') || 'KnightVerse Group';

	// Load font from static assets
	const fontResponse = await fetch('/IBMPlexSansThai-Medium.ttf');
	const fontData = await fontResponse.arrayBuffer();

	// Load logo SVG
	const logoResponse = await fetch('/logo-w.svg');
	const logoSvg = await logoResponse.text();
	const logoBase64 = btoa(logoSvg);
	const logoDataUrl = `data:image/svg+xml;base64,${logoBase64}`;

	// Load background image
	const bgResponse = await fetch('/og_b.png');
	const bgBuffer = await bgResponse.arrayBuffer();
	const bgBase64 = btoa(String.fromCharCode(...new Uint8Array(bgBuffer)));
	const bgDataUrl = `data:image/png;base64,${bgBase64}`;

	// Generate SVG with satori
	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					fontFamily: 'IBM Plex Sans Thai'
				},
				children: [
					{
						type: 'img',
						props: {
							src: bgDataUrl,
							style: {
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								objectFit: 'cover'
							}
						}
					},
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								flexDirection: 'column',
								padding: '64px',
								justifyContent: 'flex-end',
								height: '100%',
								width: '100%',
								position: 'relative'
							},
							children: [
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											flexDirection: 'column',
											gap: '20px'
										},
										children: [
											{
												type: 'img',
												props: {
													src: logoDataUrl,
													width: 370,
													height: 64,
													style: { objectFit: 'contain' }
												}
											},
											{
												type: 'p',
												props: {
													style: {
														fontSize: '48px',
														fontWeight: 500,
														color: 'white',
														lineHeight: 1.3,
														margin: 0
													},
													children: title
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'IBM Plex Sans Thai',
					data: fontData,
					style: 'normal',
					weight: 500
				}
			]
		}
	);

	// Convert SVG to PNG using resvg
	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: 1200
		}
	});

	const pngData = resvg.render();
	const pngBuffer = pngData.asPng();

	return new Response(new Uint8Array(pngBuffer), {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	});
};
