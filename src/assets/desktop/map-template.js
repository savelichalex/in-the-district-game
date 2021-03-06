import { div, h1, img } from '@cycle/dom';

export function getInitialMapTemplate(key) {
	return div('.map-wrapper', [
		img({src: '/src/static/img/map.png'}),
		div('#map-console', [
			h1('.game-key', 'District id: ' + [key])
		])

	]);
}

export function getMapTemplate(key, Users, Bots) {
	const usersCoords = Object.keys(Users).map(key => Users[key]).map(user => user.coords).map(([x, y]) => {
		return div('.player', {
			style: {
				top: y / 135 * 100 + '%',
				left: x / 240 * 100 + '%'
			}
		})
	});

	const botsCoords = Bots.map(bot => bot.coords).map(([x, y], index) => {
		return div(index % 2 === 0 ? '.bot1' : '.bot2', {
			style: {
				top: y / 135 * 100 + '%',
				left: x / 240 * 100 + '%'
			}
		})
	});

	return div([
		div('.map-wrapper', [
			img({src: '/src/static/img/map.png'}),
			div('#map-console', [
				h1('.game-key', 'District id: ' + [key])
			])
		].concat(usersCoords).concat(botsCoords))
	])
}