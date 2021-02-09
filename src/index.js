import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NpmPackages from './NpmPackages';
import GitHubRepos from './GitHubRepos';

ReactDOM.render(
  <React.StrictMode>
    <NpmPackages userName="eneko89" pkgNum="5"/>
    <GitHubRepos userName="eneko89" repoNum="5"/>
  </React.StrictMode>,
  document.getElementById('root')
);
