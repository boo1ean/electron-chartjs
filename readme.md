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

## License

MIT
