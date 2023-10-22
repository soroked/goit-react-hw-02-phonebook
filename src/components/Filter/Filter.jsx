export const Filter = ({ filter, handleInputChange }) => {
  return (
    <>
      <label htmlFor="findByName">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="findByName"
        value={filter}
        onChange={handleInputChange}
      />
    </>
  );
};
