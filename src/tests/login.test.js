import { render, screen } from '@testing-library/react'
import Login from '../../src/components/Login/login'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


test('Initial conditions', () => {
    render(<Login />)

    const comInput = screen.getByRole("textbox");
    expect(comInput).toBeInTheDocument()
    const checkbox = screen.getByLabelText('Remember me', { exact: false })
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole('button', { name: 'comment', exact: false })
    expect(submitButton).toBeDisabled()
})

test('Enable submit button on type', async () => {
    render(<Login />)
    const comInput = screen.getByRole("textbox");
    const checkbox = screen.getByLabelText('Remember me', { exact: false })
    const submitButton = screen.getByRole('button', { name: 'write comment here', exact: false })

    // fireEvent.change(comInput, { target: { value: "something" } })
    await userEvent.type(comInput, "something")
    await userEvent.click(checkbox)

    expect(submitButton).toBeEnabled()
    await userEvent.click(checkbox)
    expect(submitButton).toBeDisabled()

})