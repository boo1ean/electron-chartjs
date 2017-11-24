const electron = require('electron')
const { spawn } = require('child_process')

module.exports = opts => {
	const child = spawn(electron, [__dirname + '/index.js', JSON.stringify(opts)], { stdio: 'inherit' })
	child.on('close', code => process.exit(code))
}
