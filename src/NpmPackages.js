import { useState, useEffect } from 'react';

function NpmPackages(props) {
  const [packages, setPackages] = useState(null);

  useEffect(() => {
    fetch(`https://registry.npmjs.org/-/v1/search?text=author:${props.userName}&size=${props.pkgNum}`)
      .then(res => res.json())
      .then(res => {
        setPackages(res.objects);
        props.onLoad();
      });
  }, []);

  if (packages) {
    return (
      <div>
        Last {props.pkgNum} npm packages:
        <ul>
          {packages.map((item, index) => (
            <li key={index}>
              {item.package.name} v{item.package.version}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default NpmPackages;
