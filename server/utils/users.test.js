const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jim',
            room: 'Warlight'
        },
        {
            id: '2',
            name: 'Ted',
            room: 'CoD'
        },
        {
            id: '3',
            name: 'Fil',
            room: 'Warlight'
        }];
    });

    it('should add a new user', () => {
        let usersTest = new Users;
        const user = {
            id: '123',
            name: 'Anirban',
            room: 'People'
        };

        const resUser = usersTest.addUser(user.id, user.name, user.room);

        expect(usersTest.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const id = '2';
        const expectArr = [users.users[0], users.users[2]];
        const expectUser = users.users[1];

        const remUser = users.removeUser(id);
        expect(users.users).toEqual(expectArr);
        expect(remUser).toEqual(expectUser);
    });

    it('should not remove a user', () => {
        const id = '4';
        const expectArr = users.users;

        const remUser = users.removeUser(id);
        expect(users.users).toEqual(expectArr);
        expect(remUser).toBeFalsy();
    });

    it('should find user', () => {
        const id = '2';
        
        const user = users.getUser(id);
        expect(user).toEqual(users.users[1]);
    });

    it('should not find user', () => {
        const id = '4';

        const user = users.getUser(id);
        expect(user).toBeFalsy();
    });

    it('should return names for Warlight room', () => {
        const usersList = users.getUserList('Warlight');

        expect(usersList).toEqual(['Jim', 'Fil']);
    });

    it('should return names for CoD room', () => {
        const usersList = users.getUserList('CoD');

        expect(usersList).toEqual(['Ted']);
    });
});
