import { render, waitFor, fireEvent,waitForElementToBeRemoved } from "@testing-library/react-native";
import React from "react";
import MoviesScreen from ".";

describe("Movies Screen", () => {
  it("should have at least one movie rendered after API data fetched", async () => {
    const { queryAllByTestId } = render(<MoviesScreen />);
    await waitFor(async () => {
      const movies = queryAllByTestId(/movie-item-.*/);
      expect(movies.length).toBeGreaterThan(0);
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

  it("should display a message when no movies are available", async () => {
    const { getByTestId } = render(<MoviesScreen />);
    const yearPicker = getByTestId("year-picker");
    fireEvent(yearPicker, 'valueChange', "2026"); //no data for year 2026 (future)
    await waitFor(() => {
      const noMoviesMessage = getByTestId("non-ideal-state");
      expect(noMoviesMessage).toBeTruthy();
    });
  });

  it("should fetch more movies when the user clicks load more at bottom of the list", async () => {
    const { getByTestId, queryAllByTestId } = render(<MoviesScreen />);

    await waitFor(() => {
      const movieList = queryAllByTestId(/movie-item-*/);
      expect(movieList.length).toBe(9);
    });
    
    const loadMoreButton = getByTestId("load-more");
    fireEvent.press(loadMoreButton);

    await waitFor(() => {
      const movieList = queryAllByTestId(/movie-item-*/);
      expect(movieList.length).toBeGreaterThan(9);
    });
  });
});
