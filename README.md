# 🏢 Mini Real Estate Floor Selector – Frontend Developer Task

### 👋 Hello!

This is a simplified interactive real estate UI built as part of the frontend developer test task assigned to **Abdullahi Olawale**. It demonstrates the ability to create structured components, stateful UI flows, and interactive user experience using **React** and **Tailwind CSS**.

---

## 📦 What It Does

The app allows users to explore apartment layouts in a multi-step interaction:

1. **Tower Selection Page**  
   Users are presented with three clickable towers: Tower A, Tower B, Tower C.

2. **Floor Selector View**  
   Upon selecting a tower, the user can pick from a list of 10–15 floors.

3. **Apartment Layouts View**  
   Once a floor is selected, the app displays 3–4 apartment thumbnails with:
   - A placeholder image
   - Metadata: area, unit type, room count

4. **Detailed Layout View**  
   When an apartment is clicked, a larger version is shown along with full metadata.

### ✨ Bonus Interaction

On hovering over a layout thumbnail:
- The floor background subtly darkens.
- The thumbnail scales up slightly with smooth animation.
- This works on both **desktop** and **mobile** via appropriate CSS and touch-safe interactions.

---

## 🛠️ Tools & Libraries

- **React** (with functional components and hooks)
- **Tailwind CSS** for utility-first styling and responsiveness
- **Lucide-react** icons for UI elements
- **Framer Motion** for smooth animations (bonus interaction)
- **Vercel** for live demo hosting

---

## 🚀 How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/FushRile/property-visualizer.git
cd property-visualize

-Install dependencies:
npm install
Run the development server: 
npm run dev

-Then go to http://localhost:3000 in your browser.

🔗 Deliverables
Item	Link
✅ GitHub Repo	https://github.com/FushRifle/property-visualizer
✅ Live Preview	https://floor-selector.vercel.app
✅ Loom Recording	https://loom.com/share/your-video-id

⚖️ Known Limitations
No actual backend – all tower, floor, and apartment data is mocked/dummy

Navigation is state-based and not routed (i.e., not using React Router or Next.js routing)

Layout images use placeholders; these can be swapped for real floorplan assets

⏱ Time Spent
⏳ Approximately 3.5 hours were spent on:

Component structure

State and props management

Responsive layout

Styling + animations

🧠 Thought Process
See the Loom video above for a 1–2 min walkthrough of:

Component hierarchy

Why Tailwind + Framer Motion were chosen

Tradeoffs taken to stay within timebox

✅ Conclusion
This app is a working prototype of an interactive floor selection system for a real estate platform. It demonstrates a clean component structure, reusability, responsiveness, and a pleasant UX even in a short development window.

Thanks for reviewing!
— Abdullahi Olawale Mukaila

---

Let me know if you need:
- Help with the actual code structure (`Towers → Floors → Apartments`)
- A Framer Motion animation for hover effects
- Help recording the Loom or hosting on Vercel quickly

I’m ready to walk through all of it step-by-step if needed.