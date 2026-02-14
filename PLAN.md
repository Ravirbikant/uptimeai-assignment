# GitHub Profile Page – Implementation Plan

Macro steps to build the app. Follow in order; steps 4 and 5 can be done in parallel.

---

## 1. Project setup

- Install dependencies: charting library (Plotly or ECharts), and anything else needed (e.g. fetch/axios).
- Define folder structure: e.g. `components/`, `styles/`, `hooks/`, `utils/`, `data/` (for mock data).

---

## 2. Layout and static UI

- Build the **page shell**: top header (logo, nav tabs, search, icons), left sidebar area, main content area, footer.
- Implement **left panel** structure: placeholders for avatar, name, username, bio, edit button, followers/following, contact rows, achievements, orgs.
- Implement **main content** structure: “Popular repositories” grid, “Contributions in the last year” block, “Activity overview”, “Contribution activity” list.
- Use **CSS only** (no chart yet)—e.g. a fixed-size container where the heatmap will go.

---

## 3. Mock data

- Define mock data for: user (fallback), popular repos, activity overview, contribution activity list.
- Wire mock data into the left panel and main sections so the page looks complete before wiring real APIs.

---

## 4. GitHub User API (left panel)

- Call `GET https://api.github.com/users/shreeramk` (or chosen username).
- Map API response to the left panel (name, login, bio, location, email, blog, company, followers, following, avatar_url, etc.).
- Add loading and error states; optionally keep mock data as fallback.

---

## 5. Contributions data and heatmap

- Decide how to get contribution data: public GitHub contribution API (or unofficial approach) or a mock contribution dataset (e.g. array of `{ date, count }`).
- Install and use **Plotly** or **ECharts** to render the **heatmap** (green shades, one cell per day, “Less ↔ More” style).
- Add a **year selector** (e.g. 2024, 2023, …) and wire it so the heatmap updates by year.

---

## 6. Tabs

- Add state for the active tab: `Overview | Repositories | Projects | Packages | Stars`.
- Render **Overview** content in the main area; for **Repositories**, **Projects**, **Packages**, **Stars** show empty or “No content” placeholders.
- Style the active tab and make all tabs clickable.

---

## 7. Responsive and design match

- Add media queries and flexible layout (e.g. sidebar stacks or hides on small screens, header adapts).
- Refine typography, spacing, and colors to match the design/screenshot.

---

## 8. Optional extras

- Replace more mock data with real APIs (e.g. repos list, events) for extra points.
- Add error/empty states and loading UIs where useful.

---

## Suggested order

1 → 2 → 3 (so the page looks complete), then 4 and 5 (APIs + heatmap), then 6 (tabs) and 7 (responsive + polish).
