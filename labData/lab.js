import * as fs from 'fs';
import path from 'path';

const PRODUCTS = [
	{
		name: 'Solar Charge Controller',
		imgUrl: '/products-change-controller.png',
		hint: 'Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from small off-grid systems to large commercial installations. It is backed by a warranty for your peace of mind, so you can trust that you are getting the best quality product on the market. Contact us today to learn more about our Solar MPPT Charge Controller and how it can benefit your solar system.',
		outline: {
			title: 'Solar MPPT Charge Controller',
			heading: `Get the most out of your solar panels with our Solar MPPT Charge Controller. With its advanced Maximum Power Point Tracking (MPPT) technology, it maximizes the energy harvested from your solar panels, ensuring optimal performance and efficiency.`,
			features: [
				'Durable and reliable, built to withstand harsh weather conditions',
				'Multiple charging modes to fit your specific needs',
				'Easy to install and use, with a user-friendly interface',
				'Intelligent protection features to prevent overcharging, overheating and mor'
			],
			paragraph: `Our Solar MPPT Charge Controller is suitable for a variety of solar applications, from small off-grid systems to large commercial installations. It is backed by a warranty for your peace of mind, so you can trust that you are getting the best quality product on the market. Contact us today to learn more about our Solar MPPT Charge Controller and how it can benefit your solar system.`
		}
	},
	{
		imgUrl: '/products-surge-switch.png',
		name: 'Surge Switches',
		hint: 'These Switches are built to withstand the toughest conditions, so you can trust that they will provide dependable surge protection when you need it most. With a range of models to choose from, we can help you find the right Surge Switch for your specific needs. Contact us today to learn more about our Surge Switches and how they can protect your electrical equipment from power surges.\n'
	},
	{
		imgUrl: '/products-off-grid.png',
		name: 'Off Grid Products',
		hint: 'Our Off-Grid Products are designed to provide you with reliable and sustainable power, no matter where you are. From solar panels to batteries and charge controllers, we have everything you need to power your off-grid lifestyle or backup power needs. With our expert guidance and support, we can help you choose the right products for your specific needs and budget. Contact us today to learn more about our Off-Grid Products and how they can help you take control of your energy needs.\n'
	},
	{
		imgUrl: '/products-epever-charge-controller.png',
		name: 'PWM Controllers',
		hint: 'With user-friendly interfaces and intuitive settings, our PWM controllers are easy to install and operate. Choose from a range of models suitable for various system sizes and requirements. Trust our PWM charge controllers to provide consistent and dependable performance for all your off-grid solar applications.\n'
	},
	{
		imgUrl: '/products-schneider-contactor.png',
		name: 'Contactor Switches',
		hint: 'These high-quality contactor switches are designed to provide reliable switching for your electrical circuits. With durable construction and superior performance, these switches are suitable for a wide range of industrial and commercial applications.\n'
	},
	{
		imgUrl: '/products-logo-plc.png',
		name: 'Logo PLCs',
		hint: 'Automate your processes with Logo PLC - a compact and easy-to-program logic controller. Its intuitive software and versatile functionality make it an ideal choice for small-scale automation tasks.'
	},
	{
		imgUrl: '/products-solar.png',
		name: 'Solar Panels',
		hint: 'Harness the power of the sun with our high-quality solar panels. Designed to be efficient and durable, our panels provide a reliable source of clean energy for your home or business. With a variety of sizes and configurations available, we can help you find the perfect solution for your specific needs. Take control of your energy future and reduce your carbon footprint with our solar panels'
	},
	{
		imgUrl: '/products-westech-inverter.png',
		name: 'Sine Wave Inverters',
		hint: "Get reliable and stable power for your electronics with our sine wave inverters. Designed for efficiency and durability, our inverters provide clean power for sensitive electronics, ensuring that they run smoothly and without interruption. With various sizes and capacities available, we can help you find the right inverter for your needs. Don't let power fluctuations damage your electronics, trust our sine wave inverters for consistent and stable power.\n\t\t"
	},
	{
		imgUrl: '/products-electric.png',
		name: 'Electrical Accessories',
		hint: "Complete your electrical installations with our range of high-quality accessories. From wires and cables to sockets and switches, we've got you covered. Ensure your electrical system runs safely and efficiently with our reliable accessories. Shop now!"
	},
	{
		imgUrl: '/products-schneider.breaker.png',
		name: 'Circuit Breakers',
		hint: 'Protect your electrical equipment and systems with our high-performance circuit breakers. Our range includes both miniature and molded case circuit breakers for various applications. Choose from different sizes and amperage ratings to meet your needs. Trust our circuit breakers to provide reliable protection. Shop now!'
	}
];

const COURSES = [
	{
		name: 'Solar Installation',
		imgUrl: '/services-solar.png',
		description:
			'Learn solar installation for a sustainable future. Our courses cover design, installation, and maintenance. Join TETI for hands-on training and industry-standard equipment.'
	},
	{
		name: 'Industrial Automation',
		imgUrl: '/services-automation.png',
		description:
			'Revolutionize manufacturing with our industrial automation training. Learn control systems, programming, and troubleshooting for a successful career. Join TETI today!'
	},
	{
		name: 'CCTV Installation',
		imgUrl: '/services-cctv.png',
		description:
			'Ensure safety and security with our CCTV installation training. covering design, installation, maintenance, and troubleshooting. Join us today for a successful career in this critical field.'
	},
	{
		name: 'Electrical Installation',
		imgUrl: '/services-electric.png',
		description:
			'At TETI, learn electrical installation for modern buildings. Our training covers design, installation, and maintenance for a successful career in this critical field. Join us today to gain the skills you need.'
	},
	{
		name: 'Satellite Installation',
		imgUrl: '/services-satellite.png',
		description:
			'At TETI, learn electrical installation for modern buildings. Our training covers design, installation, and maintenance for a successful career in this critical field. Join us today to gain the skills you need.'
	}
];

function write(string, data) {
	const p = path.resolve('labData', string.toLowerCase() + '.json');
	fs.writeFile(p, data, (err) => {
		if (err) {
			console.error(err.message);
		} else {
			console.log(string + ' file has been written');
		}
	});
}

write('Products', JSON.stringify(PRODUCTS));
