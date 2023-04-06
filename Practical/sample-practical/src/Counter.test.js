import { fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

test("check the initial value of count", () => {
    const { getByTestId } = render(<Counter initialValue={0} />);
    let counter = Number(getByTestId("count").textContent);
    expect(counter).toEqual(0);
});


test("check the increment button", () => {
    const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
    let counter = Number(getByTestId("count").textContent);
    expect(counter).toEqual(0); //0


    let incrementBtn = getByRole('button', { name: 'Increment Count' });
    fireEvent.click(incrementBtn);
    let counterInc = Number(getByTestId("count").textContent);
    expect(counterInc).toEqual(1); //1

});