import React from "react";

const TableStyles = {
  width: "100%",
  textAlign: "center",
  padding: "3rem 5rem",
};

function Table({ covidData }) {
  return (
    <div>
      <table style={TableStyles}>
        <thead>
          <tr>
            <th>Countries</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
            <th>Death Rate</th>
            <th>Recovery Rate</th>
          </tr>
        </thead>
        <tbody>
          {covidData.Countries.map((countryData) => (
            <tr key={countryData.CountryCode}>
              <td>{countryData.Country}</td>
              <td>{countryData.TotalConfirmed}</td>
              <td>{countryData.TotalDeaths}</td>
              <td>{countryData.TotalRecovered}</td>
              <td>
                {(
                  (countryData.TotalDeaths * 100) /
                  countryData.TotalConfirmed
                ).toFixed(2)}
                %
              </td>
              <td>
                {(
                  (countryData.TotalRecovered * 100) /
                  countryData.TotalConfirmed
                ).toFixed(2)}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
