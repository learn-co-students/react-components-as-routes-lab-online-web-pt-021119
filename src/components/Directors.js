import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
				{directors.map(director => {
					return (
						<div>
							<h1>{director.name}</h1>
							{director.movies.map(movie => {
								return (
									<ul>{movie}</ul>
								)
							})}
						</div>
					)
				})}
    </div>
  );
}

export default Directors
