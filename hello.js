// this function is take arg from the in output if the arg is not entred that will print hello  world
const nameArg = (process.argv[2] || 'world');
console.log('Hello',nameArg);
