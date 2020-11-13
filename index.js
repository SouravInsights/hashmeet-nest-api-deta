import HttpAdapterHost from '@nestjs/core';

const adapterHost = app.get(HttpAdapterHost);
const httpAdapter = adapterHost.httpAdapter;

const app = httpAdapter.getInstance();

module.exports = app;
