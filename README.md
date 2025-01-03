# React Router v6 Catch-All Route Unexpected Behavior

This repository demonstrates a subtle issue in React Router v6 when using the catch-all route (`/*`).  Navigation to an invalid URL sometimes results in a blank page instead of the expected 404 Not Found component.  The problem seems related to how the router handles client-side navigation errors in combination with the catch-all route.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to a non-existent route (e.g., `/invalid-path`).

## Expected Behavior

The `NotFound` component should render when navigating to an invalid path.

## Actual Behavior

Sometimes a blank page appears instead of the `NotFound` component. This is inconsistent and difficult to reproduce reliably, highlighting a potential race condition or edge case in React Router's handling of routing errors.
