# Banner Management System

## Overview

This project is a simple one-page website featuring a banner with a countdown timer. The banner's visibility, content, and duration can be managed via an internal dashboard. The project uses MySQL for database management.

## Features

- **Banner On/Off:** Toggle the visibility of the banner.
- **Banner Description:** Update the content displayed in the banner.
- **Banner Timer:** Set a countdown timer for the banner, displayed as a reverse clock.
- **Banner Link:** Add a clickable link to the banner, directing users to a specified URL.

## Project Structure
/banner
│
├── /backend
│ ├── config.php # Database connection settings
│ ├── update_banner.php # Script to handle updates from the dashboard
│ ├── get_banner.php # API to fetch current banner details
│ └── create_table.sql # SQL script to create the banners table
│
├── /dashboard
│ ├── index.html # HTML for the dashboard interface
│ ├── dashboard.css # CSS for styling the dashboard
│ └── dashboard.js # JavaScript for handling dashboard interactions
│
├── /frontend
│ ├── index.html # Main website page displaying the banner
│ ├── style.css # CSS for styling the frontend
│ └── script.js # JavaScript for countdown timer and banner handling

# Project documentation

## Database Setup

To set up the database, use the following SQL script:

```sql
CREATE TABLE banners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    is_visible BOOLEAN NOT NULL DEFAULT 1,
    timer INT NOT NULL,
    link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

