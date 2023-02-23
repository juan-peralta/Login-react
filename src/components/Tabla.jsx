import React, { useState } from 'react';

function Tabla() {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 35 },
    { id: 3, name: 'Bob', age: 42 },
  ]);

  const [filters, setFilters] = useState({
    name: '',
    age: '',
  });

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const applyFilters = () => {
    let filteredData = data;

    if (filters.name) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.age) {
      filteredData = filteredData.filter(
        (item) => item.age.toString() === filters.age
      );
    }

    return filteredData;
  };

  const handleFilterApply = () => {
    const filteredData = applyFilters();
    setData(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />
      <input
        type="text"
        name="age"
        value={filters.age}
        onChange={handleFilterChange}
        placeholder="Filter by age"
      />
      <button onClick={handleFilterApply}>Apply Filters</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;