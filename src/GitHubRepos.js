import { useState, useEffect } from 'react';

function GitHubRepos(props) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.userName}/repos?per_page=${props.repoNum}&page=1&sort=updated`)
      .then(res => res.json())
      .then(res => setRepos(res))
  }, []);

  if (repos) {
    return (
      <div>
        Last {props.repoNum} GitHub repos:
        <ul>
          {repos.map((item, index) => (
            <li key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default GitHubRepos;
