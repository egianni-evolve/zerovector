# K-007 Mobile QA Report

**Site:** https://zerovector.design/open
**Viewport:** 375x812 (iPhone emulation)
**Date:** 2026-02-28
**Auditor:** K-007

---

## Issue 1: Nav bar text overlaps and clips on mobile

**Page:** /open (landing page)
**Severity:** High

The top navigation bar does not adapt to mobile width. "Zero-Vector / The Open Vector", "Learn", "Investiture", and the "FREE. ALWAYS FREE." button all compete for horizontal space. "Investiture" gets clipped by the button, and the site name wraps awkwardly. There is no hamburger menu on this page — only the inner /open/learn pages have one.

---

## Issue 2: "Investiture" nav link leads to a 404

**Page:** /open (landing page)
**Severity:** Critical

Both Investiture links on the /open page point to `/investiture`, which returns a 404 ("Signal Lost"). The page either does not exist yet or the links should point to a different URL. A user tapping this on mobile hits a dead end with no way to recover except the browser back button or the "Return to Origin" button.

---

## Issue 3: Large blank gaps when scrolling on mobile

**Page:** /open (landing page) and /open/learn
**Severity:** Medium

Multiple sections of the page have massive empty whitespace gaps that require extensive scrolling with no visible content. On mobile this is especially disorienting — users will think the page is broken or that it ended. This appears between the curriculum section cards and the footer area on both the /open and /open/learn pages.

---

## Issue 4: Sidebar navigation does not fully cover page content on mobile

**Page:** /open/learn/curriculum/* (lesson pages)
**Severity:** Medium

When tapping the hamburger menu icon on lesson pages, the sidebar slides in but does not cover the full viewport width. Page content (lesson text) bleeds through on the right side behind/beside the sidebar. This makes the menu hard to read and looks unfinished. The sidebar should either be full-width on mobile or have a solid overlay/backdrop behind it.

---

## Issue 5: Lesson pages load scrolled to wrong position

**Page:** /open/learn and /open/learn/curriculum/*
**Severity:** Medium

When navigating to the Learn page or tapping into a lesson, the page loads at a mid-scroll position instead of at the top. Users land in the middle of content with no context for what's above them. This may be caused by an anchor link, scroll restoration, or a layout shift pushing content during load.

---

## Summary

| # | Issue | Severity |
|---|-------|----------|
| 1 | Nav bar overlaps/clips on mobile | High |
| 2 | Investiture link is a 404 | Critical |
| 3 | Large blank scroll gaps | Medium |
| 4 | Sidebar doesn't cover full viewport | Medium |
| 5 | Pages load at wrong scroll position | Medium |
