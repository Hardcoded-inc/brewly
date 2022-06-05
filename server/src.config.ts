const port = isTest
    ? Number(process.env.APP_TEST_PORT) || 3001
    : Number(process.env.APP_PORT) || 3000