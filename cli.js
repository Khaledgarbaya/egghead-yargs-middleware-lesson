const argv = require('yargs')
const SECRET = 'egghead'
const checkSecret = argv => {
  if (argv.secret !== SECRET) {
    throw new Error('Please provide a secret')
  }
}
argv
  .command(
    'lessons',
    'List all lessons',
    yargs => {
      yargs.options('secret')
    },
    argv => {
      console.log(`
        Lessons: 
        - React hooks
        - React Suspense
      `)
    }
  )
  .command(
    'courses',
    'List all course',
    yargs => {
      yargs.options('secret')
    },
    argv => {
      console.log(`
        Courses: 
        - Beginner React
        - Advanced React
      `)
    }
  )
  .command(
    'instructors',
    'List all instructors',
    yargs => {
      return yargs.options('secret')
    },
    argv => {
      console.log(`
        Instructors: 
        - Joel Hooks
        - Kent C. dodds
      `)
    }
  )
  .middleware(checkSecret).argv
