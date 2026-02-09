# Jest Workshop Submission

## Student Details
- Name:Ayush Kumar Jha
- Roll Number:2024-B-04092005B
- GitHub Username:jhaayushkumar

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: No Coupon Case
**What it protects against:** Ensures that when no coupon is provided, the subtotal is returned as is (or with standard discount if >= 1000).

---

### 2. Test Name: SAVE10 Coupon
**What it protects against:** Verifies that the SAVE10 coupon applies a 10% discount, capped at 100.

---

### 3. Test Name: FLAT50 Boundary Case
**What it protects against:** Verifies that the FLAT50 coupon applies a flat 50 discount and handles boundary conditions (e.g., ensuring total doesn't drop below 0).

---

### 4. Test Name: Invalid Subtotal Throws Error
**What it protects against:** Ensures that the function throws an error for negative or invalid (non-numeric) subtotal values.

---

### 5. Test Name: Case-insensitive Coupon
**What it protects against:** Verifies that coupon codes are accepted regardless of case (e.g., "save10", "Flat50").

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No)
- GitHub Actions Run URL:

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

