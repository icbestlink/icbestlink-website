<script>
	let missions = [
		`IC-Best Link functions to provide the ICT market the Bestlink towards innovative and state of the art Enterprise
Communications Design, Consultancy and Solutions Deployment.`,
		`IC-Best Link functions to provide the ICT market in the Bestlink towards Customer-Oriented enterprise
Communications Professional and Manage Services`,
		`IC-Best Link functions to provide the ICT market Bestlink towards an economical and flexible commercial
arrangement catered to the demanding and price sensitive Philippine ICT market.`,
		`IC-Best Link functions to provide our staff and manpower the Bestlink towards a clear and achievable career
advancement and fulfillment in the practice of Information and Communications Technology.`,
		`IC-Best Link functions to provide the ICT industry including ourselves the fulfillment in the realization and
deployment of Real-time communications today and beyond.`
	];

	let awards = [
		{ src: '/Avaya Black.png', alt: 'Avaya Black' },
		{ src: '/Avaya Clear.png', alt: 'Avaya Clear' },
		{ src: '/Avaya Red.png', alt: 'Avaya Red' },
		{ src: '/ICBL Decade.png', alt: 'ICBL Decade' },
		{ src: '/MEC Mitel.png', alt: 'MEC Mitel' },
		{ src: '/MEC Siemens 2.png', alt: 'MEC Siemens 2' },
		{ src: '/MEC Siemens PNG.png', alt: 'MEC Siemens' },
		{ src: '/NCEISC.png', alt: 'NCEISC' },
		{ src: '/Vstecs.png', alt: 'Vstecs' }
	];
</script>

<section class="px-4 pb-10 md:pb-20 mx-auto lg:max-w-7xl">
	<div class="text-center mb-12">
		<h2 class="text-4xl font-bold text-[#0a0e30] mb-4">Who We Are?</h2>
		<p class="text-base md:text-lg text-gray-600 lg:px-10">
			IC-Best Link Telecom Corporation is a Filipino owned corporation providing state of the art
			and innovative Information & Communication Technology (ICT) Solutions and services for the
			enterprise market. IC-Best Link was established February 3, 2003. Powered by a workforce of 22
			years’ experience in deploying different kinds of Communications Solutions for various local
			and international partners, IC-Best Link is dedicated and is focused in delivering ICT
			designs, consultancy, commissioning, and managed services in the line of Legacy’s PBX’s, IP
			Converged Platforms, Voice over IP, Messaging, e-CRM applications, Computers and Data/Voice
			networking in the utmost customer-oriented methodologies.
		</p>
	</div>

	<div class="grid md:grid-cols-2 gap-4 md:gap-8 py-4 items-center">
		<div class="text-wrap">
			<h2 class="text-2xl md:text-4xl font-bold mb-4 text-[#0a0e30]">Our Mission</h2>

			<ul class="list-disc list-inside space-y-6 md:space-y-4">
				{#each missions as mission}
					<li class="text-base md:text-xl text-gray-6 00 w-full lg:w-[609px]">
						{mission}
					</li>
				{/each}
			</ul>
			<!-- <p class="text-base md:text-xl text-gray-500 w-full lg:w-[675px]">
        IC-Best Link Telecom Corporation is a Filipino owned corporation
        providing state of the art and innovative Information & Communication
        Technology (ICT) Solutions and services for the enterprise market. IC
        Bestlink was established February 3, 2003. Powered by a workforce of 22
        years’ experience in deploying different kinds of Communications
        Solutions for various local and international partners, IC-Best Link is
        dedicated and is focused in delivering ICT designs, consultancy,
        commissioning, and managed services in the line of Legacy’s PBX’s, IP
        Converged Platforms, Voice over IP, Messaging, e-CRM applications,
        Computers and Data/Voice networking in the utmost customer-oriented
        methodologies.
      </p> -->
		</div>
		<img
			class="order-2 md:order-1"
			src="mission-inline.png"
			alt="mission"
			height="600"
			width="600"
		/>
	</div>

	<div class="grid md:grid-cols-2 gap-4 md:gap-4 pt-4 md:pt-16 py-4 items-center">
		<img class="order-2 md:order-1" src="vision-inline.png" alt="Vision" height="600" width="600" />
		<div class="order-1 md:order-2">
			<h2 class="text-2xl md:text-4xl font-bold mb-4 text-[#0a0e30]">Our Vision</h2>
			<p class="text-base md:text-xl text-gray-600 w-full lg:w-[675px]">
				Our Vision is to be the leader in the Information & Communication, Technology Solutions
				deployment using different kinds of platforms Solutions and Professional Services covering
				Inside and Outside Metro Manila Enterprise Customers/Partners. We envision our solutions,
				services and process to be the leader in Customer advocacy and customer-oriented
				methodologies both in the commercial and technical aspects.
			</p>
		</div>
	</div>

	<!-- <div
    class="my-10 lg:my-20 shadow-[0px_-1px_17px_-2px_rgba(0,_0,_0,_0.45)] py-8 md:py-12 px-12 md:px-20 rounded-3xl mx-auto max-w-5xl"
  >
    <h2 class="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-[#0a0e30]">
      Our Mission
    </h2>
    <ul class="list-disc list-inside space-y-6 md:space-y-8">
      {#each missions as mission}
        <li class="text-[#0a0e30] text:lg md:text-xl">{mission}</li>
      {/each}
    </ul>
  </div> -->

	<div class="py-10 lg:py-20 mt-1 md:mt-4">
		<h2 class="text-3xl md:text-5xl font-bold text-center text-[#0a0e30] md-1 md:mb-4">
			Awards and Recognition
		</h2>
		<ul
			class="grid grid-cols-3 md:grid-cols-4 gap-y-10 md:gap-y-20 justify-items-center items-center py-8 lg:py-20 rounded-3xl shadow-xl"
			style="background-image: url('/awardsbg.png'); background-size: contain;"
		>
			{#each awards as award}
				<li>
					<div
						class="w-[125px] h-[125px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden flex justify-center items-center"
					>
						<img src={award.src} alt={award.alt} width="250" height="250" />
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="px-4 pb-10 md:pb-20 mx-auto lg:max-w-7xl">
	<h3 class="text-2xl md:text-3xl font-bold mb-4 text-[#0a0e30]/95">Our Office Location</h3>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.7234603467076!2d121.00673141531846!3d14.558228189827076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97317e43633%3A0x8d9c5d655eabc5d1!2sCityland%208!5e0!3m2!1sen!2sph!4v1696409023705!5m2!1sen!2sph"
		width="100%"
		height="450"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="google maps location"
	>
	</iframe>
</section>
