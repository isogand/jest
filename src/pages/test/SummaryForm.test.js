import {render, screen} from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";
import userEvent from "@testing-library/user-event";

test('Initial conditions',()=>{
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox',{
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button',{name:/confirm order/i});
    expect(confirmButton).toBeDisabled();
});
test('Checkbox disables button on first click and enables on second click',()=>{
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox',{
        name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole('button',{name:/confirm order/i});

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

