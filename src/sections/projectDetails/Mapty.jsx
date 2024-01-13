import ItemOfList from "../../components/ItemOfList";

export default function Mapty() {
  return (
    <ul className="text-[0.2vw] list-inside my-6 space-y-[0.7vw]">
      {/* Item 1 */}
      <ItemOfList title="Overview:">
        The Mapty App serves as a workout log, recording various types of
        exercises along with someother information. It also displays the workout
        locations on a map.
      </ItemOfList>
      {/* Item 2 */}
      <ItemOfList title="Key Features:">
        Key features include Object-Oriented Programming, Geolocation API
        integration, Fetch requests, and utilization of various libraries.
      </ItemOfList>
      {/* Item 3 */}
      <ItemOfList title="Technologies:">
        This project is constructed using Vanilla JavaScript, HTML, and CSS and
        stores data in the local storage of the browser. It incorporates
        libraries such as Leaflet for displaying maps and markers.
      </ItemOfList>
      {/* Item 4 */}
      <ItemOfList title="Description:">
        This JavaScript project is designed to record workouts, including
        location, displayed on an aesthetically pleasing map. Additional
        information such as distance, speed, and time is also captured.
        Moreover, clicking on a workout on the map moves the map to the location
        of that specific workout.
      </ItemOfList>
    </ul>
  );
}
