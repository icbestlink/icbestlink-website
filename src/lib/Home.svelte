<script>
	import { onMount, onDestroy } from 'svelte';
	import Button from './Button.svelte';

	let clientsLogo = [
		{ src: '/APC.png', alt: 'APC' },
		{ src: '/Delta.png', alt: 'Delta' },
		{ src: '/Socomec.png', alt: 'Socomec' },
		{ src: '/Seagate.png', alt: 'Seagate' },
		{ src: '/Acer.png', alt: 'Acer' },
		{ src: '/Dell.png', alt: 'Dell' },
		{ src: '/Asus.png', alt: 'Asus' },
		{ src: '/Cisco.png', alt: 'Cisco' },
		{ src: '/LevelOne.png', alt: 'Level One' },
		{ src: '/TP Link.png', alt: 'TP Link' },
		{ src: '/Ubiquiti.png', alt: 'Ubiquiti' },
		{ src: '/Fortinet.png', alt: 'Fortinet' },
		{ src: '/Commscope.png', alt: 'Commscope' },
		{ src: '/911.png', alt: '911' },
		{ src: '/Panduit.png', alt: 'Panduit' },
		{ src: '/Belden.png', alt: 'Belden' },
		{ src: '/Avaya.png', alt: 'Avaya' },
		{ src: '/Unify.png', alt: 'Unify' },
		{ src: '/Mitel.png', alt: 'Mitel' },
		{ src: '/Grandstream.png', alt: 'Grandstream' },
		{ src: '/Hikvision.png', alt: 'Hikvision' },
		{ src: '/Honeywell.png', alt: 'Honeywell' },
		{ src: '/TOA.png', alt: 'TOA' },
		{ src: '/Bosch.png', alt: 'Bosch' },
		{ src: '/Canon.png', alt: 'Canon' },
		{ src: '/Dahua.png', alt: 'Dahua' },
		{ src: '/Epson.png', alt: 'Epson' },
		{ src: '/Brother.png', alt: 'Brother' },
		{ src: '/Microsoft.png', alt: 'Microsoft' },
		{ src: '/Kiddie.png', alt: 'Kiddie' },
		{ src: '/Teltrac.webp', alt: 'Teltrac' },
		{ src: '/Sophos.png', alt: 'Sophos' },
		{ src: '/NComputing.png', alt: 'Ncomputing' }
	];

	let icblClient = [
		{
			svg: `<svg width="34px" height="34px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">

<g fill="#fff">

<path d="M7.25 1.25C7.25.56 7.81 0 8.5 0h1.75a.75.75 0 010 1.5h-1.5v1.056a5.002 5.002 0 014.242 4.653.75.75 0 11-1.498.086 3.5 3.5 0 00-6.988 0 .75.75 0 11-1.498-.086A5.002 5.002 0 017.25 2.556V1.25z"/>

<path fill-rule="evenodd" d="M1 9.75A.75.75 0 011.75 9h12.5a.75.75 0 010 1.5H13v4h2.25a.75.75 0 010 1.5H.75a.75.75 0 010-1.5H3v-4H1.75A.75.75 0 011 9.75zm3.5 4.75h2.75v-4H4.5v4zm4.25 0h2.75v-4H8.75v4z" clip-rule="evenodd"/>

</g>

</svg>`,
			title: 'Government'
		},
		{
			svg: `<svg 
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#fff"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z" />
  <line x1="16" y1="2" x2="16" y2="4" />
  <line x1="8" y1="2" x2="8" y2="4" />
  <circle cx="12" cy="11" r="3" />
  <path d="M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5" />
</svg>`,
			title: 'Contact Center'
		},
		{
			svg: `
<svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.948 1.25H13.052C13.9505 1.24997 14.6997 1.24995 15.2945 1.32991C15.9223 1.41432 16.4891 1.59999 16.9445 2.05546C17.4 2.51093 17.5857 3.07773 17.6701 3.70552C17.6928 3.87459 17.7091 4.05613 17.7207 4.25003C18.3101 4.25037 18.8084 4.25421 19.219 4.29599C19.6925 4.34415 20.1318 4.44886 20.5278 4.71346C20.8281 4.9141 21.0859 5.17191 21.2865 5.47218C21.5511 5.86818 21.6559 6.30755 21.704 6.78102C21.75 7.23336 21.75 7.79209 21.75 8.46168V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H2.25L2.25 8.46166C2.24998 7.79208 2.24997 7.23335 2.29598 6.78102C2.34415 6.30755 2.44886 5.86818 2.71346 5.47218C2.91409 5.17191 3.17191 4.9141 3.47218 4.71346C3.86818 4.44886 4.30755 4.34415 4.78102 4.29599C5.19165 4.25421 5.68995 4.25037 6.27927 4.25003C6.29091 4.05613 6.30718 3.87459 6.32991 3.70552C6.41432 3.07773 6.59999 2.51093 7.05546 2.05546C7.51093 1.59999 8.07773 1.41432 8.70552 1.32991C9.3003 1.24995 10.0495 1.24997 10.948 1.25ZM6.25003 5.75011C5.66742 5.75075 5.25586 5.75542 4.93283 5.78828C4.57796 5.82438 4.41399 5.8882 4.30554 5.96067C4.16905 6.05186 4.05186 6.16905 3.96066 6.30554C3.8882 6.41399 3.82438 6.57796 3.78828 6.93283C3.75091 7.30023 3.75 7.78216 3.75 8.5V21.25H6.25V14.75H5.5C5.08579 14.75 4.75 14.4142 4.75 14C4.75 13.5858 5.08579 13.25 5.5 13.25H6.25V11.75H5.5C5.08579 11.75 4.75 11.4142 4.75 11C4.75 10.5858 5.08579 10.25 5.5 10.25H6.25V8.75H5.5C5.08579 8.75 4.75 8.41422 4.75 8C4.75 7.58579 5.08579 7.25 5.5 7.25H6.25L6.25 5.94801C6.25 5.88122 6.24999 5.81525 6.25003 5.75011ZM7.75 21.25H11.25V19C11.25 18.5858 11.5858 18.25 12 18.25C12.4142 18.25 12.75 18.5858 12.75 19V21.25H16.25V6C16.25 5.03599 16.2484 4.38843 16.1835 3.90539C16.1214 3.44393 16.0142 3.24644 15.8839 3.11612C15.7536 2.9858 15.5561 2.87858 15.0946 2.81654C14.6116 2.7516 13.964 2.75 13 2.75H11C10.036 2.75 9.38843 2.7516 8.90539 2.81654C8.44393 2.87858 8.24643 2.9858 8.11612 3.11612C7.9858 3.24644 7.87858 3.44393 7.81654 3.90539C7.75159 4.38843 7.75 5.03599 7.75 6V21.25ZM17.75 8.75H18.5C18.9142 8.75 19.25 8.41422 19.25 8C19.25 7.58579 18.9142 7.25 18.5 7.25H17.75L17.75 5.94801C17.75 5.88122 17.75 5.81525 17.75 5.75011C18.3326 5.75075 18.7441 5.75542 19.0672 5.78828C19.422 5.82438 19.586 5.8882 19.6945 5.96067C19.8309 6.05186 19.9481 6.16905 20.0393 6.30554C20.1118 6.41399 20.1756 6.57796 20.2117 6.93283C20.2491 7.30023 20.25 7.78216 20.25 8.5V21.25H17.75V14.75H18.5C18.9142 14.75 19.25 14.4142 19.25 14C19.25 13.5858 18.9142 13.25 18.5 13.25H17.75V11.75H18.5C18.9142 11.75 19.25 11.4142 19.25 11C19.25 10.5858 18.9142 10.25 18.5 10.25H17.75V8.75ZM12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V6.25H14C14.4142 6.25 14.75 6.58579 14.75 7C14.75 7.41422 14.4142 7.75 14 7.75H12.75V9C12.75 9.41422 12.4142 9.75 12 9.75C11.5858 9.75 11.25 9.41422 11.25 9V7.75H10C9.58579 7.75 9.25 7.41422 9.25 7C9.25 6.58579 9.58579 6.25 10 6.25H11.25V5C11.25 4.58579 11.5858 4.25 12 4.25ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H14C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15Z" fill="#fff"/>
</svg>`,
			title: 'Healthcare'
		},
		{
			svg: `<svg height="34px" width="34px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 304.229 304.229" xml:space="preserve">
<g>
	<path style="fill:#fff;" d="M152.114,0C68.244,0,0.011,68.244,0.011,152.114s68.233,152.114,152.103,152.114
		c83.865,0,152.103-68.244,152.103-152.114S235.979,0,152.114,0z M188.697,179.456h-17.753c1.556-25.602,9.91-46.624,17.753-61.113
		V179.456z M205.646,263.659V90.647c0-3.497-2.148-6.63-5.406-7.892c-3.253-1.273-6.951-0.413-9.317,2.165
		c-1.518,1.659-37.181,41.282-37.181,103.01c0,4.683,3.796,8.469,8.474,8.469h26.483v74.064c-11.569,3.579-23.85,5.526-36.583,5.526
		c-8.534,0-16.872-0.87-24.922-2.518l-0.615-112.616l21.8-17.106c2.045-1.605,3.242-4.068,3.242-6.674V90.642
		c0-4.683-3.796-8.479-8.474-8.479c-4.678,0-8.474,3.791-8.474,8.479v42.31l-8.208,6.44l-0.267-48.805
		c-0.022-4.65-3.813-8.425-8.474-8.425c-0.016,0-0.027,0-0.044,0c-4.678,0.022-8.452,3.845-8.431,8.528l0.272,49.109l-8.746-6.853
		v-42.31c0-4.683-3.796-8.479-8.474-8.479c-4.678,0-8.474,3.791-8.474,8.479v46.433c0,2.605,1.197,5.069,3.247,6.674l22.561,17.699
		l0.582,107.084c-47.722-17.22-81.988-62.838-81.988-116.418c0-68.331,55.571-123.886,123.891-123.886
		s123.886,55.56,123.886,123.891C276.005,201.234,247.189,243.643,205.646,263.659z"/>
</g>
</svg>`,
			title: 'Hospitality'
		},

		{
			svg: `<svg height="34px" width="34px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#fff;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>
<polygon class="st0" points="16,4 1,12 16,20 31,12 "/>
<path class="st0" d="M7,15.2V22c0,2.2,4,5,9,5c5,0,9-2.8,9-5v-6.8"/>
<line class="st0" x1="31" y1="12" x2="31" y2="25"/>
</svg>`,
			title: 'Education'
		},
		{
			svg: `<svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22V12C3 10.1144 3 9.17157 3.58579 8.58579C4.17157 8 5.11438 8 7 8C8.88562 8 9.82843 8 10.4142 8.58579C11 9.17157 11 10.1144 11 12" stroke="#fff" stroke-width="1.5"/>
<path d="M17 22V16C17 14.1144 17 13.1716 16.4142 12.5858C15.8284 12 14.8856 12 13 12H11C9.11438 12 8.17157 12 7.58579 12.5858C7 13.1716 7 14.1144 7 16V22" stroke="#fff" stroke-width="1.5"/>
<path d="M21 21.9999V7.77195C21 6.4311 21 5.76068 20.6439 5.24676C20.2877 4.73283 19.66 4.49743 18.4045 4.02663C15.9492 3.10591 14.7216 2.64555 13.8608 3.2421C13 3.83864 13 5.14974 13 7.77195V11.9999" stroke="#fff" stroke-width="1.5"/>
<path d="M4 8V6.5C4 5.55719 4 5.08579 4.29289 4.79289C4.58579 4.5 5.05719 4.5 6 4.5H8C8.94281 4.5 9.41421 4.5 9.70711 4.79289C10 5.08579 10 5.55719 10 6.5V8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 4V2" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M22 22L2 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10 15H14" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10 18H14" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,
			title: 'Financial'
		},
		{
			svg: `<svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" stroke-width="1.25" clip-rule="evenodd" d="M3.02172 1.79241C3.11977 1.33042 3.52766 1 3.99994 1H7.49994C10.8167 1 13.9504 2.15662 16.5142 4.05499L16.8139 3.77241C17.2074 3.40139 17.8246 3.41046 18.207 3.79289L20.207 5.79289C20.5895 6.17532 20.5986 6.79251 20.2275 7.18601L19.945 7.48571C21.8433 10.0496 22.9999 13.1833 22.9999 16.5V20C22.9999 20.4723 22.6695 20.8802 22.2075 20.9782C21.7455 21.0763 21.2779 20.8377 21.0861 20.4061C19.5548 16.9607 17.8884 14.1436 15.9191 11.7594L5.78873 22.5551C4.82264 23.5847 3.19624 23.6105 2.19791 22.6122L1.38775 21.802C0.389428 20.8037 0.415275 19.1773 1.44482 18.2112L12.2405 8.08084C9.85633 6.11151 7.03927 4.44513 3.5938 2.91381C3.16223 2.722 2.92368 2.2544 3.02172 1.79241ZM13.7415 9.41504L2.81338 19.6696C2.60747 19.8629 2.6023 20.1881 2.80197 20.3878L3.61213 21.198C3.81179 21.3976 4.13707 21.3925 4.33029 21.1866L14.5849 10.2585C14.3099 9.97106 14.0289 9.69005 13.7415 9.41504ZM8.31869 3.02736C10.6049 4.30007 12.6125 5.70113 14.4033 7.30303C15.2115 8.026 15.9739 8.78848 16.6969 9.59669C18.2988 11.3875 19.6999 13.3951 20.9726 15.6813C20.7848 12.8712 19.6408 10.2169 17.8574 8.06282C17.2794 7.36462 16.6353 6.72057 15.9371 6.14252C13.783 4.35913 11.1287 3.21514 8.31869 3.02736Z" fill="#fff"/>
</svg>`,
			title: 'Mining'
		},
		{
			svg: `<svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C8.89543 1 8 1.89543 8 3V6H6C4.89543 6 4 6.89543 4 8V13C4 13.0335 4.00164 13.0666 4.00486 13.0993C3.72437 13.0809 3.43557 13.0509 3.13755 13.0095C2.78898 12.9611 2.44062 13.0995 2.22027 13.3739C1.99992 13.6483 1.94003 14.0183 2.06256 14.3482L4.53315 20.9998L4.49998 21C3.45179 21 2.99998 20.3556 2.99998 20C2.99998 19.4477 2.55227 19 1.99998 19C1.4477 19 0.999985 19.4477 0.999985 20C0.999985 21.8536 2.78675 23 4.49998 23C5.40393 23 6.32835 22.6808 6.99999 22.1071C7.67162 22.6808 8.59604 23 9.49998 23C10.4039 23 11.3283 22.6808 12 22.1071C12.6716 22.6808 13.596 23 14.5 23C15.4039 23 16.3283 22.6808 17 22.1071C17.6716 22.6808 18.596 23 19.5 23C21.2132 23 23 21.8536 23 20C23 19.4477 22.5523 19 22 19C21.4477 19 21 19.4477 21 20C21 20.3556 20.5482 21 19.5 21L19.4668 20.9998L21.9374 14.3482C22.0599 14.0183 22 13.6483 21.7797 13.3739C21.5594 13.0995 21.211 12.9611 20.8624 13.0095C20.5644 13.0509 20.2756 13.0809 19.9951 13.0993C19.9984 13.0666 20 13.0335 20 13V8C20 6.89543 19.1046 6 18 6H16V3C16 1.89543 15.1046 1 14 1H10ZM14 6V3H10V6H14ZM9 8H6V13L5.99997 13.0079C6.50436 12.9192 6.98319 12.7776 7.44451 12.5804C8.70387 12.0423 9.92703 11.05 11.2082 9.3892C11.3975 9.14376 11.69 9 12 9C12.31 9 12.6024 9.14376 12.7918 9.3892C14.0729 11.05 15.2961 12.0423 16.5555 12.5804C17.0168 12.7776 17.4956 12.9192 18 13.0079L18 13V8H15H9ZM17.8807 19.526L19.5174 15.1195C18.2039 15.1386 16.9623 14.9293 15.7695 14.4196C14.4111 13.839 13.1782 12.8954 12 11.5693C10.8218 12.8954 9.5889 13.839 8.23046 14.4196C7.03765 14.9293 5.79609 15.1386 4.48254 15.1195L6.11925 19.526C6.28815 19.2128 6.61922 19 6.99998 19C7.55227 19 7.99998 19.4477 7.99998 20C7.99998 20.3556 8.45179 21 9.49998 21C10.5482 21 11 20.3556 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20C13 20.3556 13.4518 21 14.5 21C15.5482 21 16 20.3556 16 20C16 19.4477 16.4477 19 17 19C17.3808 19 17.7118 19.2128 17.8807 19.526Z" fill="#fff"/>
</svg>`,
			title: 'Maritime'
		},
		{
			svg: `<svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11.6211V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V11.6211M7.5 9.75C7.5 10.9926 6.49264 12 5.25 12C4.09397 12 3.14157 11.1282 3.01442 10.0062C2.99524 9.83688 3.02176 9.66657 3.06477 9.50173L4.10996 5.49516C4.3397 4.6145 5.13506 4 6.04519 4H17.9548C18.8649 4 19.6603 4.6145 19.89 5.49516L20.9352 9.50173C20.9782 9.66657 21.0048 9.83688 20.9856 10.0062C20.8584 11.1282 19.906 12 18.75 12C17.5074 12 16.5 10.9926 16.5 9.75M7.5 9.75C7.5 10.9926 8.50736 12 9.75 12C10.9926 12 12 10.9926 12 9.75M7.5 9.75L8 4M12 9.75C12 10.9926 13.0074 12 14.25 12C15.4926 12 16.5 10.9926 16.5 9.75M12 9.75V4M16.5 9.75L16 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
			title: "SME's"
		}
	];

	let news = [
		{
			src: 'hiring-poster-icbl1.png',
			title: 'Delivering More Than Messages — We Deliver Trust.',
			excerpt: ''
		},
		{
			src: 'hiring-poster-icbl2.png',
			title: 'Keep the World Talking — One Connection at a Time.',
			excerpt: ''
		},
		{
			src: 'hiring-poster-icbl3.png',
			title: 'Wire the World. Build the Backbone of Connectivity.',
			excerpt: ''
		}
	];

	let container = $state();
	let track = $state();
	let speed = $state(60);
	let pos = $state(0);
	let start = $state(null);
	let rafId;
	let trackWidth = $state(0);

	function animate(timestamp) {
		if (!start) start = timestamp;

		const elapsed = timestamp - start;
		pos = -(elapsed / 1000) * speed;

		if (Math.abs(pos) >= trackWidth) {
			start = timestamp;
			pos = 0;
		}

		container.style.transform = `translateX(${pos}px)`;
		rafId = requestAnimationFrame(animate);
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			trackWidth = track.getBoundingClientRect().width;
			container.style.width = `${trackWidth}px`;
			rafId = requestAnimationFrame(animate);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			cancelAnimationFrame(rafId);
			if (container) container.style.transform = '';
		}
	});

	let showModal = $state(false);
</script>

<!-- Moving banner -->
<section class="pt-8 p-0 relative flex gap-4 items-center md:pt-12 md:p-12 md:pb-8">
	<div class="wrapper">
		<div class="marquee">
			<div bind:this={container} class="marquee-container">
				<div bind:this={track} class="marquee-track">
					{#each clientsLogo as { src, alt }}
						<div class="marquee-item">
							<img class="block max-w-full object-cover" {src} {alt} />
						</div>
					{/each}
				</div>
				<!-- duplicate for looping effect -->
				<div class="marquee-track" aria-hidden="true">
					{#each clientsLogo as { src, alt }}
						<div class="marquee-item">
							<img class="block max-w-full object-cover" {src} {alt} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ICBL client -->
<section class="py-4 px-4 items-center md:px-12 max-w-7xl mx-auto pb-8">
	<div class="text-left md:text-center mb-12 w-full">
		<div class="">
			<h2 class="text-base font-bold my-2">ICBL CLIENTS</h2>
			<h3 class="text-xl md:text-2xl font-bold text-[#0a0e30]">
				Our unwavering commitment to excellence and deep knowledge of the unique needs of Philippine
				businesses positions IC-Best Link the top choice for organizations seeking to unlock
				seamless and innovative ICT deployment solutions.
			</h3>
			<p class="text-base md:text-lg mt-2 font-medium text-gray-600">
				Governed by our proven delivery methodology and deep local expertise, we facilitate
				reliable, scalable and customer—centric telecommunications solutions across both public and
				corporate sectors.
			</p>
		</div>
	</div>

	<ul class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
		{#each icblClient as { title, excerpt, svg }}
			<li
				class="bg-white md:flex gap-4 md:gap-8 py-4 md:py-6 px-8 rounded-2xl shadow-[0px_3px_17px_-2px_rgba(0,_0,_0,_0.35)]"
			>
				<div class="inline-block bg-[#0a0e30] rounded-full p-4">
					{@html svg}
				</div>
				<h3 class="text-[#0a0e30] text-lg md:text-xl font-bold mt-2 md:mt-4">
					{title}
				</h3>
			</li>
		{/each}
	</ul>
</section>

<!-- Our Services -->
<section class="py-4 px-4 md:py-8 md:px-12 max-w-7xl mx-auto">
	<div class="grid md:grid-cols-2 items-center justify-center gap-8 lg:gap-4">
		<img
			src="/home-services.png"
			class="order-2 md:order-1"
			alt="Services"
			width="500"
			height="500"
		/>
		<div class="text-left order-1 md:order-2">
			<h2 class="text-2xl md:text-4xl font-bold text-[#0a0e30]">Our Services</h2>
			<p class="text-base font-medium my-4 text-gray-600">
				IC-BEST LINK delivers a full-featured suite of telecommunications, network infrastructure,
				security, and system services—completely tailored and backed by professional standards,
				testing, and ongoing support, ensuring that client organizations enjoy stable, secure,
				scalable operations.
			</p>
			<a
				href="/services"
				class="inline-block bg-[#0a0e30] text-white px-6 py-2 rounded-full cursor-pointer font-semibold hover:bg-transparent hover:text-[#0a0e30] border border-[#0a0e30] transition-colors duration-300"
				>See our Services</a
			>
		</div>
	</div>
</section>

<!-- Our Products -->
<section class="py-4 px-4 md:py-8 md:px-12 max-w-7xl mx-auto">
	<div class="grid md:grid-cols-2 items-center justify-center gap-8 lg:gap-4">
		<div class="text-left">
			<h2 class="text-2xl md:text-4xl font-bold text-[#0a0e30]">Our Product</h2>
			<p class="text-base font-medium my-4 text-gray-600">
				We bridges cutting-edge technology supply and full-service ICT infrastructure
				solutions—spanning communication systems, computing, networking, security, auxiliary and
				audio-visual. With decades of experience and a customer-first approach, we are equipped to
				deliver robust, customized, and scalable solutions tailored to each organization’s evolving
				needs
			</p>
			<a
				href="/product"
				class="inline-block bg-[#0a0e30] text-white px-6 py-2 rounded-full cursor-pointer font-semibold hover:bg-transparent hover:text-[#0a0e30] border border-[#0a0e30] transition-colors duration-300"
				>See our Products</a
			>
		</div>
		<img src="/home-product.png" class="justify-self-end" alt="Products" width="500" height="500" />
	</div>
</section>

<!--news and update -->
<section class="py-8 pb-16 px-4 md:pt-16 md:px-12 grid gap-4 md:gap-8 max-w-7xl mx-auto">
	<div class="text-left md:text-center w-full">
		<div class="clients-text-wrapper">
			<h2 class="text-2xl md:text-3xl font-bold my-2 text-[#0a0e30]">NEWS & UPDATES</h2>
			<p class="text-lg mt-2 font-medium text-gray-600">
				Stay tuned for the up-to-date ICBL updates, covering insights, products, services, projects,
				and company events.
			</p>
		</div>
	</div>

	<ul class="grid md:grid-cols-3 gap-4">
		{#each news as n}
			<li class="bg-white rounded-2xl shadow-xl/50 overflow-hidden">
				<div>
					<button class="p-0 m-0 outline-none" onclick={() => (showModal = true)}>
						<img
							class="block w-full object-cover w-full"
							src={n.src}
							alt={n.title}
							width="350"
							height="350"
						/>
					</button>
				</div>
				<div class="p-4">
					<h3 class="text-lg text-[#0a0e30]">{n.title}</h3>
					{#if n.excerpt}
						<p class="text-base mt-1">{n.excerpt}</p>
					{/if}
				</div>
			</li>
			{#if showModal}
				<div
					role="button"
					tabindex="0"
					class="fixed inset-0 z-50 bg-black/50 bg-opacity-70 flex items-center justify-center px-4"
					onclick={() => (showModal = false)}
					onkeypress={() => {}}
				>
					<div class="max-w-3xl max-h-[90vh] overflow-auto">
						<img src={n.src} alt={n.title} class="rounded-xl w-full h-auto" />
					</div>
				</div>
			{/if}
		{/each}
	</ul>
</section>

<style>
	.wrapper {
		display: grid;
		place-content: center;
		height: 100%;
	}

	.marquee {
		overflow: hidden;
		position: relative;
		mask-image: linear-gradient(
			var(--mask-direction, to right),
			hsl(0 0% 0% / 0),
			hsl(0 0% 0% / 1) 10%,
			hsl(0 0% 0% / 1) 90%,
			hsl(0 0% 0% / 0)
		);
	}

	.marquee-container {
		display: flex;
		width: 100%;
	}

	.marquee-track {
		display: flex;
	}

	@supports (-webkit-touch-callout: none) {
		.marquee-container {
			transform: translate3d(0, 0, 0) scale(1);
			perspective: 1px;
		}
	}

	.marquee-item {
		display: flex;
		align-items: center;
		justify-content: center;

		flex-shrink: 0;

		width: 160px;
		margin-inline-end: 3rem;
	}
</style>
