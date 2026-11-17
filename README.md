# Saffron Table: Restaurant Website

A fast, responsive restaurant website built with **Next.js**, **TypeScript** and **Tailwind CSS**.
Demo project for a fictional restaurant.

**Live demo:** https://saffron-table-eta.vercel.app

## Features

- Home, Menu, About and Reservations pages
- Mobile-friendly navigation
- Menu content kept in one data file (`data/menu.ts`), so it's easy to update
- Online booking form with validation in the browser and on the server (`/api/reservations`)
- SEO titles and descriptions on every page

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Photos

Photos are free stock images from [Pexels](https://www.pexels.com), stored in `public/images/`
(`hero.jpg`, `about.jpg`, `dish-1.jpg`, `dish-2.jpg`, `dish-3.jpg`).
If a photo is missing, a warm gradient is shown instead.
