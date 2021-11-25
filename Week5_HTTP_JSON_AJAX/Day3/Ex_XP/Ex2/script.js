// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

new Promise((resolve) => {
	setTimeout(() => resolve('success'), 4000);
  })
	.then((result) => console.log(result))
	.catch(() => console.log('Ooops something went wrong'));
  
Promise.resolve('success')
	.then((result) => console.log(result))
	.catch(() => console.log('Ooops something went wrong'));