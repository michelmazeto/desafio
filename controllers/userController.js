const fs = require("fs");

let users = [];

fs.readFile(`${__dirname}/../data/users-simple.json`, (err, data) => {
    if (err) throw err;
    users = JSON.parse(data);
});

exports.userSignUp = (req, res) => {
    const newUser = req.body;
    const duplicateUser = users.find(user => user.email === newUser.email);

    if (duplicateUser) return res.status(400).json({
        status: 'fail',
        message: 'Email already exists'
    });

    users.push(newUser);
    fs.writeFile(`${__dirname}/../data/users-simple.json`, JSON.stringify(users), err => {
        if (err) throw err;
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    });
};

exports.userSignIn = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user) return res.status(404).json({
        status: 'fail',
        message: 'User not found'
    });

    if (user.password !== password) return res.status(400).json({
        status: 'fail',
        message: 'Incorrect password'
    });

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
}
