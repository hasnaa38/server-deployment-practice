'use strict';

const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app); //Create a new supertest instance for app

// API server testing:
describe('API server testing', () => {
    // Test if handles invalid URLs
    test('Test 1: handles invalid URLs', async() => {
        const response = await request.get('/not-found');
        expect(response.status).toEqual(404); 
    });
    // Test if proof of life works
    test('Test 2: the proof of life works', async() => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('running successfully');
    });
     
    // Test if the data endpoint works
    test('Test 3: the data endpoint works', async() => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof(response.body)).toEqual('object');
    });

    // Test if the stamper middleware works
    test('Test 4: the stamper middleware works', async() => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(response.body.time).toBeDefined();
    });
})

/* Testing example:
function calc (num1, num2) {
    return Number(num1) + Number(num2);
}

describe('example testing unit', () => {
    // First testing unit
    test('Case1: sum of 2+2 should be 4', async() => {
        const sum = calc(2, 2);
        expect(sum).toEqual(4);
    });
    // Second testing unit
    test('Case2: sum of 3+8 should be 11', async() => {
        const sum = calc('3', 8);
        expect(sum).toEqual(11);
    });
}) */