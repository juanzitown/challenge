import { render, waitFor, fireEvent,waitForElementToBeRemoved } from "@testing-library/react-native";
import React from "react";
import DashboardScreen from ".";

describe("Dashboard Screen", () => {
  it("should have years with multiple winners section", async () => {
    const { getByTestId } = render(<DashboardScreen />);
    await waitFor(() => {
      const node = getByTestId("years-with-multiple-winners-section");
      expect(node).toBeTruthy();
    });
  });
  it("should have top 3 studios with winners section", async () => {
    const { getByTestId } = render(<DashboardScreen />);
    await waitFor(() => {
      const node = getByTestId("top-studios-with-winners-section");
      expect(node).toBeTruthy();
    });
  });
  it("should have producers with longest and shortest interval between wins section", async () => {
    const { getByTestId } = render(<DashboardScreen />);
    await waitFor(() => {
      const node = getByTestId("interval-between-wins-by-producer-section");
      expect(node).toBeTruthy();
    });
  });
  it("should have list movies winners by year section", async () => {
    const { getByTestId } = render(<DashboardScreen />);
    await waitFor(() => {
      const node = getByTestId("movie-winners-by-year-section");
      expect(node).toBeTruthy();
    });
  });
});
