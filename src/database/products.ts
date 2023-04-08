export type Product = {
	imgUrl: string;
	name: string;
	hint: string;
	desc: string;
	altText?: string;
};

export type ProductsArray = { [productID: string]: Product };

const PRODUCTS: ProductsArray = {
	'1': {
		imgUrl: 'products-change-controller.png',
		name: 'MPPT Controller Set',
		hint: `Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from
					small off-grid systems to large commercial installations. It is backed by a warranty for
					your peace of mind, so you can trust that you are getting the best quality product on the
					market. Contact us today to learn more about our Solar MPPT Charge Controller and how itcan benefit your solar system.`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Solar MPPT Charge Controller</h2>
				<p class="text-lg leading-7 mb-6">
					Get the most out of your solar panels with our Solar MPPT Charge Controller. With its
					advanced Maximum Power Point Tracking (MPPT) technology, it maximizes the energy harvested
					from your solar panels, ensuring optimal performance and efficiency.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">Multiple charging modes to fit your specific needs</li>
					<li class="text-lg leading-7">
						Intelligent protection features to prevent overcharging, overheating and more
					</li>
					<li class="text-lg leading-7">Easy to install and use, with a user-friendly interface</li>
					<li class="text-lg leading-7">
						Durable and reliable, built to withstand harsh weather conditions
					</li>
				</ul>
				<p class="text-lg leading-7">
					Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from
					small off-grid systems to large commercial installations. It is backed by a warranty for
					your peace of mind, so you can trust that you are getting the best quality product on the
					market. Contact us today to learn more about our Solar MPPT Charge Controller and how it
					can benefit your solar system.
				</p>
			</div>`
	},
	'2': {
		imgUrl: 'products-surge-switch.png',
		name: 'Surge Switches',
		hint: `These Switches are built to withstand the toughest conditions, so you can trust that they will provide dependable surge protection when you need it most. With a range of models to choose from, we can help you find the right Surge Switch for your specific needs. Contact us today to learn more about our Surge Switches and how they can protect your electrical equipment from power surges.
`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Surge Switches</h2>
				<p class="text-lg leading-7 mb-6">
					Protect your electrical equipment from damaging power surges with our Surge Switches. Designed to safeguard your devices against voltage spikes and fluctuations, our Surge Switches offer reliable and effective surge protection for your home or business.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">Advanced surge protection technology to safeguard your devices</li>
					<li class="text-lg leading-7">Durable and long-lasting construction for reliable performance</li>
					<li class="text-lg leading-7">Easy to install and use, with a user-friendly interface</li>
					<li class="text-lg leading-7">Suitable for a variety of electrical equipment, from computers to appliances</li>
				</ul>
				<p class="text-lg leading-7">
					Our Surge Switches are built to withstand the toughest conditions, so you can trust that they will provide dependable surge protection when you need it most. With a range of models to choose from, we can help you find the right Surge Switch for your specific needs. Contact us today to learn more about our Surge Switches and how they can protect your electrical equipment from power surges.
				</p>
			</div>

		`
	},
	'3': {
		imgUrl: 'products-off-grid.png',
		name: 'Off Grid Products',
		hint: `Our Off-Grid Products are designed to provide you with reliable and sustainable power, no matter where you are. From solar panels to batteries and charge controllers, we have everything you need to power your off-grid lifestyle or backup power needs. With our expert guidance and support, we can help you choose the right products for your specific needs and budget. Contact us today to learn more about our Off-Grid Products and how they can help you take control of your energy needs.
`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Off-Grid Products</h2>
				<p class="text-lg leading-7 mb-6">
					Take control of your energy needs with our Off-Grid Products. Whether you're living off the grid or looking for a reliable backup power source, our products provide a sustainable and cost-effective solution. With our Off-Grid Products, you can enjoy the freedom of generating your own electricity and reducing your carbon footprint.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">A wide range of solar panels, batteries, and charge controllers</li>
					<li class="text-lg leading-7">Quality products from top manufacturers for reliable performance</li>
					<li class="text-lg leading-7">Expert guidance and support to help you choose the right products for your needs</li>
					<li class="text-lg leading-7">Affordable prices and financing options to fit any budget</li>
				</ul>
				<p class="text-lg leading-7">
					Our Off-Grid Products are designed to provide you with reliable and sustainable power, no matter where you are. From solar panels to batteries and charge controllers, we have everything you need to power your off-grid lifestyle or backup power needs. With our expert guidance and support, we can help you choose the right products for your specific needs and budget. Contact us today to learn more about our Off-Grid Products and how they can help you take control of your energy needs.
				</p>
			</div>

		`
	},
	'4': {
		imgUrl: 'products-epever-charge-controller.png',
		name: 'PWM Controllers',
		hint: `With user-friendly interfaces and intuitive settings, our PWM controllers are easy to install and operate. Choose from a range of models suitable for various system sizes and requirements. Trust our PWM charge controllers to provide consistent and dependable performance for all your off-grid solar applications.
`,
		desc: `
			<div class="bg-white rounded-lg shadow-lg p-6">
  <h3 class="text-2xl font-bold text-gray-900 mb-4">PWM Charge Controllers</h3>
  <p class="text-gray-700 leading-relaxed mb-4">
    Ensure efficient and reliable charging of your off-grid solar system with our high-quality PWM charge controllers. Equipped with advanced pulse width modulation technology, these controllers maximize power conversion and extend battery life.
  </p>
  <p class="text-gray-700 leading-relaxed mb-4">
    With user-friendly interfaces and intuitive settings, our PWM controllers are easy to install and operate. Choose from a range of models suitable for various system sizes and requirements. Trust our PWM charge controllers to provide consistent and dependable performance for all your off-grid solar applications.
  </p>
</div>

		`
	},
	'5': {
		imgUrl: 'products-schneider-contactor.png',
		name: 'Contactor Switches',
		hint: `These high-quality contactor switches are designed to provide reliable switching for your electrical circuits. With durable construction and superior performance, these switches are suitable for a wide range of industrial and commercial applications.
`,
		desc: `
			<div class="bg-white rounded-lg shadow-lg p-6">
			<h3 class="text-2xl font-bold text-gray-900 mb-4">Contactor Switches</h3>
			<p class="text-gray-700 leading-relaxed mb-4">
				Our high-quality contactor switches are designed to provide reliable switching for your electrical circuits. With durable construction and superior performance, these switches are suitable for a wide range of industrial and commercial applications.
			</p>
			<p class="text-gray-700 leading-relaxed mb-4">
				Our contactor switches are available in a variety of sizes and configurations to meet your specific needs. Whether you need a single-pole or multi-pole switch, we have the right solution for you. Trust our contactor switches to deliver efficient and dependable switching for your electrical systems.
			</p>
			<p class="text-gray-700 leading-relaxed mb-4">
				Contact us today to learn more about our contactor switches and how we can help you find the right solution for your application.
			</p>
			</div>

		`
	},
	'6': {
		imgUrl: 'products-logo-plc.png',
		name: 'Logo PLCs',
		hint: `Automate your processes with Logo PLC - a compact and easy-to-program logic controller. Its intuitive software and versatile functionality make it an ideal choice for small-scale automation tasks.`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Solar MPPT Charge Controller</h2>
				<p class="text-lg leading-7 mb-6">
					Get the most out of your solar panels with our Solar MPPT Charge Controller. With its
					advanced Maximum Power Point Tracking (MPPT) technology, it maximizes the energy harvested
					from your solar panels, ensuring optimal performance and efficiency.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">Multiple charging modes to fit your specific needs</li>
					<li class="text-lg leading-7">
						Intelligent protection features to prevent overcharging, overheating and more
					</li>
					<li class="text-lg leading-7">Easy to install and use, with a user-friendly interface</li>
					<li class="text-lg leading-7">
						Durable and reliable, built to withstand harsh weather conditions
					</li>
				</ul>
				<p class="text-lg leading-7">
					Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from
					small off-grid systems to large commercial installations. It is backed by a warranty for
					your peace of mind, so you can trust that you are getting the best quality product on the
					market. Contact us today to learn more about our Solar MPPT Charge Controller and how it
					can benefit your solar system.
				</p>
			</div>`
	},
	'7': {
		imgUrl: 'products-solar.png',
		name: 'Solar Panels',
		hint: `Harness the power of the sun with our high-quality solar panels. Designed to be efficient and durable, our panels provide a reliable source of clean energy for your home or business. With a variety of sizes and configurations available, we can help you find the perfect solution for your specific needs. Take control of your energy future and reduce your carbon footprint with our solar panels`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Solar MPPT Charge Controller</h2>
				<p class="text-lg leading-7 mb-6">
					Get the most out of your solar panels with our Solar MPPT Charge Controller. With its
					advanced Maximum Power Point Tracking (MPPT) technology, it maximizes the energy harvested
					from your solar panels, ensuring optimal performance and efficiency.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">Multiple charging modes to fit your specific needs</li>
					<li class="text-lg leading-7">
						Intelligent protection features to prevent overcharging, overheating and more
					</li>
					<li class="text-lg leading-7">Easy to install and use, with a user-friendly interface</li>
					<li class="text-lg leading-7">
						Durable and reliable, built to withstand harsh weather conditions
					</li>
				</ul>
				<p class="text-lg leading-7">
					Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from
					small off-grid systems to large commercial installations. It is backed by a warranty for
					your peace of mind, so you can trust that you are getting the best quality product on the
					market. Contact us today to learn more about our Solar MPPT Charge Controller and how it
					can benefit your solar system.
				</p>
			</div>`
	},
	'8': {
		imgUrl: 'products-westech-inverter.png',
		name: 'Sine Wave Inverters',
		hint: `
			Get reliable and stable power for your electronics with our sine wave inverters. Designed for efficiency and durability, our inverters provide clean power for sensitive electronics, ensuring that they run smoothly and without interruption. With various sizes and capacities available, we can help you find the right inverter for your needs. Don't let power fluctuations damage your electronics, trust our sine wave inverters for consistent and stable power.
		`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Solar MPPT Charge Controller</h2>
				<p class="text-lg leading-7 mb-6">
					Get the most out of your solar panels with our Solar MPPT Charge Controller. With its
					advanced Maximum Power Point Tracking (MPPT) technology, it maximizes the energy harvested
					from your solar panels, ensuring optimal performance and efficiency.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">Multiple charging modes to fit your specific needs</li>
					<li class="text-lg leading-7">
						Intelligent protection features to prevent overcharging, overheating and more
					</li>
					<li class="text-lg leading-7">Easy to install and use, with a user-friendly interface</li>
					<li class="text-lg leading-7">
						Durable and reliable, built to withstand harsh weather conditions
					</li>
				</ul>
				<p class="text-lg leading-7">
					Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from
					small off-grid systems to large commercial installations. It is backed by a warranty for
					your peace of mind, so you can trust that you are getting the best quality product on the
					market. Contact us today to learn more about our Solar MPPT Charge Controller and how it
					can benefit your solar system.
				</p>
			</div>`
	},
	'9': {
		imgUrl: 'products-electric.png',
		name: 'Electrical Accessories',
		hint: `Complete your electrical installations with our range of high-quality accessories. From wires and cables to sockets and switches, we've got you covered. Ensure your electrical system runs safely and efficiently with our reliable accessories. Shop now!`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Solar MPPT Charge Controller</h2>
				<p class="text-lg leading-7 mb-6">
					Get the most out of your solar panels with our Solar MPPT Charge Controller. With its
					advanced Maximum Power Point Tracking (MPPT) technology, it maximizes the energy harvested
					from your solar panels, ensuring optimal performance and efficiency.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">Multiple charging modes to fit your specific needs</li>
					<li class="text-lg leading-7">
						Intelligent protection features to prevent overcharging, overheating and more
					</li>
					<li class="text-lg leading-7">Easy to install and use, with a user-friendly interface</li>
					<li class="text-lg leading-7">
						Durable and reliable, built to withstand harsh weather conditions
					</li>
				</ul>
				<p class="text-lg leading-7">
					Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from
					small off-grid systems to large commercial installations. It is backed by a warranty for
					your peace of mind, so you can trust that you are getting the best quality product on the
					market. Contact us today to learn more about our Solar MPPT Charge Controller and how it
					can benefit your solar system.
				</p>
			</div>`
	},
	'10': {
		imgUrl: 'products-schneider.breaker.png',
		name: 'Circuit Breakers',
		hint: `Protect your electrical equipment and systems with our high-performance circuit breakers. Our range includes both miniature and molded case circuit breakers for various applications. Choose from different sizes and amperage ratings to meet your needs. Trust our circuit breakers to provide reliable protection. Shop now!`,
		desc: `
			<div class="p-8">
				<h2 class="text-3xl font-bold mb-4">Solar MPPT Charge Controller</h2>
				<p class="text-lg leading-7 mb-6">
					Get the most out of your solar panels with our Solar MPPT Charge Controller. With its
					advanced Maximum Power Point Tracking (MPPT) technology, it maximizes the energy harvested
					from your solar panels, ensuring optimal performance and efficiency.
				</p>
				<ul class="list-disc list-inside mb-6">
					<li class="text-lg leading-7">Multiple charging modes to fit your specific needs</li>
					<li class="text-lg leading-7">
						Intelligent protection features to prevent overcharging, overheating and more
					</li>
					<li class="text-lg leading-7">Easy to install and use, with a user-friendly interface</li>
					<li class="text-lg leading-7">
						Durable and reliable, built to withstand harsh weather conditions
					</li>
				</ul>
				<p class="text-lg leading-7">
					Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from
					small off-grid systems to large commercial installations. It is backed by a warranty for
					your peace of mind, so you can trust that you are getting the best quality product on the
					market. Contact us today to learn more about our Solar MPPT Charge Controller and how it
					can benefit your solar system.
				</p>
			</div>`
	}
};

export default PRODUCTS;
