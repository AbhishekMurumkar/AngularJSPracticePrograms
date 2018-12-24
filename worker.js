const worker = require('worker_threads');
console.log('hurray');
worker.on('message', resolve);
worker.on('error', reject);
worker.on('exit', (code) => {
    if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
});
