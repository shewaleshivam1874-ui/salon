import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export default function SortDropdown({ currentSort, onSortChange, totalItems }) {
  return (
    <div className="sort-bar">
      <span className="text-muted" style={{ fontSize: '0.9rem' }}>
        Showing {totalItems} treatment{totalItems !== 1 ? 's' : ''}
      </span>
      <div className="sort-select-wrap">
        <label htmlFor="sort-select" className="sort-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ArrowUpDown size={15} /> Sort by:
        </label>
        <select
          id="sort-select"
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="sort-select"
        >
          <option value="default">Default</option>
          <option value="recent">Most recent</option>
          <option value="price-high">Price (high to low)</option>
          <option value="price-low">Price (low to high)</option>
        </select>
      </div>
    </div>
  );
}
