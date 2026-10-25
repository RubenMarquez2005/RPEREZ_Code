import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	const lenis = new Lenis({ autoRaf: false, lerp: 0.085, smoothWheel: true });
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);

	gsap.from('[data-hero-item]', {
		y: 24,
		autoAlpha: 0,
		duration: 0.85,
		stagger: 0.12,
		ease: 'power3.out',
		delay: 0.12,
	});

	gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
		gsap.from(element, {
			y: 26,
			autoAlpha: 0,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: { trigger: element, start: 'top 87%', once: true },
		});
	});

	const heroMedia = document.querySelector<HTMLElement>('[data-hero-media]');
	const heroImage = heroMedia?.querySelector('img');
	if (heroMedia && heroImage && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
		heroMedia.addEventListener('pointermove', (event) => {
			const bounds = heroMedia.getBoundingClientRect();
			const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
			const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
			gsap.to(heroImage, { x: offsetX * -24, y: offsetY * -20, scale: 1.08, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
		});
		heroMedia.addEventListener('pointerleave', () => {
			gsap.to(heroImage, { x: 0, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', overwrite: 'auto' });
		});
	}

	if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
		gsap.utils.toArray<HTMLElement>('[data-tilt]').forEach((card) => {
			card.addEventListener('pointermove', (event) => {
				const bounds = card.getBoundingClientRect();
				const pointerX = (event.clientX - bounds.left) / bounds.width;
				const pointerY = (event.clientY - bounds.top) / bounds.height;
				card.style.setProperty('--spot-x', `${pointerX * 100}%`);
				card.style.setProperty('--spot-y', `${pointerY * 100}%`);
				gsap.to(card, {
					rotationY: (pointerX - 0.5) * 12,
					rotationX: (0.5 - pointerY) * 9,
					scale: 1.025,
					transformPerspective: 1000,
					duration: 0.32,
					ease: 'power3.out',
					overwrite: 'auto',
				});
			});
			card.addEventListener('pointerleave', () => {
				gsap.to(card, {
					rotationX: 0,
					rotationY: 0,
					scale: 1,
					duration: 0.8,
					ease: 'elastic.out(1, 0.55)',
					overwrite: 'auto',
				});
			});
		});
	}

	if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
		gsap.utils.toArray<HTMLElement>('.button-primary, .button-secondary, .header-cta').forEach((button) => {
			const moveX = gsap.quickTo(button, 'x', { duration: 0.3, ease: 'power3.out' });
			const moveY = gsap.quickTo(button, 'y', { duration: 0.3, ease: 'power3.out' });
			button.addEventListener('pointermove', (event) => {
				const bounds = button.getBoundingClientRect();
				moveX((event.clientX - bounds.left - bounds.width / 2) * 0.22);
				moveY((event.clientY - bounds.top - bounds.height / 2) * 0.22);
			});
			button.addEventListener('pointerleave', () => {
				moveX(0);
				moveY(0);
			});
		});
	}
}