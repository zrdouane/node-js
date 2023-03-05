// function that fetch the user stored in os environment and print it .
// in os we use process.env.USER and in we use process.env.USERNAME .
const nameEnv = (process.argv[2] || process.env.USER)
console.log('Hello',nameEnv)
