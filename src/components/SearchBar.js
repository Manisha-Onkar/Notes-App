import './SearchBar.css'
function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
}
export default SearchBar;
