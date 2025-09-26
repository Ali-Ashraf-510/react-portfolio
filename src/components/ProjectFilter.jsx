// src/components/ProjectFilter.jsx
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { mlCategories, mlAlgorithms } from '../data/mlConstants';

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
  const [selectedMLType, setSelectedMLType] = useState('all');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(projects.map(project => project.category || 'general'))];
    return cats;
  }, [projects]);

  // Extract unique ML types from projects
  const mlTypes = useMemo(() => {
    const types = ['all', ...new Set(projects.map(project => project.mlType).filter(Boolean))];
    return types;
  }, [projects]);

  // Extract unique algorithms from projects
  const algorithms = useMemo(() => {
    const algs = ['all', ...new Set(projects.map(project => {
      if (project.algorithm) {
        // Convert algorithm name to key format
        return project.algorithm.toLowerCase()
          .replace(/[()]/g, '')
          .replace(/\s+/g, '-')
          .replace('convolutional-neural-network', 'cnn')
          .replace('k-nearest-neighbors', 'knn')
          .replace('k-means-clustering', 'k-means');
      }
      return null;
    }).filter(Boolean))];
    return algs;
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

    // Filter by ML type
    if (selectedMLType !== 'all') {
      filtered = filtered.filter(project => 
        project.mlType === selectedMLType
      );
    }

    // Filter by algorithm
    if (selectedAlgorithm !== 'all') {
      filtered = filtered.filter(project => {
        if (!project.algorithm) return false;
        const algorithmKey = project.algorithm.toLowerCase()
          .replace(/[()]/g, '')
          .replace(/\s+/g, '-')
          .replace('convolutional-neural-network', 'cnn')
          .replace('k-nearest-neighbors', 'knn')
          .replace('k-means-clustering', 'k-means');
        return algorithmKey === selectedAlgorithm;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.algorithm && project.algorithm.toLowerCase().includes(searchTerm.toLowerCase())) ||
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
        case 'algorithm':
          return (a.algorithm || '').localeCompare(b.algorithm || '');
        case 'complexity':
          return (b.techStack?.length || 0) - (a.techStack?.length || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, selectedCategory, selectedMLType, selectedAlgorithm, searchTerm, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedMLType('all');
    setSelectedAlgorithm('all');
    setSearchTerm('');
    setSortBy('date');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMLType !== 'all' || selectedAlgorithm !== 'all' || searchTerm;

  return (
    <div className={`project-filter ${className}`}>
      {/* Enhanced Filter Controls */}
      <div className="filter-controls-grid">
        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="search" className="filter-label">
              <i className="fas fa-search"></i>
              Search Projects
            </label>
            <input
              type="text"
              id="search"
              className="filter-input"
              placeholder="Search by name, algorithm, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
              <option value="algorithm">Algorithm</option>
              <option value="complexity">Complexity</option>
            </select>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="ml-type" className="filter-label">
              <i className="fas fa-brain"></i>
              ML Type
            </label>
            <select
              id="ml-type"
              className="filter-select"
              value={selectedMLType}
              onChange={(e) => setSelectedMLType(e.target.value)}
            >
              {mlTypes.map(type => (
                <option key={type} value={type}>
                  {mlCategories[type] || type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="algorithm" className="filter-label">
              <i className="fas fa-cogs"></i>
              Algorithm
            </label>
            <select
              id="algorithm"
              className="filter-select"
              value={selectedAlgorithm}
              onChange={(e) => setSelectedAlgorithm(e.target.value)}
            >
              {algorithms.map(algorithm => (
                <option key={algorithm} value={algorithm}>
                  {mlAlgorithms[algorithm] || algorithm.charAt(0).toUpperCase() + algorithm.slice(1)}
                </option>
              ))}
            </select>
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
        </div>
      </div>

      {/* Results Count and Active Filters */}
      <div className="results-info">
        <div className="results-summary">
          <span className="results-count">
            Showing {filteredAndSortedProjects.length} of {projects.length} projects
          </span>
          {hasActiveFilters && (
            <div className="active-filters">
              <span className="active-filters-label">Active filters:</span>
              <div className="filter-tags">
                {selectedMLType !== 'all' && (
                  <span className="filter-tag ml-type-tag">
                    <i className="fas fa-brain"></i>
                    {mlCategories[selectedMLType] || selectedMLType}
                    <button 
                      onClick={() => setSelectedMLType('all')}
                      className="filter-tag-remove"
                      aria-label="Remove ML type filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedAlgorithm !== 'all' && (
                  <span className="filter-tag algorithm-tag">
                    <i className="fas fa-cogs"></i>
                    {mlAlgorithms[selectedAlgorithm] || selectedAlgorithm}
                    <button 
                      onClick={() => setSelectedAlgorithm('all')}
                      className="filter-tag-remove"
                      aria-label="Remove algorithm filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="filter-tag category-tag">
                    <i className="fas fa-tags"></i>
                    {selectedCategory}
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className="filter-tag-remove"
                      aria-label="Remove category filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="filter-tag search-tag">
                    <i className="fas fa-search"></i>
                    "{searchTerm}"
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="filter-tag-remove"
                      aria-label="Remove search filter"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        {hasActiveFilters && (
          <button
            className="clear-filters-btn"
            onClick={clearAllFilters}
          >
            <i className="fas fa-times"></i>
            Clear All Filters
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
            <i className="fas fa-robot"></i>
            <h3>No ML projects found</h3>
            <p>Try adjusting your search criteria or filters to find different machine learning projects</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;
