## Render [chart.js](http://www.chartjs.org/) charts using [electron](https://electronjs.org/)

Leverage `chart.js` and `electron` features for quick visualisations.

This modules just proxies options to `chart.js` constructor.

See [chart.js](http://www.chartjs.org/docs/latest/) documentation for options.

## Installation

```
npm i electron-chartjs
```

## Usage

The only difference from `chart.js` constructor - you need to skeep context argument.

Simple barchart:

```javascript
const chart = require('electron-chartjs')
chart({
	type: 'bar',
	data: {
		labels: ['a', 'b', 'c', 'd'],
		datasets: [{
			label: 'red bars',
			backgroundColor: '#ab1020',
			data: [0, 3, 4, 1],
		}],
	}
})
```

will render window with barchart.

For more charts check [chart.js docs](http://www.chartjs.org/docs/latest/)

## Why?

To reduce number of actions you need to perform for visualizing data from database using js.

No need to setup client + server to render some charts with js.

Example:

```javascript
const usersByAge = await knex.raw(`
	select age, count(age) as count
	from users
	group by age
`)
const labels = _.map(usersByAge, 'age')
const data = _.map(usersByAge, 'count')
chart({
	type: 'bar',
	data: {
		labels,
		datasets: [{
			label: 'users by age',
			backgroundColor: '#bada55',
			data,
		}],
	},
})
```

## License

MIT
