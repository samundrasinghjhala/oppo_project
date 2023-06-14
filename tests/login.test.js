import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "../src/components/Login/login"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom';
import axios from "../src/axios";

jest.mock('axios');

afterEach(() => {
  axios.post.mockClear();
});
test("should have correct login page ui", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>)

  const label = screen.getByRole('heading')
  expect(label).toHaveTextContent('Login')
})

test("should have correct login page ui", async () => {
  axios.post.mockResolvedValueOnce({
    data: {
      data: {
        role: 'admin'
      }
    }
  });
  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>)

  fireEvent.change(screen.getByLabelText('Email', { selector: 'input' }), { target: { value: 'admin@gmail.com' } });
  fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), { target: { value: 'Admin12345' } });
  fireEvent.click(screen.getByRole('button'))
  await waitFor(() => {
    expect(alertMock).toHaveBeenCalledTimes(1)
  })
})
