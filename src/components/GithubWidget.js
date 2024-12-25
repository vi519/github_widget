import React, { useEffect, useState } from 'react';
import { github_end_point } from '../utils/Utils';


const GitHubWidget = ({ username="vi519" }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`${github_end_point}${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUser(data);
      } catch {
        setError(true);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (error) {
    return <div>Error loading widget. Please try again later.</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <></>
  );
};

export default GitHubWidget;
