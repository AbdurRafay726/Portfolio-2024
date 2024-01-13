import ItemOfList from "../../components/ItemOfList";

export default function WorldWise() {
  return (
    <ul className="text-[0.2vw] list-inside my-6 space-y-[0.7vw]">
      {/* Item 1 */}
      <ItemOfList title="Overview:">
        The World Wise is a Single Page Application (SPA) designed to record an
        individual's travels to various cities in different countries. It
        displays the location pins on an interactive map.
      </ItemOfList>
      {/* Item 2 */}
      <ItemOfList title="Key Features:">
        The core features include rendering maps with pins representing recent
        travels and a sidebar that displays a list of cities along with country
        flags and the date of travel.
      </ItemOfList>
      {/* Item 3 */}
      <ItemOfList title="Technologies:">
        This project is developed using React and React Router DOM,
        incorporating libraries such as Leaflet for map designs and
        datepicker.The styling is achieved through the use of CSS modules. It
        utilizes fetch requests, async/await functions, Context API, and custom
        hooks for enhanced functionality.
      </ItemOfList>
      {/* Item 4 */}
      <ItemOfList title="Description:">
        This React project utilizes React Router DOM for smooth navigation
        through different routes. The interactive design is crafted using CSS
        modules. Essential information, such as city name and ID, is transferred
        through the URL to display pins on the map and additional details like
        date and a note about the travel. Other routes include the countries
        visited, a form displayed when creating a new travel record, making the
        overall project interactive and beneficial for frequent travelers.
      </ItemOfList>
    </ul>
  );
}
