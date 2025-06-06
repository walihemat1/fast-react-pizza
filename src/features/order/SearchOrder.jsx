import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// in order to automatically submit the search query by hitting the enter key, we can wrap the input into a form.
function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    // set the query back to empty
    setQuery('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-28 rounded-full bg-yellow-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
