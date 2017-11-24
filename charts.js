const ipcRenderer = require('electron').ipcRenderer;
const Chart = require('chart.js')

const ctx = document.getElementById('chart').getContext('2d');
ipcRenderer.on('create chart', (sender, opts) => {
	new Chart(ctx, opts)
})
