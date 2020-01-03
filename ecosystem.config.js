module.exports = {
    apps: [{
      name: 'server-a',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-19-26-24.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/a.pem',
        ref: 'origin/master',
        repo: 'git@github.com:reperez/server-a.git',
        path: '/home/ubuntu/server-a',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }