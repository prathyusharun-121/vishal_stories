# Vishal's Stories — Sahara Story Dashboard

## Website flow

**Home / Dashboard → Story 1 → Chapter list → Chapter PDF**

The first page is now a dashboard for the whole collection. Story 1 is shown as a large library card. Clicking **Open Story 1** takes the visitor to `/story-1`.

The Story 1 page lists every chapter:
- **Chapter 1 — You and Me:** published, with Text PDF and Original Notebook PDF.
- **Chapter 2:** reserved as an unpublished chapter with the requested stay-tuned message.

The Story 1 page also contains an online PDF reader and download/view buttons.

## Theme

The default is daytime Sahara. The navigation has a Day/Night toggle. The choice is saved in the browser.

## Deploy

Import the project into Vercel. It is a standard Next.js project and the default Vercel settings are sufficient.

## Story PDFs

`public/stories/left-behind-you-and-me.pdf` is the formatted text PDF.
`public/stories/left-behind-original-notebook.pdf` is the original handwritten notebook PDF.


## Dashboard design

The home page is intentionally **not Sahara-themed**. It is a separate personal dashboard with:
- Michael Jackson imagery
- PlayStation 4 imagery
- A dramatic shadow-dance image
- A Story 1 launch card

Clicking **LEFT BEHIND / Enter Story** takes the visitor into the separate Sahara-themed Story 1 experience. The Sahara day/night design remains on the story pages.
