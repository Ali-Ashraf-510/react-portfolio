// src/components/ProjectFilter.jsx
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';

/**
 * ProjectFilter Component
 * Advanced project filtering and sorting system
 * 
 * @param {Array} projects - Array of project objects
 * @param {Function} openModal - Function to open project modal
 * @param {string} className - Additional CSS classes
 */
const ProjectFilter = ({ projects = [], openModal, className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(projects.map(project => project.category || 'general'))];
    return cats;
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => 
        (project.category || 'general') === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'date':
          return new Date(b.date || 0) - new Date(a.date || 0);
        case 'complexity':
          return (b.techStack?.length || 0) - (a.techStack?.length || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, selectedCategory, searchTerm, sortBy]);

  return (
    <div className={`project-filter ${className}`}>
      {/* Filter Controls */}
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="search" className="filter-label">
            <i className="fas fa-search"></i>
            Search Projects
          </label>
          <input
            type="text"
            id="search"
            className="filter-input"
            placeholder="Search by name, description, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="category" className="filter-label">
            <i className="fas fa-tags"></i>
            Category
          </label>
          <select
            id="category"
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort" className="filter-label">
            <i className="fas fa-sort"></i>
            Sort By
          </label>
          <select
            id="sort"
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="complexity">Complexity</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="results-info">
        <span className="results-count">
          Showing {filteredAndSortedProjects.length} of {projects.length} projects
        </span>
        {(selectedCategory !== 'all' || searchTerm) && (
          <button
            className="clear-filters-btn"
            onClick={() => {
              setSelectedCategory('all');
              setSearchTerm('');
              setSortBy('date');
            }}
          >
            <i className="fas fa-times"></i>
            Clear Filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredAndSortedProjects.length > 0 ? (
          filteredAndSortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
            />
          ))
        ) : (
          <div className="no-projects">
            <i className="fas fa-search"></i>
            <h3>No projects found</h3>
            <p>Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;
