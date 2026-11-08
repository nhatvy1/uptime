module.exports = {
  apps: [
    {
      name: 'uptime',
      cwd: '/home/foxy/apps/uptime',
      script: 'dist/main.js',

      exec_mode: 'fork',

      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}