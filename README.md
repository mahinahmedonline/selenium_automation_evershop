# Evershop E-Commerce Automation Testing

This project is an automated testing suite for the [Evershop Demo](https://demo.evershop.io) e-commerce application, developed using **Selenium WebDriver**, **Node.js**, and the **Chai** assertion library. 

This repository serves as a showcase of Software Quality Assurance (SQA) skills, specifically focusing on UI automation, dynamic test data handling, and robust element locating strategies.

## Testing Objectives & Scope
The primary goal of this automation script is to validate the core search functionality of the e-commerce platform.

**Key Test Scenarios:**
- **Dynamic Search Validation:** Automatically inputs randomized search terms (e.g., 'Cotton', 'Leather', 'Maxi') to simulate diverse user behavior.
- **Search Results Verification:** Validates that the returned product names accurately reflect the provided search query using Chai assertions.
- **UI Interaction:** Simulates real user interactions, including navigating to the URL, clicking the search icon, typing queries, and submitting via keyboard interactions.

## Technology Stack & Testing Tools
- **Automation Framework:** Selenium WebDriver (JavaScript/Node.js)
- **Assertion Library:** Chai (`expect` interface)
- **Browser:** Google Chrome
- **Locator Strategy:** XPath (for robust and precise custom element identification)

## SQA Skills Demonstrated
- **End-to-End (E2E) Testing:** Automating a critical user flow from navigating the homepage to viewing and verifying search results.
- **Dynamic Data Handling:** Implemented a custom randomization function (`getRandomInteger`) to pick search queries dynamically, ensuring tests validate multiple scenarios instead of a single hardcoded path.
- **Robust Assertions:** Utilizing Chai's `expect().to.include()` to confidently perform partial string matches on product titles, ensuring accurate verification.
- **Locator Mastery:** Utilizing specific and reliable XPath expressions to interact with web elements to ensure tests are not flaky.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- Google Chrome browser.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd selenium_automation_evershop
   ```
3. Install the required testing dependencies:
   ```bash
   npm install
   ```

### Running the Tests
To execute the automation script, run the following command in your terminal:
```bash
node test.js
```

## Project Structure
- `test.js`: Contains the core automation logic, including browser setup, setup, test execution steps, and assertions.
- `package.json`: Manages project metadata and dependencies.

## Test Execution Flow
1. Initializes a Chrome browser session.
2. Navigates to `https://demo.evershop.io`.
3. Maximizes the browser window for consistent layout rendering.
4. Locates and clicks the main search icon.
5. Randomly selects a search query from a predefined test data array.
6. Inputs the query and submits the search using the `ENTER` key.
7. Extracts the text of the first product name in the search results grid.
8. **Asserts** that the actual product name includes the expected search query.
9. Safely closes the browser instance after execution.
