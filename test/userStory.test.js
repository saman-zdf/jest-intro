/*
User story: 
As a user, I want to be able to view my own progile day because I want ot customize my online account for interactions with other users

What crud do we need? 
Read for viewing data
update for custonizing data

Authorization:
User can edit only their own data 
user can not edit other user's data
Admin can edit any user's data

seed file needs to make: 
- At lease 2 users (one to act in the test, one to be edited upon)
- At least 1 admin 
- A bunch of valid data for the update test
- A bunch of invalid data for the update test
*/

describe('user table functionality', () => {
  test('User can view their own data', () => {});
  test('User can sign up a new account', () => {});
  test('User data can be edited with valid data', () => {});
  // Dark-path || unhappy test
  test('User data can not be edited with invalid data', () => {});
});

describe('User CRUD functionality as users', () => {
  test('User can edit their own data', () => {});
  test('User can edit other data', () => {});
  test('Admin can edit any users data', () => {});
});
