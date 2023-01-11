import {fireEvent, render, screen} from "@testing-library/react";
import Home from "../Pages/Home";
import App from "../App";
describe('Home component', () => {
  test('Check that firstname input is saved using usestate and onChange', () => {
    const { getByLabelText } = render(<Home />);
    const fNameInput = getByLabelText('Patient\'s firstname');
    fireEvent.change(fNameInput, { target: { value: 'Keifer' } });
    expect(fNameInput.value).toEqual('Keifer');
  });
});
describe('Home component', () => {
    test('Check that lastname input is saved using usestate and onChange', () => {
      const { getByLabelText } = render(<Home />);
      const lNameInput = getByLabelText('Patient\'s lastname');
      fireEvent.change(lNameInput, { target: { value: 'Teahan' } });
      expect(lNameInput.value).toEqual('Teahan');
    });
  });
describe('Home component', () => {
    test('Check that NHI input is saved using usestate and onChange', () => {
      const { getByLabelText } = render(<Home />);
      const nhiInput = getByLabelText('Patient\'s NHI');
      fireEvent.change(nhiInput, { target: { value: '123456' } });
      expect(nhiInput.value).toEqual('123456');
    });
  });
  describe('Home component', () => {
    test('Check that weight input is saved using usestate and onChange', () => {
      const { getByLabelText } = render(<Home />);
      const weightInput = getByLabelText('Patient\'s Weight');
      fireEvent.change(weightInput, { target: { value: '82' } });
      expect(weightInput.value).toEqual('82');
    });
  });


describe("Test Home component", ()=>{
    test("render homepage check buttons", async() =>{
        render(<Home/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);

    })
});



