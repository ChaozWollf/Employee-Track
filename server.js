const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const app = express();
const PORT = process.env.PORT || 3001;

