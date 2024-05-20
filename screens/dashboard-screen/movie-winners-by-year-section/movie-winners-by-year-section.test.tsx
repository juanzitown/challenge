import { render, waitFor, fireEvent,waitForElementToBeRemoved } from "@testing-library/react-native";
import React from "react";
import DashboardScreen from ".";

describe("Movie winners by year section", () => {
  it("should display a message when no movies are available", async () => {
    const { getByTestId } = render(<DashboardScreen />);
    const yearPicker = getByTestId("year-picker");
    fireEvent(yearPicker, 'valueChange', "2026"); //no data for year 2026 (future)
    await waitFor(() => {
      const noMoviesMessage = getByTestId("non-ideal-state");
      expect(noMoviesMessage).toBeTruthy();
    });
  });
  it("should have movies after API data fetched with year 2000", async () => {
    const { queryAllByTestId, getByTestId } = render(<DashboardScreen />);
    const yearPicker = getByTestId("year-picker");
    fireEvent(yearPicker, 'valueChange', "2000");
    await waitFor(async () => {
      const movies = queryAllByTestId(/movie-item-.*/);
      expect(movies.length).toBeGreaterThan(0);
    });
  });
});
