const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    // Don't need done() because this is a sync test
    it('should generate the correct message object', () => {
        const from = 'Anirban';
        const text = 'This is a test';
        const testMessage = generateMessage(from, text);

        expect(testMessage).toInclude({
            from,
            text
        });
        expect(testMessage.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        const from = 'Anirban';
        const latitude = 10;
        const longitude = -15;
        const testLocationMessage = generateLocationMessage(from, latitude, longitude);

        expect(testLocationMessage).toInclude({
            from,
            url: `https://google.com/maps?q=${latitude},${longitude}`
        });
        expect(testLocationMessage.createdAt).toBeA('number');
    })
})
