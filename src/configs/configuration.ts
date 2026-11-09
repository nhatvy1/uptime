export default () => ({
  port: parseInt(process.env.PORT ?? '', 10) || 4000,
  database: process.env.TEST_DATABASE || `database failed to load`,
});
