import { screen, waitFor, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToursPage from "./page";

describe("ToursPage", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("Test 1", async () => {
    const mockUserData = [
      {
        id: 123,
      },
      {
        id: 234,
      },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(mockUserData));
    render(<ToursPage />);

    await waitFor(() => {
      mockUserData.forEach(({ id }) => {
        expect(screen.getByText(id)).toBeInTheDocument();
      });
    });
  });
});
