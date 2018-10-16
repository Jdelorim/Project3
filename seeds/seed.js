var db = require("../models");
//can import users and items as separate json files by requiring them here at the top

db.sequelize.sync({ force: true }).then(function() {
    seed();
});


function seed() {


    let users = [
        {
            username: "user1",
            email: "user1@email.com",
            password: "password"
        },
        {
            username: "user2",
            email: "user2@email.com",
            password: "password"
        },
        {
            username: "user3",
            email: "user3@email.com",
            password: "password"
        }
    ]

    let items = [
        // {
        //     description: 
        //     type:
        //     img: 
        // },
        // {
        //     description: 
        //     type:
        //     img: 
        // },
        // {
        //     description: 
        //     type:
        //     img: 
        // },
        // {
        //     description: 
        //     type:
        //     img: 
        // },
        // {
        //     description: 
        //     type:
        //     img: 
        // },
        // {
        //     description: 
        //     type:
        //     img: 
        // }
    ]

    function getRandomInt(min, max) {
        //Will return a number inside the given range, inclusive of both minimum and maximum
        //i.e. if min=0, max=20, returns a number from 0-20
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    users.forEach(user=>{
        db.User.create(user)
        .then(result => {
            console.log(result);
            let userClothingCount = getRandomInt(0 , 20);
            for (let i = 0; i < userClothingCount; i++) {
                let itemIndex = getRandomInt(0, items.length);
                let item = items[itemIndex];
                item.UserID=result.dataValues.id;
                db.Item.create(item)
                .then(result=> {
                    console.log(result);
                })
            }
        }) 
    })
}