const { exitProgram } = require('../utils/exitProgram');

const mockExit = jest.spyOn(process, 'exit')
    .mockImplementation(() => { });;

describe('exitProgram',()=> {

    test('exitProgram function exists', () => {
        expect(exitProgram).toBeDefined();
    })

    test('should exit the program', () => {
        exitProgram();
        expect(mockExit).toHaveBeenCalledWith(1);
    });

})
