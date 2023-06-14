import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "../src/components/Login/login"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom';
import axios from "../src/axios";
import { faker } from "@faker-js/faker";

jest.mock('axios');

afterEach(() => {
  axios.post.mockClear();
});

test("should have correct login page ui", async () => {
  axios.post.mockResolvedValueOnce({
    data: {
      results: {
        message: "Unauthorised access"
      }
    }
  });
  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>)

  fireEvent.change(screen.getByLabelText('Email', { selector: 'input' }), { target: { value: faker.internet.email() } });
  fireEvent.change(screen.getByLabelText('Password', { selector: 'input' }), { target: { value: faker.internet.password() } });
  fireEvent.click(screen.getByRole('button'))
  await waitFor(() => {
    expect(alertMock).toHaveBeenCalledTimes(0)
  })
})