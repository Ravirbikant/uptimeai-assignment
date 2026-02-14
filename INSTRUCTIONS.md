# GitHub Profile Page – Assignment Instructions

Reference: design matches the GitHub profile page (e.g. user `shreeramk`). Use the attached screenshot and live GitHub profile as visual reference.

---

## 1. Design the UI

- Build the React app to match the GitHub profile page layout and styling.
- Use **CSS** for all styling.
- The UI must be **responsive**.

---

## 2. Data Strategy

- Use **mock data** for everything except the parts specified in **Step 3**.
- You may use real APIs for other parts for extra points (optional).

---

## 3. API Integration (Required)

### 3a. Contribution heatmap (green graph)

- Integrate via a **GitHub contribution API** to get contribution data.
- If no suitable API is found, use mock data.
- Render the heatmap using a **graphing library**: **Plotly** or **ECharts**.
- Match the “contributions in the last year” style (grid, green shades, year selector).

### 3b. User profile (left panel)

- Use the **GitHub User API** to fetch the user and show details in the left panel.
- API reference: https://docs.github.com/en/rest/reference/users#get-a-user  
- Example: `https://api.github.com/users/shreeramk`
- Display: name, username, bio/title, skills, location, email, website, social links, followers, following, etc., as in the design.

### 3c. API docs

- Reference: https://docs.github.com/en/rest/reference

---

## 4. Tabs

- Tabs must be present and **working** (clickable): **Overview**, **Repositories**, **Projects**, **Packages**, **Stars**.
- Only the **Overview** tab needs real content.
- **Repositories**, **Projects**, **Packages** (and **Stars** if desired) can show empty or placeholder content when selected.

---

## 5. Design Fidelity

- Match the **attached design/screenshot** as closely as possible using CSS.
- Include: top header/nav, left profile panel, main content (popular repos, contribution heatmap, activity overview, contribution activity), and footer where applicable.

---

## 6. Extra (Optional)

- Using real APIs instead of mock data for other sections (e.g. repos, activity) can earn **extra points**.

---

## Quick checklist

- [ ] Responsive UI matching GitHub profile layout
- [ ] Mock data for non-API sections
- [ ] Contribution heatmap from GitHub API + Plotly or ECharts
- [ ] User profile left panel from `GET /users/:username`
- [ ] Working tabs (Overview with content; others can be empty)
- [ ] CSS-only styling, close to the design
