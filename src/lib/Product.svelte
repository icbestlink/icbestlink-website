<script>
	let productCategories = [
		{
			category: 'Communication Systems',
			icon: 'hotline.svg',
			excerpt: `Communication systems enable voice and message-based interaction within and
outside the organization. This includes PABX systems for telephony, paging/audiovisual systems for announcements, and emergency hotlines for urgent
communication.`,
			productsSub: [
				{
					label: 'PABX Components',
					icon: 'pabx.svg',
					products: [
						{ src: '/Mitel.png', alt: 'Mitel' },
						{ src: '/Avaya.png', alt: 'Avaya' },
						{ src: '/Grandstream.png', alt: 'Grandstream' },
						{ src: '/Audiocodes.png', alt: 'Audiocodes' },
						{ src: '/Fanvil.png', alt: 'Fanvil' },
						{ src: '/Unify.png', alt: 'Unify' },
						{ src: '/Nec.png', alt: 'Nec' },
						{ src: '/Teltrac.webp', alt: 'Teltrac' },
						{ src: '/Alcatel.png', alt: 'Alcatel' }
					]
				},
				{
					label: 'Paging/Audio-Visual System',
					icon: 'audiovisual.svg',
					products: [
						{ src: '/Bosch.png', alt: 'Bosch' },
						{ src: '/Hochiki.png', alt: 'Hochiki' },
						{ src: '/Honeywell.png', alt: 'Honeywell' },
						{ src: '/Jabra.png', alt: 'Jabra' },
						{ src: '/Kiddie.png', alt: 'Kiddie' },
						{ src: '/Saramonic.png', alt: 'Saramonic' },
						{ src: '/Televic.png', alt: 'Televic' },
						{ src: '/TOA.png', alt: 'TOA' }
					]
				},
				{
					label: 'Emergency Hotline',
					icon: 'hotline.svg',
					products: [{ src: '911.png', alt: '911' }]
				},
				{
					label: 'Nurse Call',
					icon: 'hotline.svg',
					products: [
						{ src: 'AIPHONE.png', alt: 'AIPHONE' },
						{ src: 'FORTH.png', alt: 'FORTH' },
						{ src: 'MEEYI.png', alt: 'MEEYI' },
						{ src: 'TOA.png', alt: 'TOA' }
					]
				},
				{
					label: 'Call Accounting',
					icon: 'hotline.svg',
					products: [
						{ src: 'Teltrac.webp', alt: 'Teltrac' },
						{ src: 'CallTrack.png', alt: 'Call Track' }
					]
				}
			]
		},

		{
			category: 'Networking & IT Infrastructure',
			icon: 'cabling.svg',
			excerpt: `This forms the backbone of digital communication and data management. It includes
structured cabling, network components (such as routers, switches, and firewalls),
servers, storage solutions, and racks that house and support IT equipment. These
elements enable fast, secure, and reliable connectivity across the entire
organization.`,
			productsSub: [
				{
					label: 'PC laptop and Server',
					icon: 'laptop.svg',

					products: [
						{ src: '/Acer.png', alt: 'Acer' },
						{ src: '/Altos.png', alt: 'Altos' },
						{ src: '/Asus.png', alt: 'Asus' },
						{ src: '/Dell.png', alt: 'Dell' },
						{ src: '/HP.png', alt: 'HP' },
						{ src: '/Lenovo.png', alt: 'Lenovo' },
						{ src: '/Logitech.png', alt: 'Logitech' },
						{ src: '/Samsung.png', alt: 'Samsung' }
					]
				},
				{
					label: 'Storage',
					icon: 'storage.svg',

					products: [
						{ src: '/Buffalo.png', alt: 'Buffalo' },
						{ src: '/Infortrend.png', alt: 'Infortrend' },
						{ src: '/Iomega.png', alt: 'Iomega' },
						{ src: '/Kingston.png', alt: 'Kingston' },
						{ src: '/Sandisk.png', alt: 'Sandisk' },
						{ src: '/Seagate.png', alt: 'Seagate' },
						{ src: '/Supermicro.png', alt: 'Supermicro' },
						{ src: '/Western Digital.png', alt: 'Western Digital' }
					]
				},

				{
					label: 'Network Components',
					icon: 'network.svg',
					products: [
						{ src: '/Aruba.png', alt: 'Aruba' },
						{ src: '/Cambium Networks.png', alt: 'Cambium Networks' },
						{ src: '/Cisco.png', alt: 'Cisco' },
						{ src: '/D Link.png', alt: 'D Link' },
						{ src: '/Engenius.png', alt: 'Engenius' },
						{ src: '/Fortinet.png', alt: 'Fortinet' },
						{ src: '/Fujitsu.png', alt: 'Fujitsu' },
						{ src: '/LevelOne.png', alt: 'Level One' },
						{ src: '/Sangfor.png', alt: 'Sangfor' },
						{ src: '/Sendquick.png', alt: 'Sendquick' },
						{ src: '/Sonic Wall.png', alt: 'Sonic Wall' },
						{ src: '/Teltonika.png', alt: 'Teltonika' },
						{ src: '/TP Link.png', alt: 'TP Link' },
						{ src: '/Ubiquiti.png', alt: 'Ubiquiti' }
					]
				},

				{
					label: 'Racks and Cabinets',
					icon: 'racks.svg',

					products: [
						{ src: '/Cable Tray.jpg', alt: 'Cable Tray' },
						{
							src: '/Data Cabinet Wall Mount.png',
							alt: 'Data Cabinet Wall Mount'
						},
						{ src: '/Data Cabinet.jpg', alt: 'Data Cabinet' },
						{
							src: '/Data Rack Open Type Wall Mount.jpg',
							alt: 'Data Rack Open Type Wall Mount'
						},
						{ src: '/Open Bay Rack.jpg', alt: 'Open Bay Rack' },
						{ src: '/Pull Box.jpg', alt: 'Pull Box' },
						{
							src: '/Rack Mounting Components.jpg',
							alt: 'Rack Mounting Components'
						},
						{ src: '/Telephone Cabinet.jpg', alt: 'Telephone Cabinet' }
					]
				},
				{
					label: 'Cabling',
					icon: 'cabling.svg',
					products: [
						{ src: 'Belden.png', alt: 'Belden' },
						{ src: 'Commscope.png', alt: 'Commscope' },
						{ src: 'Fiber Rex.png', alt: 'Fiber Rex' },
						{ src: 'Link Basic.png', alt: 'Link Basic' },
						{ src: 'LS Cable.png', alt: 'LS Cable' },
						{ src: 'Panduit.png', alt: 'Panduit' }
					]
				}
			]
		},

		{
			category: 'Security & Surveillance',
			icon: 'cctv.svg',
			excerpt: `These systems protect your physical environment. CCTV cameras provide real-time
monitoring, while door access controls help restrict entry to sensitive areas.
Together, they enhance safety and help deter unauthorized access.`,
			productsSub: [
				{
					label: 'CCTV',
					icon: 'cctv.svg',
					products: [
						{ src: 'LevelOne.png', alt: 'LevelOne' },
						{ src: 'Hikvision.png', alt: 'Hikvision' },
						{ src: 'Avigilon.png', alt: 'Avigilon' },
						{ src: 'Axis Communication.png', alt: 'Axis Communication' },
						{ src: 'Dahua.png', alt: 'Dahua' },
						{ src: 'Hanhwa Vision.png', alt: 'Hanhwa Vision' },
						{ src: 'Lilin.png', alt: 'Lilin' }
					]
				},
				{
					label: 'Door Security',
					icon: 'door.svg',
					products: [
						{ src: 'Bosch.png', alt: 'Bosch' },
						{ src: 'Dahua.png', alt: 'Dahua' },
						{ src: 'Hikvision.png', alt: 'Hikvision' },
						{ src: 'Zkteco.png', alt: 'Zkteco' }
					]
				}
			]
		},

		{
			category: 'Safety Systems',
			icon: 'fire.svg',
			excerpt: `Safety systems are designed to detect and respond to emergency situations like
fires. Fire alarm and detection systems monitor for smoke or heat and alert
personnel. In some setups, they may also trigger sprinklers or notify emergency
responders automatically.`,
			productsSub: [
				{
					label: 'Fire Alarm and Detection System',
					icon: 'fire.svg',
					products: [
						{ src: 'Bosch.png', alt: 'Bosch' },
						{ src: 'Dahua.png', alt: 'Dahua' },
						{ src: 'Global Fire.png', alt: 'Global Fire' },
						{ src: 'Hochiki.png', alt: 'Hochiki' },
						{ src: 'Honeywell.png', alt: 'Honeywell' },
						{ src: 'Kiddie.png', alt: 'Kiddie' }
					]
				}
			]
		},
		{
			category: 'Peripheral Devices',
			icon: 'printer.svg',
			excerpt: `Peripheral devices are the supporting tools that help staff perform daily tasks. These
include printers, scanners, monitors, and other accessories. While not core
infrastructure, they are essential for productivity, documentation, and workflow
efficiency.`,
			productsSub: [
				{
					label: 'Printer',
					icon: 'printer.svg',

					products: [
						{ src: '/Brother.png', alt: 'Brother' },
						{ src: '/Canon.png', alt: 'Canon' },
						{ src: '/Epson.png', alt: 'Epson' },
						{ src: '/Lexmark.png', alt: 'Lexmark' },
						{ src: '/Printronix.png', alt: 'Printronix' }
					]
				}
			]
		},
		{
			category: 'Software Systems',
			icon: 'software.svg',
			excerpt: `Software systems drive the functionality of all hardware and enable business
operations. This includes operating systems, call center platforms, CRM tools,
workforce management software, and analytics applications. These tools streamline
processes, support customer service, and help monitor performance.`,
			productsSub: [
				{
					label: 'Softwares',
					icon: 'software.svg',

					products: [
						{ src: '/Acserve.png', alt: 'Acserve' },
						{ src: '/Citrix.png', alt: 'Citrix' },
						{ src: '/Darktrace.png', alt: 'Darktrace' },
						{ src: '/Escan.png', alt: 'Escan' },
						{ src: '/Fortinet.png', alt: 'Fortinet' },
						{ src: '/IPGuard.png', alt: 'IPGuard' },
						{ src: '/Microsoft.png', alt: 'Microsoft' },
						{ src: '/NComputing.png', alt: 'NComputing' },
						{ src: '/Sophos.png', alt: 'Sophos' },
						{ src: '/Veeam.png', alt: 'Veeam' },
						{ src: '/Veritas.png', alt: 'Veritas' }
					]
				}
			]
		},
		{
			category: 'Power & Backup Systems',
			icon: 'battery.svg',
			excerpt: `These systems keep your operations running even during power outages or electrical
disturbances. UPS units and batteries provide temporary power and protect
sensitive equipment from surges, helping prevent data loss and system damage`,
			productsSub: [
				{
					label: 'Battery',
					icon: 'battery.svg',
					products: [
						{ src: 'Maxell.png', alt: 'Maxell' },
						{ src: 'Yuasa.png', alt: 'Yuasa' }
					]
				},
				{
					label: 'UPS',
					icon: 'ups.svg',

					products: [
						{ src: '/Accupower.png', alt: 'Accupower' },
						{ src: '/APC.png', alt: 'APC' },
						{
							src: '/Business Partner Enterprise.png',
							alt: 'Business Partner Enterprise'
						},
						{ src: '/Delta.png', alt: 'Delta' },
						{ src: '/Eaton.png', alt: 'Eaton' },
						{ src: '/Socomec.png', alt: 'Socomec' },
						{ src: '/Vertiv.png', alt: 'Vertiv' }
					]
				}
			]
		}
	];

	function getColor(index) {
		const hue = 210 + Math.random() * 60 * index;

		const saturation = 50 + Math.random() * 50 + index;

		const lightness = 60 + Math.random() * 30 + index;

		// Return color in HSL format
		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	}
</script>

<section class="mx-auto lg:max-w-7xl pb-10 px-4 xl:px-0 md:pb-20">
	<div class="text-center mb-12">
		<h2 class="text-4xl font-bold text-[#0a0e30] mb-4">Our Products</h2>
		<p class="text-base md:text-lg text-gray-600 lg:px-10">
			We Offer Comprehensive Solutions from Leading Brands. Our product portfolio spans multiple
			categories, both hardware and software. These includes PABX components, PC/laptops & servers,
			storage solutions, printers, projectors, batteries, network components, paging & audio-visual
			systems, FDAS, emergency hotline systems, cabling, CCTV, door security, UPS, and racks &
			cabinets. We are also capable of supplying and delivering these to your places.
		</p>
	</div>

	<div class="grid gap-8 md:gap-12">
		{#each productCategories as { category, icon, excerpt, productsSub }, index}
			<div
				class="relative grid md:grid-cols-[1fr_2fr] gap-2 lg:gap-4 overflow-hidden shadow-[0px_3px_17px_-2px_rgba(0,_0,_0,_0.5)] rounded-2xl p-6 md:p-8 transition-shadow duration-300"
			>
				<div class="svg-wrapper">
					<svg
						width="650"
						height="650"
						viewBox="0 0 650 650"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="branch-bg-gradientcolor"
					>
						<defs>
							<filter id="blurFilterOne" x="-20" y="-20" width="200" height="200">
								<feGaussianBlur in="SourceGraphic" stdDeviation="50" />
							</filter>
						</defs>
						<circle cx="300" cy="350" r="120" fill={getColor(index)} filter="url(#blurFilterOne)" />

						<circle cx="280" cy="235" r="120" fill={getColor(index)} filter="url(#blurFilterOne)" />
					</svg>
				</div>

				<div class="relative z-99 mb-4">
					<div class="w-16 h-16 bg-[#0a0e30] rounded-xl flex items-center justify-center">
						<img src={icon} alt={category} />
					</div>
					<div class="my-4">
						<h3 class="text-2xl font-bold text-gray-900">{category}</h3>
						<p class="text-gray-600 mr-4 lg:mr-8">{excerpt}</p>
					</div>
				</div>

				<div
					class="relative z-99 grid {productsSub?.length > 1
						? 'lg:grid-cols-2'
						: ''}  gap-3 lg:gap-4"
				>
					{#if productsSub.length > 1}
						<div
							class="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-red-400/35 z-10"
						></div>
					{/if}
					{#each productsSub as { label, products }, i}
						<div class="relative">
							<div class="bg-gray-50/65 py-2 px-4 rounded-lg shadow-lg">
								<h3 class="text-xl font-bold text-[#0a0e30] mb-4 text-center">{label}</h3>
								<div class="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
									{#each products as product}
										<div
											class="min-w-[109px] min-h-[109px] flex items-center justify-center brand-card bg-white/50 shadow-[0px_3px_17px_-2px_rgba(0,_0,_0,_0.25)] rounded-lg p-4 transition-all duration-200 group"
										>
											<img
												class="w-[150px] h-auto"
												src={product.src}
												alt={product.alt}
												width="350"
												height="350"
											/>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.svg-wrapper {
		position: absolute;
		bottom: -275px;
		left: -10%;
		opacity: 0.5;
		scale: 1.175;
		animation: rotate_move 35s infinite;
		transition: opacity 100ms ease-in-out;
	}

	@keyframes rotate_move {
		50% {
			transform: rotate(180deg);
		}
	}
</style>
