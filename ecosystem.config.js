const os = require('os');
module.exports = {
  apps: [
    {
      name: 'NodeJS-API',
      script: './server.js',
      cwd: `${__dirname}/app`,
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '750M',
      log_date_format: 'YYYY/MM/DD HH:mm:ss',
    },
  ],
};