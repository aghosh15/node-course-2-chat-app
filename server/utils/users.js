class Users {
    constructor () {
        this.users = [];
    }

    addUser(id, name, room) {
        const user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        let i = -1;
        const user = this.users.filter((item, index) => {
            if (item.id === id) {
                i = index;
                return true;
            }

            return false;
        })[0];

        if (user) {
            this.users.splice(i, 1);
        }
        return user;
    }

    getUser(id) {
        const user = this.users.filter((item) => {
            return item.id === id;
        })[0];

        return user;
    }

    getUserList(room) {
        const roomUsers = this.users.filter((item) => {
            return item.room === room;
        });

        const namesArray = roomUsers.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {
    Users
};
