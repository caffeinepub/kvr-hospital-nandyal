# Specification

## Summary
**Goal:** Remove any remaining occurrences of old phone numbers across the frontend (especially footer/contact areas) and ensure only the correct KVR Hospital numbers and call links are shown.

**Planned changes:**
- Search all frontend files (including `frontend/index.html` and `frontend/src/**/*.tsx`) for old phone numbers and replace them with the correct numbers, updating any `tel:` links accordingly.
- Introduce a single shared frontend constant/module for hospital contact details (phone numbers, `tel:` links, email, address) and refactor LandingPage, ContactSection, and Footer to consume these shared values instead of hardcoding.

**User-visible outcome:** The landing page (including footer/contact sections) displays only **08514 220234** and **7207534210**, and all call buttons/links dial **tel:08514220234** and **tel:7207534210**.
