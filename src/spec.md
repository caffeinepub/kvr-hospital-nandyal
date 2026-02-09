# Specification

## Summary
**Goal:** Update the landing page hero profile/logo image and the site favicon to match the latest uploaded display picture while ensuring “Cardiology” is not visible.

**Planned changes:**
- Regenerate the existing profile/logo asset at `/assets/generated/kvr-hospital-profile.dim_512x512.png` using the newly uploaded image, cropped to a square and suitable for the current hero display sizes.
- Regenerate the existing favicon asset at `/assets/generated/kvr-hospital-favicon.dim_32x32.png` derived from the newly uploaded image.
- Remove/avoid any visible “Cardiology” text in both the regenerated profile/logo image and favicon while keeping the same asset paths referenced by the frontend.

**User-visible outcome:** The landing page hero logo and browser tab favicon display the updated branding image (without “Cardiology”), and both assets continue to load from the same existing URLs without broken links.
