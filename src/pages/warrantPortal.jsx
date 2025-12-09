This file was copied out of a PDF export of my React Warrant Portal page. It contains valid content but the formatting and structure are broken (random line breaks, spacing, and some objects may be malformed).

Please do the following:

1. Rebuild a clean, valid React component file named WarrantPortal.jsx using this content.
   - Keep the top imports exactly once:
     import React, { useState, useMemo } from 'react';
     import { Helmet } from 'react-helmet';
     import { motion } from 'framer-motion';
     import { Search, Gavel, AlertTriangle } from 'lucide-react';
     import DirectoryCard from '@/components/DirectoryCard';

2. Make sure there is a single main component called WarrantPortal:
   - It should render the header, the state-level warrant directory A–Z, and the county-level sections exactly as in the PDF content.
   - Keep all JSX structure and UI behavior; do NOT remove sections, just fix the syntax and layout.

3. Fix ALL JavaScript syntax issues:
   - Every array must start with [ and end with ].
   - Every object must start with { and end with }.
   - Every property line must end with a comma, except the last property in an object.
   - Add or fix commas between objects in arrays (no stray identifiers like MS: or KY: inside arrays).
   - Remove any duplicated import blocks, leftover page headers, or PDF artifacts.

4. Normalize the data constants:
   - The main state-level directory should be in a constant like:
     const WARRANT_DIRECTORY = [ ... ];
     where each item is a state object with fields similar to:
     {
       id: 'xx',
       scope: 'state',
       stateCode: 'xx',
       stateName: 'State Name',
       agencyName: 'Agency Name',
       roleLabel: 'Role label',
       primaryLabel: 'Primary link text',
       primaryUrl: 'https://primary-url',
       backupLabel: 'Backup link text' || null,
       backupUrl: 'https://backup-url' || null,
       note: 'Short note about the state database.'
     }

   - The county-level entries should live in a separate constant like:
     const COUNTY_WARRANT_INDEX = [ ... ];
     with each item shaped like:
     {
       code: 'xx',
       state: 'State Name',
       level: 'LOCAL SEARCH',
       primaryCounty: { label: 'Main County', url: 'https://...' },
       counties: [
         { label: 'Another County', url: 'https://...' },
         // ...
       ],
       note: 'Short note about county-level search for this state.'
     }

   - If any county arrays are currently mixed into the main state directory, please move them into the county constant instead of leaving them inline in WARRANT_DIRECTORY.

5. At the end, export the component as:
   export default WarrantPortal;

Return the final cleaned and fully valid WarrantPortal.jsx code only.
Confirm that all syntax is valid and the file would compile in a typical React + Vite/CRA environment.
