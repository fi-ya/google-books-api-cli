const { exitProgram } = require('../utils/exitProgram');
const { exitGreeting } = require('../utils/terminalMessages');

const mockExit = jest.spyOn(process, 'exit')
    .mockImplementation(() => { });;

describe('exitProgram',()=> {

    test('exitProgram function exists', () => {
        expect(exitProgram).toBeDefined();
    })

    test('exitGreeting function exists', () => {
      expect(exitGreeting).toBeDefined();
    });

    test('should exit the program', () => {
        exitProgram();
        expect(mockExit).toHaveBeenCalledWith(1);
    });

    test('should have the correct goodbye message', () => {
        const result = exitGreeting();
        const expected = `Have a great day. Goodbye! 😊 `;
        expect(result).toEqual(expect.stringMatching(expected));
    });

    test('should have the correct goodbye message', () => {
      const result = exitGreeting();
      const expected = `Have a great day. Goodbye! 😊 `;
      expect(result).toEqual(expect.stringMatching(expected));
    });
})
