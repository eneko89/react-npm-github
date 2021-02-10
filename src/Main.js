import { useState, useEffect } from 'react';
import NpmPackages from './NpmPackages';
import GitHubRepos from './GitHubRepos';

function Main(props) {
  const [loaded, setLoaded] = useState(0);

  function onLoad() {
    setLoaded(prev => prev + 1);
  }

  return (
    <div>
      <NpmPackages userName="eneko89" pkgNum="5" onLoad={onLoad}/>
      <GitHubRepos userName="eneko89" repoNum="5" onLoad={onLoad}/>
      {loaded === 2 && <div>Both loaded!</div>}
    </div>
  );
}

export default Main;
