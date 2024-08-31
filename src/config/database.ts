import { Sequelize } from 'sequelize-typescript';
import express from 'express';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, '../../database.sqlite'),
  models: [__dirname + '/../models'],
});
