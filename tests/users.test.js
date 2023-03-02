// You already have the methods imported
const { id, username, email, password } = require('../users');
const {getUser, getUsers} = require('../users');

test('el id es ',()=>{
    expect.(getUser.id('"hpLover4"')).toBe("hpLover4");
})

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation