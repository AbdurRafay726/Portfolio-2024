import ItemOfList from "../../components/ItemOfList";

export default function FarAway() {
  return (
    <ul className="text-[0.2vw] list-inside my-6 space-y-[0.7vw]">
      {/* Item 1 */}
      <ItemOfList title="Overview:">
        The FarAway is a compact application designed for creating travel
        checklists. It is developed using React.js.
      </ItemOfList>
      {/* Item 2 */}
      <ItemOfList title="Key Features:">
        The core features include state management, a component-based structure,
        sorting functionality, and alert confirmations.
      </ItemOfList>
      {/* Item 3 */}
      <ItemOfList title="Technologies:">
        This project is crafted using React, emphasizing its core
        functionalities. The application features a clean and straightforward
        design, prioritizing simplicity and usability.
      </ItemOfList>
      {/* Item 4 */}
      <ItemOfList title="Description:">
        This React-based project is a user-friendly application for creating
        travel checklists. Users can easily compile a list of items they intend
        to bring on their journey, selecting quantities from a dropdown menu.
        The app allows users to mark items as packed or unpacked and provides
        the option to delete items. An interactive sorting feature with three
        different options enhances list organization. Additionally, the app
        offers an overview that displays the percentage completion of the
        packing process.
      </ItemOfList>
    </ul>
  );
}
