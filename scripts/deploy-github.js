const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:connecticut-digital-services/connecticut-digital-services.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)