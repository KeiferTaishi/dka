import {fireEvent, render, screen} from "@testing-library/react";
import TroubleShooting from "../Pages/TroubleShooting";
import '@testing-library/jest-dom/extend-expect';

describe("Test Home component", ()=>{
    test("check all the page has been populated with the correct buttons", async() =>{
        render(<TroubleShooting/>);
        const buttonList = await screen.findAllByTestId("Btn")
        expect(buttonList).toBeInTheDocument;

    })
});

describe("Test Home component", ()=>{
    test("check all 3 buttons have been rendered correctly", async() =>{
        render(<TroubleShooting/>);
        const buttonList = await screen.findAllByTestId("Btn")
        expect(buttonList).toHaveLength(3);

    })
});

describe("Test Home component", ()=>{
    test("check to see if the data has been loaded into the h3 tags when mapping through", async() =>{
        render(<TroubleShooting/>);
        const answer = await screen.findAllByText("How do i know which infusions go in which IV line?");
        expect(answer).toBeInTheDocument;

    })
});

describe("Test Home component", ()=>{
    test("check to see if the data has been loaded into the p tags when mapping through", async() =>{
        render(<TroubleShooting/>);
        const answer = await screen.findAllByText("Yes, patients should take their usual prescribed subcut insulin in addition to any infusions.");
        expect(answer).toBeInTheDocument;

    })
});

describe("Test Home component", ()=>{
    test("test should fail due to this element being hidden", async() =>{
        render(<TroubleShooting/>);
        const answer = await screen.findAllByText("Yes, never manually insert potassium into the 0.9% Nacl bags. Wrong doses can lead to emergency situations.");
        expect(answer).not.toBeInTheDocument()

    })
});





