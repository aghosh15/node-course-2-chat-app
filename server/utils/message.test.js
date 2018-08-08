const expect = require('expect');

const {generateMessage} = require('./message');

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
