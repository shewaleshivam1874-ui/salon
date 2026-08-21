# Automations — setup guide

The website is a static HTML file, so it can't send emails or texts by itself. Below is the quickest real way to wire up each automation you asked for. None of these need custom code — all are free or near-free, no-code tools.

---

## 1. WhatsApp "Book Now" button — already working

The **Book on WhatsApp** button and the floating green button both open a chat with a pre-filled message.

To activate it:
1. The number appears across all 5 pages (`index.html`, `services.html`, `reviews.html`, `visit.html`, `book.html`) — in the hero/CTA buttons and the floating green button.
2. Find every `https://wa.me/910000000000` link.
3. Replace `910000000000` with the salon's real WhatsApp number in international format — e.g. `919876543210` for an Indian mobile `9876543210`. A find-and-replace across all files is the fastest way.

That's it. No account or signup needed.

---

## 2. Contact/booking form → emails you the inquiry

Recommended tool: **Formspree** (free tier: 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) and create a free account with the salon's email.
2. Create a new form — Formspree gives you an endpoint like `https://formspree.io/f/xxxxabcd`.
3. In `book.html`, find:
   ```html
   <form id="booking-form">
   ```
   Change it to:
   ```html
   <form id="booking-form" action="https://formspree.io/f/xxxxabcd" method="POST">
   ```
4. In `script.js`, delete the block starting with `var form = document.getElementById('booking-form');` (the booking form placeholder submit section) so the form submits normally instead of showing the demo message.
5. Every submission now lands straight in the salon's inbox, with name, phone, service, date/time and notes.

Alternative if you'd rather use Google Sheets: use a **Google Apps Script Web App** as the form's `action` URL — it writes each submission as a new row in a spreadsheet, which is also what step 3 below plugs into.

---

## 3. Google Reviews — live link is already in place

The **Read reviews on Google Maps** and **Leave us a review** buttons under "What regulars say" link straight to the salon's real Google Maps listing.

If you'd like an actual auto-refreshing star-rating widget embedded on the page (not just a link):
1. Sign up at [elfsight.com](https://elfsight.com) (free tier available) or [EmbedSocial](https://embedsocial.com).
2. Connect the salon's Google Business Profile.
3. Paste the widget's embed `<script>` snippet just before `</body>` in `reviews.html`, and add a `<div>` placeholder where you want the widget to appear (e.g. inside the `.reviews` section).

This needs the salon's Google Business Profile login, so it's a step best done by whoever manages that listing.

---

## 4. Appointment reminder via email/SMS

This is the one automation that needs a scheduled trigger, so it's built with **Zapier** or **Make.com** (both have free tiers) sitting between your form and the reminder.

Simplest path, using Formspree + Zapier:
1. In Zapier, create a new Zap with trigger **Formspree → New Submission**.
2. Add a **Delay** step: "Delay until [date field from form] minus 1 day."
3. Add an action step: **Email by Zapier** (or Gmail) → send a reminder to the customer's email from the form, OR **SMS by Zapier / Twilio** → text their phone number.
4. Turn the Zap on.

Using Google Sheets instead of Formspree works the same way, with trigger **Google Sheets → New Row** instead.

This gives you a real "reminder sent automatically the day before" flow without writing any backend code — Zapier/Make hold the schedule and send the message.

---

### Quick checklist before going live
- [ ] Replace the WhatsApp number (3 places)
- [ ] Replace the placeholder rate-card prices with real ones
- [ ] Connect the form to Formspree or Google Sheets
- [ ] Remove the demo JavaScript message once the form is connected
- [ ] Set up the Zapier/Make reminder flow
- [ ] (Optional) Add a live Google Reviews widget
