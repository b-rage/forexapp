const GbpjpyComp = require("./GbpjpyComp")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new GbpjpyComp.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
