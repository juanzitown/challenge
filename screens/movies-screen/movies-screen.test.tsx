import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import MoviesScreen from ".";

describe("Movies Screen", () => {
  it("should have at least one movie rendered after API data fetched", async () => {
    const { queryAllByTestId } = render(<MoviesScreen />);
    await waitFor(() => {
      const movieItem = queryAllByTestId(/movie-item-.*/);
      expect(movieItem.length).toBeGreaterThan(0);
    });
  });

  it("should have year picker filter", async () => {
    const { getByTestId } = render(<MoviesScreen />);
    await waitFor(() => {
      const yearPicker = getByTestId("year-picker");
      expect(yearPicker).toBeTruthy();
    });
  });

  it("should have winner picker filter", async () => {
    const { getByTestId } = render(<MoviesScreen />);
    await waitFor(() => {
      const winnerPicker = getByTestId("winner-picker");
      expect(winnerPicker).toBeTruthy();
    });
  });
});
